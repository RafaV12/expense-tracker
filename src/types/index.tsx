export type Tx = {
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
  id: string;
  token: string;
}

export type Month = {
  name: string;
  number: number;
};
