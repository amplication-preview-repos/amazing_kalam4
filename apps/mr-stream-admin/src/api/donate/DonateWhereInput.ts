import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type DonateWhereInput = {
  id?: StringFilter;
  streamerId?: StringNullableFilter;
  amount?: FloatNullableFilter;
};
