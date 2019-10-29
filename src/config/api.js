import { get1 } from './http';

export const getEvents = () => {
  const excelId = localStorage.getItem('excelId');
  return get1(`/excel_id/events?excel_id=${excelId}`);
};
