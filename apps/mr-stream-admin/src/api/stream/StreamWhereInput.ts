import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type StreamWhereInput = {
  id?: StringFilter;
  gameTitle?: StringNullableFilter;
  streamKey?: StringNullableFilter;
  streamUrl?: StringNullableFilter;
};
