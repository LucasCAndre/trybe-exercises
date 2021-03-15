const estados = document.getElementById('estados');

const arrEstados = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Espirito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins', 'Distrito Federal'];

for (let index = 0; index < arrEstados.length; index += 1) {
  const tagOption = document.createElement('option');
  tagOption.required = 'on';
  tagOption.innerText = arrEstados[index];
  document.getElementById('estados').appendChild(tagOption);
}
