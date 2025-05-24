import { getChat } from '@/api/chat';
import { IChat, IMessage } from '@/types/chat';
import { Loader2 } from 'lucide-react';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

export default function ChatRoom({ chat }: { chat: IChat }) {
  const { user, chatRoomId } = chat;
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [loading, setLoading] = useState(false);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const res = await getChat(chatRoomId);

        if (!res.success) {
          setLoading(false);
          return toast.error(res.message);
        }

        setLoading(false);
        setMessages(res.data);
      } catch (err) {
        console.log(err);
        toast.error('something went wrong. unable to fetch messages');
        setLoading(false);
      }
    })();
  }, [chat.chatRoomId]);

  return (
    <div className='flex flex-1 flex-col'>
      <div className='p-5 border-b-[1px] border-[#ddd] border-solid flex justify-between items-center bg-white'>
        <h2>Chat with {user.name}</h2>
        <button className='px-5 py-2 bg-[#3b82f6] text-white border-none rounded-sm cursor-pointer'>
          Start Video Call
        </button>
      </div>

      {/* Chat Messages */}
      <div className='flex-1 p-5 bg-[#f0f2f5] overflow-auto'>
        {loading ? (
          <div className='h-full flex justify-center items-center '>
            <Loader2 className='h-12 w-12 animate-spin' />
          </div>
        ) : (
          messages.map(msg => (
            <div
              key={msg.id}
              className='flex'
              style={{
                justifyContent:
                  msg.senderId !== user.id ? 'flex-end' : 'flex-start',
              }}
            >
              <div
                className='px-4 py-2 rounded-[10px] text-base max-w-[60%]'
                style={{
                  backgroundColor:
                    msg.senderId !== user.id ? '#d1fae5' : '#dbeafe',
                }}
              >
                {msg.message}
              </div>
            </div>
          ))
        )}
      </div>

      <div className='flex p-4 border-t-[1px] border-[#ddd] bg-white'>
        <input
          type='text'
          placeholder='Type your message...'
          value={newMessage}
          onChange={({ target }) => setNewMessage(target.value)}
          className='flex-1 p-2 border-[1px] border-[#ccc] rounded-sm mr-2'
        />
        <button
          //   onClick={handleSend}
          className='px-5 py-2 bg-[#3b82f6] border-none text-white cursor-pointer rounded-sm'
        >
          Send
        </button>
      </div>
    </div>
  );
}
