import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { useUser } from '@/context/auth/useUser';
import { User } from '@/types/user';
import { useState } from 'react';
import toast from 'react-hot-toast';

export default function RequestSkillSwap({
  user,
  onClose,
  requestedSkill,
}: {
  user?: User;
  onClose: () => void;
  requestedSkill: string;
}) {
  const { skills } = useUser().user;
  const [offeredSkill, setOfferedSkill] = useState('');
  const [message, setMessage] = useState('');

  const onSubmit = async () => {
    if (offeredSkill === '')
      return toast.error('Please select a skill you can offer');

    return toast.error('backend to bna bsdk');
  };

  return (
    <Dialog open={user !== undefined} onOpenChange={open => !open && onClose()}>
      <DialogContent className='px-0 py-0'>
        <Card className='border-none shadow-none'>
          <CardContent className='space-y-4 py-6'>
            <h2 className='text-xl font-semibold'>Request Skill Swap</h2>
            <p>
              You're requesting{' '}
              <span className='font-medium text-lg italic'>{user?.name}</span>{' '}
              to teach you{' '}
              <span className='font-semibold'>{requestedSkill}</span>.
            </p>

            <div className='space-y-2'>
              <Label htmlFor='skill'>Your Skill</Label>
              <Select onValueChange={setOfferedSkill}>
                <SelectTrigger className='w-full'>
                  <SelectValue placeholder='Select a skill to offer' />
                </SelectTrigger>
                <SelectContent>
                  {skills.map(s => (
                    <SelectItem key={s} value={s}>
                      {s}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className='space-y-2'>
              <Label htmlFor='message'>Message (optional)</Label>
              <Textarea
                id='message'
                placeholder="Hey! I'd love to exchange skills with you..."
                value={message}
                onChange={({ target }) => setMessage(target.value)}
              />
            </div>

            <Button className='w-full cursor-pointer' onClick={onSubmit}>
              Send Request
            </Button>
          </CardContent>
        </Card>
      </DialogContent>
    </Dialog>
  );
}
