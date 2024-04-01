import readlineSync from 'readline-sync';
import {
  mainPlay1,
  mainPlay2,
  isPrime,
  getRandNum,
} from '../index.js';

const primeNumber = () => {
  const name = mainPlay1();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  let correctAnswerCount = 0;
  while (correctAnswerCount < 3) {
    const questionNumber = getRandNum(1, 10);
    console.log(`Question: ${questionNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = isPrime(questionNumber) ? 'yes' : 'no';
    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
    }
    console.log('Correct!');
    correctAnswerCount += 1;
  }
  mainPlay2(name, correctAnswerCount);
};

export default primeNumber;
