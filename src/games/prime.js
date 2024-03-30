import readlineSync from 'readline-sync';
import {
  mainPlay1,
  isPrime,
  getRandNum,
} from '../index.js';

const primeNumber = () => {
  const name = mainPlay1();
  const correctAnswerCount = 0;

  while (correctAnswerCount < 3) {
    const questionNumber = getRandNum(1, 10);
    console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
    console.log(`Question: ${questionNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = isPrime(questionNumber) ? 'yes' : 'no';
    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  mainPlay1(name, correctAnswerCount);
};

export default primeNumber;
