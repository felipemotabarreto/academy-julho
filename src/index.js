import axios from "axios";

function addToDocument(content) {
  const div = document.createElement("div");
  div.innerText = content;
  document.body.appendChild(div);
}

async function obterPokemons() {
  const {
    data: { results },
  } = await axios.get("https://pokeapi.co/api/v2/pokemon");

  addToDocument(`Resultados 2: ${results.map(({ name }) => name).join(", ")}`);
}

obterPokemons();
