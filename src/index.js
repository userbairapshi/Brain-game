import readlineSync from 'readline-sync';

const getRandNum = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const getRandOperator = () => {
  const operators = ['+', '-', '*'];
  const randomIndex = Math.floor(Math.random() * operators.length);
  return operators[randomIndex];
};

const getGcd = (num1, num2) => {
  while (num2 !== 0) {
    const temp = num2;
    num2 = num1 % num2;
    num1 = temp;
  }
  return num1;
};

const calcExp = (num1, operator, num2) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return NaN;
  }
};

const mainPlay1 = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

const mainPlay2 = (name, correctAnswerCount) => {
  if (correctAnswerCount === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};

const arithmeticProgress = (num, dif, length) => {
  const start = [];
  for (let i = num; i < length; i += 1) {
    start.push(num + dif * i);
  }
  return start;
};

const isPrime = (num) => {
  for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
};

export {
  arithmeticProgress,
  getRandOperator,
  calcExp,
  mainPlay1,
  mainPlay2,
  getGcd,
  getRandNum,
  isPrime,
};
