import { JsonValue } from "type-fest";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  email: string | null;
  roles: JsonValue;
  walletId: string | null;
  subscription: string | null;
  purchasedContent: JsonValue;
  currentStream: string | null;
};
