import React, { useState, useEffect } from 'react';
import Button from '../components/Button';
import '../styles.css';

const Subtraction: React.FC = () => {
  const [numberOne, setNumberOne] = useState(0);
  const [numberTwo, setNumberTwo] = useState(0);
  const [result, setResult] = useState(0);

  function incrementNumber(
    setNumber: React.Dispatch<React.SetStateAction<number>>
  ): void {
    setNumber((previousState) => {
      const newNumber = previousState + 1;
      return newNumber;
    });
  }
  function decrementNumber(
    setNumber: React.Dispatch<React.SetStateAction<number>>
  ): void {
    setNumber((previousState) => {
      if (previousState < 1) return 0;
      const newNumber = previousState - 1;
      return newNumber;
    });
  }
  function initialState(
    setNumber: React.Dispatch<React.SetStateAction<number>>
  ): void {
    setNumber(0);
  }
  useEffect(() => {
    setResult(numberOne - numberTwo);
  }, [numberOne, numberTwo]); // Cada atualização seja utilizado o número novo gerado;
  return (
    <div>
      <div className="firstBoxSubtraction">
        <h1>Subtracion</h1>
        <div className="buttonDivs">
          <Button
            text="+"
            classe="add"
            onClick={() => {
              incrementNumber(setNumberOne);
            }}
          />
          <Button
            text="-"
            classe="sub"
            onClick={() => {
              decrementNumber(setNumberOne);
            }}
          />
          <Button
            text="AC"
            classe="acButton"
            onClick={() => {
              initialState(setNumberOne);
            }}
          />
          <p>{numberOne}</p>
          <Button
            text="+"
            classe="add"
            onClick={() => {
              incrementNumber(setNumberTwo);
            }}
          />
          <Button
            text="-"
            classe="sub"
            onClick={() => {
              decrementNumber(setNumberTwo);
            }}
          />
          <Button
            text="AC"
            classe="acButton"
            onClick={() => {
              initialState(setNumberTwo);
            }}
          />
          <p>{numberTwo}</p>

          <hr />
        </div>
        <p className="result">{result}</p>
      </div>
      <span className="cop">©Made By Davi</span>
    </div>
  );
};

export default Subtraction;
