import { formatDistanceStrict } from "date-fns";
import { vi } from "date-fns/locale";

export const getTimeDuration = (
  date: number | Date,
  baseDate: number | Date
) => {
  return formatDistanceStrict(date, baseDate, { addSuffix: true, locale: vi });
};
