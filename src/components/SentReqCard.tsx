import { ISwapRequest } from '@/types/swal-request';
import { Badge } from './ui/badge';

export default function SentReqCard({ req }: { req: ISwapRequest }) {
  const {
    receiverDetails: receiver,
    request: { message, status, requestedSkill, offeredSkill },
  } = req;

  const bg =
    status === 'pending'
      ? '#F6E05E'
      : status === 'accepted'
        ? '#48BB78'
        : '#F56565';

  const label =
    status === 'pending'
      ? 'Pending'
      : status === 'accepted'
        ? 'Accepted'
        : 'Rejected';

  return (
    <div className='bg-white p-5 rounded-[10px] shadow-[0_2px_8px_rgba(0,0,0,0.1)] w-full text-center flex flex-col'>
      <div className='flex text-left gap-4 items-center'>
        <div className='w-12 h-12 bg-[#ddd] rounded-full flex items-center justify-center text-3xl text-[#555] font-bold'>
          {receiver.name.split(' ')[0]?.[0]?.toUpperCase()}
        </div>

        <div>
          <h2 className='font-bold'>{receiver.name}</h2>
          <p className='mb-1 color-[#666] text-xs'>📧 {receiver.email}</p>
          <p className='mb-2 color-[#666] text-xs'>📞 {receiver.contact}</p>
        </div>
      </div>

      <div className='text-left text-sm'>
        <span className=' font-semibold text-base'>
          Skill you want to learn:{' '}
        </span>
        {requestedSkill}
      </div>

      {status === 'accepted' && (
        <div className='text-left text-sm'>
          <span className=' font-semibold text-base'>
            Skill he want to learn:{' '}
          </span>
          {offeredSkill}
        </div>
      )}

      {message !== '' && (
        <div className='text-left text-sm mt-2'>
          <span className=' font-semibold text-base'>
            Note from your side: <br />
          </span>
          {message}
        </div>
      )}

      <Badge
        className={`mt-4 w-full py-2 font-semibold bg-[${bg}]`}
        variant='secondary'
      >
        {label}
      </Badge>
    </div>
  );
}
