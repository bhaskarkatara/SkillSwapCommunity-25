import { ISwapRequestFormData } from '@/types/swal-request';
import { api } from './auth';

// Get Skills Configuration
export const skillsConfig = async () => {
  const response = await api.get('/user/all-skill');

  return response.data;
};

export const requestSkillSwap = async (payload: ISwapRequestFormData) => {
  const token = localStorage.getItem('token');

  const response = await api.post('/skill-swap/request', payload, {
    headers: { Authorization: `Bearer ${token}` },
  });

  return response.data;
};
