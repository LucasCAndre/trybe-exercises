const student1 = {
    Html: 'Muito Bom',
    Css: 'Bom',
    JavaScript: 'Ótimo',
    SoftSkills: 'Ótimo',
  };
  
  const student2 = {
    Html: 'Bom',
    Css: 'Ótimo',
    JavaScript: 'Ruim',
    SoftSkills: 'Ótimo',
    Git: 'Bom',
  };

  function habilidades(objecto) {
    const chaves = Object.keys(objecto);
    const habbilidades = [];
    for (let index = 0; index < chaves.length; index += 1) {
      habbilidades.push(chaves[index]);
      habbilidades.push(`Nível: ${objecto[chaves[index]]}`);
    }
    return habbilidades;
  }

console.log(habilidades(student1));

console.log(habilidades(student2));
