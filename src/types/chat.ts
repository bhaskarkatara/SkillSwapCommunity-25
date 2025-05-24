import { User } from './user';

export type ICreateChatFormData = {
  user1Id: string;
  user2Id: string;
  swapRequestId: string;
};

export type IChat = {
  chatRoomId: string;
  user: User;
};

export type IMessage = {
  chatRoomId: string;
  id: string;
  senderId: string;
  receiverId: string;
  message: string;
  isRead: boolean;
  createdAt: string;
  updatedAt: string;
};
