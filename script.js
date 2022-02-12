const order = [];
const clickOrder = [];
let score = 0;

// 0 -> green
// 1 -> red
// 2 -> yellow
// 3 -> blue

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

const shuffleOrder = () => {
  const colorOrder = Math.floor(Math.random() * 4);
  order.push(colorOrder);
  clickOrder.length = 0;

  for(let i in order) {
    const elementColor = createColorElement(order[i]);
    lightColor(elementColor, Number(i) + 1);
  };
};

const lightColor = (element, number) => {
  number = number * 500;
  setTimeout(() => {
    element.classList.add('selected');
  }, number - 250);

  setTimeout(() => {
    element.classList.remove('selected')
  });
};

const checkOrder = () => {
  for(let i in clickOrder) {
    if(clickOrder[i] !== order[i]) {
      gameOver();
      break;
    };
  };

  if(clickOrder.length === order.length) {
    alert(`Pontuação: ${score}\nVocê acertou! Iniciando próximo nível!`);
    nextLevel();
  };
};

const click = (color) => {
  clickOrder.push(color);
  createColorElement(color).classList.add('selected');

  setTimeout(() => {
    createColorElement(color).classList.remove('selected');
    checkOrder();
  }, 250);


};

const createColorElement = (color) => {
  if(color === 0) return green;
  if(color === 1) return red;
  if(color === 2) return yellow;
  if(color === 3) return blue;
};

const nextLevel = () => {
  score++;
  shuffleOrder();
};

const gameOver = () => {
  alert(`Fim de jogo\nSua pontuação: ${score}\nClique em Ok para iniciar um novo Jogo`);
  order.length = 0;
  clickOrder.length = 0;

  playGame();
}

const playGame = () => {
  alert('Bem-vindo ao Genius!\nIniciando um novo jogo!');
  score = 0;

  nextLevel();
}

blue.onclick = () => click(0);
red.onclick = () => click(1);
green.onclick = () => click(2);
yellow.onclick = () => click(3);

playGame();
