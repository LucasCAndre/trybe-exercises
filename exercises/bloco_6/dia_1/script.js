const estados = document.getElementById('estados');

const arrEstados = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Espirito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins', 'Distrito Federal'];

for (let index = 0; index < arrEstados.length; index += 1) {
  const tagOption = document.createElement('option');
  tagOption.required = 'on';
  tagOption.innerText = arrEstados[index];
  document.getElementById('estados').appendChild(tagOption);
}

function generateCurriculum() {
  const formulario = document.querySelectorAll('form')[0];
  for (let index = 0; index < formulario.length; index += 1) {
    const tagp = document.createElement('p');
    tagp.innerText = formulario[index].name;
    if (tagp.innerText != 'undefined'){
      document.getElementById('curriculum').appendChild(tagp);
    }
    const tagp1 = document.createElement('p');
    tagp1.innerText = formulario[index].value;
    if (tagp1.innerText != 'undefined') {
      document.getElementById('curriculum').appendChild(tagp1);
    }
  }

}

document.getElementById('gerar-curriculo').addEventListener('click', generateCurriculum);

function preventDef(event) {
  event.preventDefault()
}

document.getElementById('formulario').addEventListener('click', preventDef);
