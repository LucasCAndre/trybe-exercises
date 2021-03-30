const uperCase = (str) => {
  return str.toUpperCase();
}


const hof = (Gaba, Resp) => {
  const Resposta = uperCase(Resp);
  const Gabarito = uperCase(Gaba);
  return Gabarito === Resposta ? true : false;
}

console.log(hof('olar', 'OLaR'));

