const employeeData = (nome) => {
  const nomeSplit = nome.split(' ');
  let emailFinal = ''
  for (nomes of nomeSplit) {
    emailFinal += `${nomes}_`;
  }
  const obj = {name: nome, emailAddress: `${emailFinal}@trybe.com`}
  return obj;
};

const newEmployees = () => {
  const employees = {
    id1: employeeData('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro
    id2: employeeData('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro
    id3: employeeData('Carla Paiva') // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro
  }
  return employees;
};

console.log(newEmployees());