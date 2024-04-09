import {
  mainGame,
  getRandNum,
} from '../index.js';

const executeMathOperation = (num1, operator, num2) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return NaN;
  }
};

const getRandOperator = () => {
  const operators = ['+', '-', '*'];
  const randomIndex = Math.floor(Math.random() * operators.length);
  return operators[randomIndex];
};

const rule = 'What is the result of the expression?';

const playRound = () => {
  const number1 = getRandNum(1, 100);
  const number2 = getRandNum(1, 100);
  const operator = getRandOperator();
  const question = `${number1} ${operator} ${number2}`;
  const correctAnswer = executeMathOperation(number1, operator, number2).toString();
  return [question, correctAnswer];
};

const playCalcGame = () => {
  mainGame(rule, playRound);
};

export default playCalcGame;
