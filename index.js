const frutas = [
  { name: "Laranja", count: 5 },
  { name: "Banana", count: 2 },
  { name: "Maçã", count: 9 },
];

const minCount = 5;

const { getInfo } = frutas
  .filter(({ count }) => minCount > count)
  .reduce(
    (total, { name, count }) => ({
      getInfo: () => ({
        texto: `${total.getInfo().texto}Falta comprar ${name}`,
        totalFrutasAComprar:
          total.getInfo().totalFrutasAComprar + minCount - count,
      }),
    }),
    {
      getInfo: () => ({
        texto: "",
        totalFrutasAComprar: 0,
      }),
    }
  );

console.log(getInfo().texto);
console.log(`Faltam comprar ${getInfo().totalFrutasAComprar} frutas.`);
