import React, { useState, useEffect } from 'react';
import '../styles.css';
import Button from '../components/Button';

const Multiplier: React.FC = () => {
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
    setNumber: React.Dispatch<React.SetStateAction<number>>,
    number: number
  ): void {
    if (number < 1) return;
    setNumber((previousState) => {
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
    setResult(numberOne * numberTwo);
  }, [numberOne, numberTwo]);

  return (
    <div>
      <div className="firstBox">
        <h1>Multiplier</h1>
        <div className="buttonDivs">
          <section>
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
          </section>
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

export default Multiplier;
