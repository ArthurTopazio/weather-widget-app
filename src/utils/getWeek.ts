import moment from 'moment-timezone';

export const getWeek = (timezone: any) => {
  const start = timezone ? moment().tz(timezone).format().slice(0, 10) : '';
  const end = timezone ? moment().tz(timezone).add(6, 'days').format().slice(0, 10) : '';
  const time = timezone ? moment().tz(timezone).format().slice(11, 16) : '';

  return { start, end, time };
};