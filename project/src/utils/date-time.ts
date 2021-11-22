import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
dayjs.extend(duration);

const SECONDS_IN_MINUTES = 60;

const getTimeFormat = (currentTime: number): string => {
  const timeFormat = currentTime >= (SECONDS_IN_MINUTES * SECONDS_IN_MINUTES) ? '-HH:mm:ss' : '-mm:ss';
  return dayjs.duration(currentTime, 'seconds').format(timeFormat);
};

const getDataCommentFormat = (data: string): string => dayjs(data).format('MMMM D, YYYY');

export {getDataCommentFormat, getTimeFormat};
