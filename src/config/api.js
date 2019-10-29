import { get1, get2, post2 } from './http';

export const getEvents = () => {
  const excelId = localStorage.getItem('excelId');
  return get1(`/excel_id/events?excel_id=${excelId}`);
};

export const getQuestion = questionId => {
  const excelId = localStorage.getItem('excelId');
  return get2(`/get-question/${questionId}/${excelId}`);
};

export const getQuestionIds = eventId => {
  return get2(`/get-question-list/${eventId}`);
};

export const setAnswer = (question, answer, event) => {
  const body = {
    user_id: localStorage.getItem('excelId'),
    question_id: question,
    answer: answer,
  };
  return post2(`/set-answer/${event}`, JSON.stringify(body));
};
