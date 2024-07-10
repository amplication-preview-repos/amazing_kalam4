import { SortOrder } from "../../util/SortOrder";

export type DonateOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  streamerId?: SortOrder;
  amount?: SortOrder;
};
