obterPokemons();

async function obterPokemons() {
  const listaPokemons = document.getElementById("lista-pokemons");

  const loading = document.createElement("li");
  loading.innerText = "Loading...";
  loading.id = "loading";
  listaPokemons.appendChild(loading);

  try {
    const resultado = await fetch("https://pokeapi.co/api/v2/pokemon");
    const { count, results } = await resultado.json();

    document.getElementById("count").innerText = `Count: ${count}`;
    results.forEach(async ({ name, url }) => {
      const detalhes = await fetch(url);
      const { types } = await detalhes.json();
      const [
        {
          type: { name: nameTipo },
        },
      ] = types;
      const item = document.createElement("li");
      item.innerText = `${name} - ${nameTipo}`;
      listaPokemons.appendChild(item);
    });
  } catch {
    alert("deu erro!");
  } finally {
    loading.remove();
  }
}
