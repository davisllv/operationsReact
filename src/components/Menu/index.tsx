import React from 'react';
import './styles.css';

interface IMenu {
  setOperation: React.Dispatch<React.SetStateAction<string>>;
}
const Menu: React.FC<IMenu> = ({ setOperation }) => {
  return (
    <nav>
      <button
        type="button"
        onClick={() => {
          setOperation('Multiplier');
        }}
      >
        Multiplier
      </button>
      <button
        type="button"
        onClick={() => {
          setOperation('Divider');
        }}
      >
        Divider
      </button>
      <button
        type="button"
        onClick={() => {
          setOperation('Summation');
        }}
      >
        Summation
      </button>
      <button
        type="button"
        onClick={() => {
          setOperation('Subtraction');
        }}
      >
        Subtracion
      </button>
    </nav>
  );
};

export default Menu;
