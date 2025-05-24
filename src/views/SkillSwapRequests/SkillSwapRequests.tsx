import { fetchReceivedRequests, fetchSentRequests } from '@/api/swap-request';
import ReceivedReqCard from '@/components/ReceivedReqCard';
import SentReqCard from '@/components/SentReqCard';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { IRequest, ISwapRequest } from '@/types/swal-request';
import { Loader2 } from 'lucide-react';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const SkillSwapRequests = () => {
  const [sent, setSent] = useState<ISwapRequest[]>([]);
  const [filteredSent, setFilteredSent] = useState<ISwapRequest[]>([]);
  const [sentLoading, setSentLoading] = useState(false);

  const [received, setReceived] = useState<ISwapRequest[]>([]);
  const [filteredReceived, setFilteredReceived] = useState<ISwapRequest[]>([]);
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
        setFilteredSent(res.data);
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
        setFilteredReceived(res.data);
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

  const handleAcceptReject = (req: IRequest) => {
    setReceived(prev =>
      prev.map(p => (p.request.id !== req.id ? p : { ...p, request: req })),
    );
  };

  const filters = ['Pending', 'Accepted', 'Rejected'];
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const onToggle = (filter: string) => {
    const updatedSelectedFilters = selectedFilters.includes(filter)
      ? selectedFilters.filter(f => f != filter)
      : [...selectedFilters, filter];

    setSelectedFilters(updatedSelectedFilters);

    setFilteredSent(
      sent.filter(req => {
        return (
          updatedSelectedFilters.length === 0 ||
          updatedSelectedFilters.includes(req.request.status)
        );
      }),
    );

    setFilteredReceived(
      received.filter(req => {
        return (
          updatedSelectedFilters.length === 0 ||
          updatedSelectedFilters.includes(req.request.status)
        );
      }),
    );
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
          <>
            <div className='flex gap-4 px-8 pb-8 items-center'>
              <div>Show:</div>

              <div className='flex gap-4 items-center'>
                {filters.map(filter => (
                  <div className='flex gap-1 items-center' key={filter}>
                    <input
                      type='checkbox'
                      id={filter}
                      checked={selectedFilters.includes(filter)}
                      onChange={() => onToggle(filter)}
                    />
                    <Label htmlFor={filter}>{filter}</Label>
                  </div>
                ))}
              </div>
            </div>

            <div className='space-y-4'>
              {sentLoading ? (
                <Loader2 className='h-12 w-12 animate-spin mx-auto my-2' />
              ) : filteredSent.length === 0 ? (
                <p className='text-muted-foreground'>No sent requests yet.</p>
              ) : (
                filteredSent.map(req => (
                  <SentReqCard req={req} key={req.request.id} />
                ))
              )}
            </div>
          </>
        </TabsContent>

        <TabsContent value='received'>
          <>
            <div className='flex gap-4 px-8 pb-8 items-center'>
              <div>Show:</div>

              <div className='flex gap-4 items-center'>
                {filters.map(filter => (
                  <div className='flex gap-1 items-center' key={filter}>
                    <input
                      type='checkbox'
                      id={filter}
                      checked={selectedFilters.includes(filter)}
                      onChange={() => onToggle(filter)}
                    />
                    <Label htmlFor={filter}>{filter}</Label>
                  </div>
                ))}
              </div>
            </div>

            <div className='space-y-4'>
              {receivedLoading ? (
                <Loader2 className='h-12 w-12 animate-spin mx-auto my-2' />
              ) : filteredReceived.length === 0 ? (
                <p className='text-muted-foreground'>
                  No received requests yet.
                </p>
              ) : (
                filteredReceived.map(req => (
                  <ReceivedReqCard
                    req={req}
                    onAction={handleAcceptReject}
                    key={req.request.id}
                  />
                ))
              )}
            </div>
          </>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SkillSwapRequests;
