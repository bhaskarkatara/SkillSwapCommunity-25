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
import { User } from '@/types/user';
import { useState } from 'react';
import toast from 'react-hot-toast';

export default function RequestSkillSwap({
  user,
  onClose,
}: {
  user?: User;
  onClose: () => void;
}) {
  const [requestedSkill, setRequestedSkill] = useState('');
  const [message, setMessage] = useState('');

  const onSubmit = async () => {
    if (requestedSkill === '')
      return toast.error('Please select a skill you want to learn');

    return toast.error('backend to bna bsdk');
  };

  return (
    <Dialog open={user !== undefined} onOpenChange={open => !open && onClose()}>
      <DialogContent className='px-0 py-0'>
        <Card className='border-none shadow-none'>
          <CardContent className='py-0'>
            <h2 className='text-xl font-semibold mb-1'>Request Skill Swap</h2>
            <p>
              You're requesting{' '}
              <span className='font-medium text-lg italic'>{user?.name}</span>{' '}
              to teach you...
            </p>

            <div className='space-y-2 mt-2'>
              <Label htmlFor='skill'>Skill</Label>
              <Select onValueChange={setRequestedSkill}>
                <SelectTrigger className='w-full cursor-pointer'>
                  <SelectValue placeholder='Select a skill you want to learn' />
                </SelectTrigger>
                <SelectContent className='max-h-64'>
                  {user?.skills.map(s => (
                    <SelectItem key={s} value={s} className='cursor-pointer'>
                      {s}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className='space-y-2 my-4'>
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
