import {
  mainGame,
  getRandNum,
} from '../index.js';

const getPrimeNumber = (num1, num2) => {
  let firstNum = num1;
  let secondNum = num2;

  while (secondNum !== 0) {
    const temp = secondNum;
    secondNum = firstNum % secondNum;
    firstNum = temp;
  }
  return firstNum;
};

const rule = 'Find the greatest common divisor of given numbers.';

const playRound = () => {
  const num1 = getRandNum(1, 100);
  const num2 = getRandNum(1, 100);
  const question = `${num1} ${num2}`;
  const correctAnswer = getPrimeNumber(num1, num2).toString();
  return [question, correctAnswer];
};

const playGcdGame = () => {
  mainGame(rule, playRound);
};

export default playGcdGame;
