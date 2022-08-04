let count = 0;
let timer;
let onChangeListener;

const counter = {
  start: () => {
    timer = setInterval(() => {
      count = count + 1;
      onChangeListener(count);
    }, 1000);
  },

  stop: () => {
    clearInterval(timer);
  },

  observe: (listener) => {
    onChangeListener = listener;
  },

  increment: (valor) => valor + 1,
};

module.exports = counter;
