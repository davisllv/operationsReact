import React from 'react';

interface IButon {
  classe: string;
  text: string;
  onClick: () => void;
}
const Button: React.FC<IButon> = ({ classe, text, onClick }) => {
  return (
    <button type="button" className={classe} onClick={onClick}>
      {text}
    </button>
  );
};
export default Button;
