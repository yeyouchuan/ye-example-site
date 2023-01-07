import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

export const isNowWithinTime = (
  start: number,
  end: number,
  timezone: string
) => {
  const now = dayjs().tz(timezone);

  if (now.hour() >= start && now.hour() <= end) return true;
  return false;
};
