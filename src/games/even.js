import readlineSync from 'readline-sync';
import {
  mainPlay1,
  mainPlay2,
  getRandNum,
} from '../index.js';

const isEven = (num) => num % 2 === 0;

const playEvenGame = () => {
  const name = mainPlay1();

  let correctAnswerCount = 0;

  while (correctAnswerCount < 3) {
    const number = getRandNum(1, 100);
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    console.log(`Question:${number.toString()}`);
    const answer = readlineSync.question('Your answer: ');
    if ((isEven(number) && answer.toLowerCase() === 'yes') || (!isEven(number) && answer.toLowerCase() === 'no')) {
      console.log('Correct!');
      correctAnswerCount += 1;
    } else {
      const correctAnswer = isEven(number) ? 'yes' : 'no';
      console.log(`'${answer}' is the wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  mainPlay2(name, correctAnswerCount);
};

export default playEvenGame;
