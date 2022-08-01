// const required = (minLength) => (value) => value?.length > minLength;

function required(minLength) {
  return function validate(value) {
    return value?.length > minLength;
  };
}

var nameValue = "Felipe e Aguiar";
var emailValue = "";

const regrasDeValidacao = {
  nameValue: [required(2), nomeESobrenome()],
  emailValue: [required(5), validEmail(), novoEmail()],
};

function validador(onSuccess) {
  if (
    Object.keys(regrasDeValidacao).every((chave) => {
      const validar = regrasDeValidacao[chave];
      const valor = window[chave];
      return validar(valor);
    })
  ) {
    onSuccess();
  }
}

function handleChange(id, value) {
  window[id] = value;
}

function handleSubmit() {
  console.log({ nameValue, emailValue });
}
