// const root = document.querySelector("div");

// root.querySelector("div")?.classList.add("test");
// const div = document.createElement("div");

// div.addEventListener("click", listener);

// div.innerText = "<h1>Clique aqui!</h1>";
// root.appendChild(div);

let alertHabilitado = false;

const listener = () => {
  alert("Click!");
};

function handleClick() {
  const root = document.querySelector("div");
  const div = root.querySelector("div");
  const button = root.querySelector("button");

  if (alertHabilitado) {
    div.removeEventListener("click", listener);
    button.innerText = "Habilitar alerta";
    button.classList.add("habilitar");
  } else {
    div.addEventListener("click", listener);
    button.innerText = "Desabilitar alerta";
    button.classList.remove("habilitar");
  }

  alertHabilitado = !alertHabilitado;
}
