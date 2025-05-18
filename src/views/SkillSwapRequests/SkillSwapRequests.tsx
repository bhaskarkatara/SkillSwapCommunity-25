import { fetchReceivedRequests, fetchSentRequests } from '@/api/swap-request';
import ReceivedReqCard from '@/components/ReceivedReqCard';
import SentReqCard from '@/components/SentReqCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ISwapRequest } from '@/types/swal-request';
import { Loader2 } from 'lucide-react';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const SkillSwapRequests = () => {
  const [sent, setSent] = useState<ISwapRequest[]>([]);
  const [sentLoading, setSentLoading] = useState(false);

  const [received, setReceived] = useState<ISwapRequest[]>([]);
  const [receivedLoading, setReceivedLoading] = useState(false);

  useEffect(() => {
    const fetchSent = async () => {
      try {
        setSentLoading(true);

        const res = await fetchSentRequests();

        if (!res.success) {
          return toast.error(res.message);
        }

        setSent(res.data);
        setSentLoading(false);
      } catch (err) {
        setSentLoading(false);
        toast.error('something went wrong');
        console.error(err);
      }
    };
    const fetchReceived = async () => {
      try {
        setReceivedLoading(true);

        const res = await fetchReceivedRequests();

        if (!res.success) {
          return toast.error(res.message);
        }

        setReceived(res.data);
        setReceivedLoading(false);
      } catch (err) {
        setReceivedLoading(false);
        toast.error('something went wrong');
        console.error(err);
      }
    };

    fetchSent();
    fetchReceived();
  }, []);

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
            {sentLoading ? (
              <Loader2 className='h-12 w-12 animate-spin mx-auto my-2' />
            ) : sent.length === 0 ? (
              <p className='text-muted-foreground'>No sent requests yet.</p>
            ) : (
              sent.map(req => <SentReqCard req={req} />)
            )}
          </div>
        </TabsContent>

        <TabsContent value='received'>
          <div className='space-y-4'>
            {receivedLoading ? (
              <Loader2 className='h-12 w-12 animate-spin mx-auto my-2' />
            ) : received.length === 0 ? (
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
