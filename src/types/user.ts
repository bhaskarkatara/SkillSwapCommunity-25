export type User = {
  name: string;
  email: string;
  contact: string;
  skills: string[];
};

export type ISignUp = {
  name: string;
  email: string;
  contact: string;
  skills: string[];
  password: string;
};

export type ILogin = {
  email: string;
  password: string;
};

export type IUpdateUser = Omit<User, 'email'>;
