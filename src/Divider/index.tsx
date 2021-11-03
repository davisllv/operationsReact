import React, { useState, useEffect } from 'react';
import '../styles.css';
import Button from '../components/Button';

const Divider: React.FC = () => {
  const [numberOne, setNumberOne] = useState(1);
  const [numberTwo, setNumberTwo] = useState(1);
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
    setNumber: React.Dispatch<React.SetStateAction<number>>,
    number: number
  ): void {
    if (number < 2) return;
    setNumber((previousState) => {
      const newNumber = previousState - 1;
      return newNumber;
    });
  }
  function initialState(
    setNumber: React.Dispatch<React.SetStateAction<number>>
  ): void {
    setNumber(1);
  }

  useEffect(() => {
    const resultado = numberOne / numberTwo;
    setResult(Number(resultado.toFixed(2)));
  }, [numberOne, numberTwo]);
  return (
    <div>
      <div className="firstBoxDivider">
        <h1>Divider</h1>
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
              decrementNumber(setNumberOne, numberOne);
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
              decrementNumber(setNumberTwo, numberTwo);
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
export default Divider;
