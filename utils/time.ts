import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

/**
 * Check if the current time falls within a range; currently
 * used for the avaibility badge
 */
export const isNowWithinTime = (
  start: number,
  end: number,
  timezone: string
) => {
  const now = dayjs().tz(timezone);

  if (now.hour() >= start && now.hour() <= end) return true;
  return false;
};
