import {
  mainGame,
  getRandNum,
} from '../index.js';

const isPrime = (num) => {
  for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
};

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const playRound = () => {
  const question = getRandNum(1, 10);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const playPrimeGame = () => {
  mainGame(rule, playRound);
};

export default playPrimeGame;
