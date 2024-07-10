import { SortOrder } from "../../util/SortOrder";

export type StreamOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  gameTitle?: SortOrder;
  streamKey?: SortOrder;
  streamUrl?: SortOrder;
};
