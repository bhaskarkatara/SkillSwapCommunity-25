import ReceivedReqCard from '@/components/ReceivedReqCard';
import SentReqCard from '@/components/SentReqCard';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useUser } from '@/context/auth/useUser';
import { useState } from 'react';

const SkillSwapRequests = () => {
  const { user } = useUser();
  const [sent, setSent] = useState<any[]>([
    {
      sender: user,
      receiver: {
        name: 'bhaskar chutiyaaa',
        email: 'vandanasaini657@gmail.com',
        contact: '1234567890',
        skills: ['chutiyapa', 'backchodi', 'DSA'],
      },
      senderOfferedSkill: null,
      receiverOfferedSkill: 'chutiyapa',
      status: 'pending',
      additional_note: 'aaja bhai tu bhi sikh me bhi sikhu',
    },
    {
      sender: user,
      receiver: {
        name: 'betu ji',
        email: 'betuji@gmail.com',
        contact: '123423890',
        skills: ['music', 'drawing', 'art'],
      },
      senderOfferedSkill: 'DSA',
      receiverOfferedSkill: 'music',
      status: 'accepted',
    },
    {
      sender: user,
      receiver: {
        name: 'bhaskar bhau',
        email: 'bhaskarkatararjo5@gmail.com',
        contact: '5666216216',
        skills: ['DSA', 'DevOps', 'Music'],
      },
      senderOfferedSkill: null,
      receiverOfferedSkill: 'Music',
      status: 'rejected',
    },
  ]);

  const [received, setReceived] = useState<any[]>([
    {
      receiver: user,
      sender: {
        name: 'bhaskar chutiyaaa',
        email: 'vandanasaini657@gmail.com',
        contact: '1234567890',
        skills: ['chutiyapa', 'backchodi', 'DSA'],
      },
      senderOfferedSkill: null,
      receiverOfferedSkill: 'Music',
      status: 'pending',
      additional_note:
        'Bhai me chutiya hu mujhe kuch sikha dee...gand marane k alawa kuch na aata',
    },
    {
      receiver: user,
      sender: {
        name: 'betu ji',
        email: 'betuji@gmail.com',
        contact: '123423890',
        skills: ['music', 'drawing', 'art'],
      },
      senderOfferedSkill: 'music',
      receiverOfferedSkill: 'DSA',
      status: 'accepted',
    },
    {
      receiver: user,
      sender: {
        name: 'bhaskar bhau',
        email: 'bhaskarkatararjo5@gmail.com',
        contact: '5666216216',
        skills: ['DSA', 'DevOps', 'Music'],
      },
      senderOfferedSkill: null,
      receiverOfferedSkill: 'chutiyapa',
      status: 'rejected',
    },
  ]);

  const handleAccept = (id: string) => {
    // Call accept API
    console.log('Accepted', id);
  };

  const handleReject = (id: string) => {
    // Call reject API
    console.log('Rejected', id);
  };

  return (
    <div className='max-w-2xl mx-auto p-6'>
      <h1 className=' text-center text-5xl font-bold '>Skill Swap Requests</h1>

      <Tabs defaultValue='sent' className='w-full mt-8'>
        <TabsList className='grid grid-cols-2 mb-4 h-14 w-full'>
          <TabsTrigger value='sent' className='cursor-pointer h-12 text-2xl'>
            Sent
          </TabsTrigger>
          <TabsTrigger
            value='received'
            className='cursor-pointer h-12 text-2xl'
          >
            Received
          </TabsTrigger>
        </TabsList>

        <TabsContent value='sent'>
          <div className='space-y-4'>
            {sent.length === 0 ? (
              <p className='text-muted-foreground'>No sent requests yet.</p>
            ) : (
              sent.map(req => <SentReqCard req={req} />)
            )}
          </div>
        </TabsContent>

        <TabsContent value='received'>
          <div className='space-y-4'>
            {received.length === 0 ? (
              <p className='text-muted-foreground'>No received requests yet.</p>
            ) : (
              received.map(req => <ReceivedReqCard req={req} />)
            )}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SkillSwapRequests;
