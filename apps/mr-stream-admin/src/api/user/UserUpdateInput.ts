import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username?: string;
  email?: string | null;
  password?: string;
  roles?: InputJsonValue;
  walletId?: string | null;
  subscription?: string | null;
  purchasedContent?: InputJsonValue;
  currentStream?: string | null;
};
