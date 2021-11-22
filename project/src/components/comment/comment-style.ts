import dayjs from 'dayjs';

const getDataCommentFormat = (data: string): string => dayjs(data).format('MMMM D, YYYY');

export {getDataCommentFormat};
