import React from 'react';
import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map(option => (
        <button
          className={styles.feedbackButton}
          key={option}
          onClick={() => onLeaveFeedback(option)}
          value={option}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;
