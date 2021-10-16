import React from 'react';
import s from './FeedbackOptions.module.css';
import Button from '../Button/Button'
import nextId from "react-id-generator";
import PropTypes from 'prop-types';



const FeedbackOptions = ({ options, onLeaveFeedback}) => {
  return (
    <>
      {options.map(el => (
        <Button
          name={el}
          key={nextId()}
          className={s[`button--${el}`]}
          onLeaveFeedback={onLeaveFeedback}
          vote={el}/>
      ))}
    </>
  );
};
export default FeedbackOptions;



FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func,
};
