import counter from "./src/components/counter";

const startButton = document.createElement("button");
startButton.innerText = "Start";
startButton.addEventListener("click", () => counter.start());
document.body.appendChild(startButton);

const stopButton = document.createElement("button");
stopButton.innerText = "Stop";
stopButton.addEventListener("click", () => counter.stop());
document.body.appendChild(stopButton);

const count = document.createElement("p");
count.innerText = 0;
document.body.appendChild(count);

counter.observe((valor) => {
  count.innerText = valor;
});
