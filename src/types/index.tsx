export type Tx = {
  _id: string;
  userId: string;
  type: string;
  description: string;
  date: string;
  amount: number;
};

export type FormValues = {
  username: string;
  password: string;
  repeatPassword?: string;
};

export interface IUser {
  userId: string;
  token: string;
}

export type Month = {
  name: string;
  number: number;
};
