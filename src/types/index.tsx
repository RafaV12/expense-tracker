export type Tx = {
  id: number;
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
