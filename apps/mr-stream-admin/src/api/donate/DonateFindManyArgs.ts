import { DonateWhereInput } from "./DonateWhereInput";
import { DonateOrderByInput } from "./DonateOrderByInput";

export type DonateFindManyArgs = {
  where?: DonateWhereInput;
  orderBy?: Array<DonateOrderByInput>;
  skip?: number;
  take?: number;
};
