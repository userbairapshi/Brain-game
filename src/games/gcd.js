import readlineSync from 'readline-sync';
import { mainPlay1, mainPlay2, getRandNum, getGcd } from '../index.js';

const maxCommonDivised = () => {
  const name = mainPlay1();

  const correctAnswerCount = 0;
  while (correctAnswerCount < 3) {
    const num1 = getRandNum(1, 100);
    const num2 = getRandNum(1, 100);
    const expression = `${num1} ${num2}`;
    console.log('Question:', expression);
    console.log('Find the greatest common divisor of given numbers.');
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = getGcd(num1, num2).toString();
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  mainPlay2(name, correctAnswerCount);
};

export default maxCommonDivised;
