#!/usr/bin/env node

import readlineSync from 'readline-sync';

const isEven = (num) => num % 2 === 0;

const playEvenGame = (userName) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let correctAnswersCount = 0;

  while (correctAnswersCount < 3) {
    const questionNumber = Math.floor(Math.random() * 100) + 1;
    console.log(`Question: ${questionNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');

    const correctAnswer = isEven(questionNumber) ? 'yes' : 'no';

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
    correctAnswersCount += 1;
  }

  console.log(`Congratulations, ${userName}!`);
};

export default playEvenGame;