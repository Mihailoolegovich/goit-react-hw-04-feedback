import React from 'react';
import './FeedbackOptions.css';
import propTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  function ucFirst(str) {
    return str[0].toUpperCase() + str.slice(1);
  }
  return (
    <ul className="sectionBtn">
      {options.map(({ name, icon, id }) => (
        <li key={id}>
          <h3>{ucFirst(name)}</h3>
          <button
            className="feedbackBtn"
            type="button"
            name={name}
            onClick={onLeaveFeedback}
          >
            <img
              className={'iconBtn iconBtn__' + name}
              name="good"
              src={icon}
              alt={'emoji good' + name}
            />
          </button>
        </li>
      ))}
    </ul>
    // </div>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  onLeaveFeedback: propTypes.func.isRequired,
};
