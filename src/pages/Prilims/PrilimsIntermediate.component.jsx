import React, { useState, useEffect } from 'react';
import { getQuestionIds } from '../../config/api';

const PrilmsIntermediate = ({ history, match }) => {
  useEffect(() => {
    getQuestionIds(match.params.event).then(res => {
      console.log(res);
      history.push(`/prelims/${match.params.event}/${res.questions[0]}`);
    });
  });
  return <div>Loading</div>;
};

export default PrilmsIntermediate;
