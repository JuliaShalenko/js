const guessNumber = (a) => {
  let number = +a;
  if (number === 42) {
    return "You win!";
  }
  return "Try again!";
};
console.log(guessNumber(42));

/***Приймає адресу сайту , та завжди повертає у вигляді https://адреса ***/
const normalizeUrl = (adress) => {
  if (adress.startsWith("https://")) {
    return adress;
  } else {
    return "https://" + adress;
  }
};
console.log(normalizeUrl("https://ai.fi"));
