import readlineSync from 'readline-sync';
import { mainPlay1, getRandNum } from '../index.js';

const generateProgression = (length, start, diff) => {

  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + diff * i);
  }
  return progression;
};

const playProgressionGame = () => {
  const name = mainPlay1();
  console.log('What number is missing in the progression?');
  let correctAnswersCount = 0;

  while (correctAnswersCount < 3) {
    const length = getRandNum(5, 10);
    const start = getRandNum(1, 10);
    const diff = getRandNum(2, 5);
    const hiddenIndex = getRandNum(0, length - 1);

    const progression = generateProgression(length, start, diff);
    const correctAnswer = progression[hiddenIndex];
    progression[hiddenIndex] = '..';

    console.log(`Question: ${progression.join(' ')}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (parseInt(userAnswer, 10) === correctAnswer) {
      console.log('Correct!');
      correctAnswersCount += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  mainPlay1(name, correctAnswersCount);
};

export default playProgressionGame;
