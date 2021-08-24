const fetch = require('node-fetch');

const getRepos = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then((data) => {
      return data.map((repo) => repo.name);
    });
};

const returnRepos = async () => {
  const repos = await getRepos('https://api.github.com/orgs/tryber/repos')
  return repos;
}

// faça um teste que verifique que os repositórios 'sd-01-week4-5-project-todo-list' 
// e 'sd-01-week4-5-project-meme-generator' se encontram nessa lista.

test('test', async () => {
  const arr = await returnRepos();
  expect(arr).toContain('sd-01-week4-5-project-todo-list');
  expect(arr).toContain('sd-01-week4-5-project-meme-generator');
})
