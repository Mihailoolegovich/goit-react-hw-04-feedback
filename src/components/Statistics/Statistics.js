import React from 'react';
import propTypes from 'prop-types';

export default function Statistics({ good, neutral, bad, total, percentage }) {
  return (
    <>
      <p>
        Good: <b>{good}</b>
      </p>
      <p>
        Neutral: <b>{neutral}</b>
      </p>
      <p>
        Bad: <b>{bad}</b>
      </p>
      <p>
        Total: <b>{total}</b>
      </p>
      <p>
        Positive feedback: <b>{percentage}</b> %
      </p>
    </>
  );
}

Statistics.propTypes = {
  good: propTypes.number.isRequired,
  neutral: propTypes.number.isRequired,
  bad: propTypes.number.isRequired,
  total: propTypes.number.isRequired,
  percentage: propTypes.number.isRequired,
};
