import React from 'react';
import './WebButton.css';

const Button = ({ className, content, btnFunction = () => {} }) => {
  return (
    <button className={className} onClick={(e) => btnFunction(e)}>
      <span className="button__content__wrapper">{content}</span>
    </button>
  );
};

export default Button;
