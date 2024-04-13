import readlineSync from 'readline-sync';

const getRandNum = () => Math.floor(Math.random() * 100);

const mainGame = (rule, playRound) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(rule);

  const roundsCount = 3;
  for (let correctAnswersCount = 0; correctAnswersCount < roundsCount; correctAnswersCount += 1) {
    const [question, correctAnswer] = playRound();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};

export {
  mainGame,
  getRandNum,
};
