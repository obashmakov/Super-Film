import React from 'react';
import PropTypes from 'prop-types';
import arrowDown from '../../../images/arrowDown.svg';
import './Button.scss';

export const Button = ({ setIsClicked, quantity }) => {
  const handleClick = () => {
    setIsClicked(true);
  };

  return (
    <button
      className="movies__button"
      type="button"
      onClick={handleClick}
    >
      {`Show ${quantity - 3} More`}
      <img
        className="movies__arrow"
        src={arrowDown}
        alt="arrow"
      />
    </button>
  );
};

Button.propTypes = {
  setIsClicked: PropTypes.func.isRequired,
  quantity: PropTypes.number.isRequired,
};
