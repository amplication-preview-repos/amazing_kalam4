import { Stream as TStream } from "../api/stream/Stream";

export const STREAM_TITLE_FIELD = "gameTitle";

export const StreamTitle = (record: TStream): string => {
  return record.gameTitle?.toString() || String(record.id);
};
