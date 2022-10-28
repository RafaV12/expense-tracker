export type Tx = {
  _id: string;
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
