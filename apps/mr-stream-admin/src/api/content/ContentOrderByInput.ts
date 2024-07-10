import { SortOrder } from "../../util/SortOrder";

export type ContentOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  contentId?: SortOrder;
  amount?: SortOrder;
};
