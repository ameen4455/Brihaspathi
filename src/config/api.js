import { get1, get2 } from './http';

export const getEvents = () => {
  const excelId = localStorage.getItem('excelId');
  return get1(`/excel_id/events?excel_id=${excelId}`);
};

export const getQuestion = id => {
  return get2(`/get-question/${id}`);
};
