import { Content as TContent } from "../api/content/Content";

export const CONTENT_TITLE_FIELD = "contentId";

export const ContentTitle = (record: TContent): string => {
  return record.contentId?.toString() || String(record.id);
};
