import {
  mainGame,
  getRandNum,
} from '../index.js';

const isEven = (num) => num % 2 === 0;

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const playRound = () => {
  const question = getRandNum();
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const playEvenGame = () => {
  mainGame(rule, playRound);
};

export default playEvenGame;
