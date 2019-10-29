import React, { useState, useEffect } from 'react';
import { getQuestionIds } from '../../config/api';

const PrilmsIntermediate = ({ history, match }) => {
  useEffect(() => {
    getQuestionIds(match.params.event).then(res => {
      history.push(`/prilims/${match.params.event}/${res[0]}`);
    });
  });
  return <div>Loading</div>;
};

export default PrilmsIntermediate;
