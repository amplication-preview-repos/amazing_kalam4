export type Subscription = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  plan: string | null;
  payment: number | null;
};
