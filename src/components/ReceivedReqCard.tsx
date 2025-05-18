import { Badge } from './ui/badge';
import { Button } from './ui/button';
import ReqCardSkillInput from './ReqCardSkillInput';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { ISwapRequest } from '@/types/swal-request';

export default function ReceivedReqCard({ req }: { req: ISwapRequest }) {
  const {
    senderDetails: sender,
    request: { message, status, offeredSkill, requestedSkill },
  } = req;
  const [selectedSkill, setSeletedSkill] = useState('');

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
          {sender.name.split(' ')[0]?.[0]?.toUpperCase()}
        </div>

        <div>
          <h2 className='font-bold'>{sender.name}</h2>
          <p className='mb-1 color-[#666] text-xs'>📧 {sender.email}</p>
          <p className='mb-2 color-[#666] text-xs'>📞 {sender.contact}</p>
        </div>
      </div>

      <div className='text-left text-sm mt-2'>
        <span className=' font-semibold text-base'>
          Skill he want to learn:{' '}
        </span>
        {requestedSkill}
      </div>

      {status === 'pending' && (
        <div className='text-left text-sm flex gap-4 items-start mt-2'>
          <span className=' font-semibold text-base'>
            Skill you can learn from him:{' '}
          </span>

          <div className='flex-1'>
            <ReqCardSkillInput
              onSelect={(skill: any) => setSeletedSkill(skill)}
              allSkills={sender.skills}
            />
          </div>
        </div>
      )}

      {status == 'accepted' && (
        <div className='text-left text-sm'>
          <span className=' font-semibold text-base'>
            Skill you want to learn:{' '}
          </span>
          {offeredSkill}
        </div>
      )}

      {message !== '' && (
        <div className='text-left text-sm my-2'>
          <span className=' font-semibold text-base'>
            Note from their side: <br />
          </span>
          {message}
        </div>
      )}

      {status !== 'pending' ? (
        <Badge
          className={`mt-2 w-full py-2 font-semibold bg-[${bg}]`}
          variant='secondary'
        >
          {label}
        </Badge>
      ) : (
        <div className='flex gap-3 pt-2'>
          <Button
            onClick={() => toast.error('Backend to bana chutiye')}
            size='sm'
            className='cursor-pointer'
          >
            Accept
          </Button>
          <Button
            onClick={() => toast.error('Backend to bana chutiye')}
            variant='outline'
            size='sm'
            className='cursor-pointer'
          >
            Reject
          </Button>
        </div>
      )}
    </div>
  );
}
