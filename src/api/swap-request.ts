import { ISwapRequestFormData } from '@/types/swal-request';
import { api } from './auth';

export const requestSkillSwap = async (payload: ISwapRequestFormData) => {
  const token = localStorage.getItem('token');

  const response = await api.post('/skill-swap/request', payload, {
    headers: { Authorization: `Bearer ${token}` },
  });

  return response.data;
};

export const fetchSentRequests = async () => {
  const token = localStorage.getItem('token');

  const response = await api.get('/skill-swap/sent-requests', {
    headers: { Authorization: `Bearer ${token}` },
  });

  return response.data;
};

export const fetchReceivedRequests = async () => {
  const token = localStorage.getItem('token');

  const response = await api.get('/skill-swap/received-requests', {
    headers: { Authorization: `Bearer ${token}` },
  });

  return response.data;
};

export const acceptRequest = async (id: string, offeredSkill: string) => {
  const token = localStorage.getItem('token');

  const response = await api.put(
    `/skill-swap/update-request/${id}`,
    { status: true, offeredSkill },
    { headers: { Authorization: `Bearer ${token}` } },
  );

  return response.data;
};

export const rejectRequest = async (id: string) => {
  const token = localStorage.getItem('token');

  const response = await api.put(
    `/skill-swap/update-request/${id}`,
    { status: false },
    { headers: { Authorization: `Bearer ${token}` } },
  );

  return response.data;
};
