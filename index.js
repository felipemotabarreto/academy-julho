const frutas = [
  { name: "Laranja", count: 5 },
  { name: "Banana", count: 2 },
  { name: "Maçã", count: 9 },
];

// const { count } = frutas.find(({ name }) => name === "Maçã");

// console.log(count);

const minCount = 10;

const frutasPertoDeAcabar = frutas.filter(({ count }) => count < minCount);

// console.log(
//   "Faltam comprar: ",
//   frutasPertoDeAcabar.map(({ name }) => name)
// );

const frutasFaltando = frutasPertoDeAcabar.map(({ name }) => name).join(", ");
const [ultimo, ...resto] = frutasFaltando.split(", ").reverse();

// console.log(ultimo);
// console.log(resto);

console.log(`Faltam comprar: ${resto.reverse().join(", ")} e ${ultimo}`);

// frutasPertoDeAcabar.reduce()
