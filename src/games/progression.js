import { mainGame } from '../index.js';

const generateProgression = (start, step, length) => {
  const progression = [];
  let current = start;
  for (let i = 0; i < length; i += 1) {
    progression.push(current);
    current += step;
  }
  return progression;
};

const hideElement = (array, index) => {
  const hiddenArray = array.slice();
  hiddenArray[index] = '..';
  return hiddenArray.join(' ');
};

const rule = 'What number is missing in the progression?';

const playRound = () => {
  const start = Math.floor(Math.random() * 10);
  const step = Math.floor(Math.random() * 10) + 1;
  const length = Math.floor(Math.random() * 5) + 5;
  const progression = generateProgression(start, step, length);
  const hiddenIndex = Math.floor(Math.random() * length);
  const question = hideElement(progression, hiddenIndex);
  const correctAnswer = String(progression[hiddenIndex]);
  return [question, correctAnswer];
};

const playProgressionGame = () => {
  mainGame(rule, playRound);
};

export default playProgressionGame;
