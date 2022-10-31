import React from 'react';
import Calculator from '../containers/Calculator';
import {render, fireEvent} from '@testing-library/react';

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = render(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.getByTestId('number4');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual('4');
  })

  
  it('Should be able to add numbers', () => {
    const button1 = container.getByTestId('number1');
    fireEvent.click(button1);
    const buttonAdd = container.getByTestId('operator-add');
    fireEvent.click(buttonAdd);
    const button2 = container.getByTestId('number2');
    fireEvent.click(button2);
    const buttonEquals = container.getByTestId('operator-equals')
    fireEvent.click(buttonEquals)
  })


  it('should be able to subtract numbers', () => {
    const button1 = container.getByTestId('number1');
    fireEvent.click(button1);
    const buttonSubtract = container.getByTestId('operator-subtract');
    fireEvent.click(buttonSubtract);
    const button2 = container.getByTestId('number2');
    fireEvent.click(button2);
    const buttonEquals = container.getByTestId('operator-equals')
    fireEvent.click(buttonEquals)
  })


  it('should be able to multiply numbers', () => {
    const button1 = container.getByTestId('number1');
    fireEvent.click(button1);
    const buttonMulti = container.getByTestId('operator-multiply');
    fireEvent.click(buttonMulti);
    const button2 = container.getByTestId('number2');
    fireEvent.click(button2);
    const buttonEquals = container.getByTestId('operator-equals')
    fireEvent.click(buttonEquals)
  })


  it('should be able to divide numbers', () => {
    const button1 = container.getByTestId('number1');
    fireEvent.click(button1);
    const buttonDiv = container.getByTestId('operator-divide');
    fireEvent.click(buttonDiv);
    const button2 = container.getByTestId('number2');
    fireEvent.click(button2);
    const buttonEquals = container.getByTestId('operator-equals');
    fireEvent.click(buttonEquals)
  })


  it('should be able to concatonate number clicks', () => {
    const button5 = container.getByTestId('number5');
    fireEvent.click(button5);
    const button4 = container.getByTestId('number4');
    fireEvent.click(button4);
    const button3 = container.getByTestId('number3');
    fireEvent.click(button3)
  })


  it('should be able to chain multiple number operations together', () => {
    const button5 = container.getByTestId('number5');
    fireEvent.click(button5);
    const buttonAdd = container.getByTestId('operator-add');
    fireEvent.click(buttonAdd)
    const button4 = container.getByTestId('number4');
    fireEvent.click(button4);
    const buttonDiv = container.getByTestId('operator-divide');
    fireEvent.click(buttonDiv);
    const button3 = container.getByTestId('number3');
    fireEvent.click(button3);
    const buttonEquals = container.getByTestId('operator-equals');
    fireEvent.click(buttonEquals)
  })


})

