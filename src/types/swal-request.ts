import { User } from './user';

export type IRequest = {
  id: string;
  senderID: string;
  offeredSkill: string;
  requestedSkill: string;
  receiverID: string;
  message: string;
  status: string;
  createdAt: string;
  updatedAt: string;
};

export type ISwapRequest = {
  senderDetails: User;
  receiverDetails: User;
  request: IRequest;
};

export type ISwapRequestFormData = {
  receiverID: string;
  requestedSkill: string;
  message: string;
};
