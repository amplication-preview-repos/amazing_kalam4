import { Donate as TDonate } from "../api/donate/Donate";

export const DONATE_TITLE_FIELD = "streamerId";

export const DonateTitle = (record: TDonate): string => {
  return record.streamerId?.toString() || String(record.id);
};
