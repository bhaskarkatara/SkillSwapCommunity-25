import { getChats } from '@/api/chat';
import ChatRoom from '@/components/Chat/ChatRoom';
import Sidebar from '@/components/Chat/Sidebar';
import { useUser } from '@/context/auth/useUser';
import { IChat } from '@/types/chat';
import { Loader2 } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const Chat: React.FC = () => {
  const [selectedUser, setSelectedUser] = useState(0);

  const { id } = useUser().user;
  const [chats, setChats] = useState<IChat[]>([]);
  const [chatsLoading, setChatsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setChatsLoading(true);
        const res = await getChats(id);

        if (!res.success) return toast.error(res.message);

        setChats(res.data);
        setChatsLoading(false);
      } catch (err) {
        console.log(err);
        toast.error('something went wrong. unable to fetch all chats');
        setChatsLoading(false);
      }
    })();
  }, []);

  const onSelect = (index: number) => setSelectedUser(index);

  if (!chatsLoading && chats.length === 0)
    return (
      <div className='h-screen bg-white flex items-center justify-center'>
        <h1 className='text-2xl font-semibold text-center'>
          No chats found.
          <br /> Make some swap requests to access Chats
        </h1>
      </div>
    );

  return (
    <div
      style={{ display: 'flex', height: '100vh', backgroundColor: '#f5f7fa' }}
    >
      <Sidebar chats={chats} loading={chatsLoading} onSelect={onSelect} />

      {chatsLoading ? (
        <div className='w-full flex justify-center items-center'>
          <Loader2 className='h-12 w-12 animate-spin' />
        </div>
      ) : (
        <ChatRoom chat={chats[selectedUser]} />
      )}
    </div>
  );
};

export default Chat;
