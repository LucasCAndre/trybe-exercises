const student = {
    Html: 'Muito Bom',
    Css: 'Bom',
    JavaScript: 'Ótimo',
    SoftSkill: 'Ótimo',
  };
  
  const listSkillsWithFor = (student) => {
    const skills = [];
    for(skill in student) {
      skills.push(student[skill]);
    }
  
    return skills;
  };
  
  const listSkillsWithValues = (student) => Object.values(student);
  
  // Sem Object.values
  console.log(listSkillsWithFor(student));
  
  // Com Object.values
  console.log(listSkillsWithValues(student));


// array como objeto com ordenação de chave aleatória
var an_obj = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.values(an_obj)); // ['b', 'c', 'a']

const países = {
    França: 'Paris',
    Brasil: 'Brasília',
    Espanha: 'Madrid',
    Portugal: 'Lisboa',
  };
  const pairKeyValue = Object.entries(países);
  console.log(pairKeyValue);

  for(index in pairKeyValue) {
    console.log('--------');
    console.log('Pais:', pairKeyValue[index][0]);
    console.log('Capital:', pairKeyValue[index][1]);
  };

  const person = {
    name: 'Alberto',
    lastName: 'Gomes',
    age: 20,
  };
  
  const info = {
    age: 23,
    job: 'engenheiro',
  };
  
  const family = {
    children: ['Maria', 'João'],
    wife: 'Ana',
  };
  
  Object.assign(person, info, family)
  console.log(person)

  const person = {
    name:'Roberto',
  };
  
  const lastName = {
    lastName: 'Silva',
  };
  
  const newPerson = Object.assign({},person,lastName);
  newPerson.name = 'Gilberto';
  console.log(newPerson);
  console.log(person);