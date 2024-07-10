import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type SubscriptionWhereInput = {
  id?: StringFilter;
  plan?: StringNullableFilter;
  payment?: FloatNullableFilter;
};
