import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type ContentWhereInput = {
  id?: StringFilter;
  contentId?: StringNullableFilter;
  amount?: FloatNullableFilter;
};
