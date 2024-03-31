import readlineSync from 'readline-sync';
import {
  mainPlay1,
  mainPlay2,
  getRandNum,
  getRandOperator,
  calcExp,
} from '../index.js';

const playCalcGame = () => {
  const name = mainPlay1();
  let correctAnswerCount = 0;
  while (correctAnswerCount < 3) {
    const number1 = getRandNum(1, 100);
    const number2 = getRandNum(1, 100);
    const operator = getRandOperator();
    const expression = `${number1} ${operator} ${number2}`;
    console.log('What is the result of the expression?');
    console.log('Question:', expression);
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = calcExp(number1, operator, number2);

    if (parseInt(userAnswer, 10) === correctAnswer) {
      console.log('Correct!');
      correctAnswerCount += 1;
    } else {
      console.log(`'${userAnswer}' is the wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  mainPlay2(name, correctAnswerCount);
};

export default playCalcGame;
