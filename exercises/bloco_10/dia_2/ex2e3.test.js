const users = {
  4: { name: 'Mark' },
  5: { name: 'Paul' }
};

const findUserById = (id) => {
  return new Promise((resolve, reject) => {
      if (users[id]) {
        return resolve(users[id]);
      };

      return reject({ error: 'User with ' + id + ' not found.' });
  });
};

const getUserName = (userID) => {
  return findUserById(userID).then(user => user.name);
};

test('teste', async () => {
  try {
    const resp = await getUserName(4);
    expect(resp).toBe('Mark')
  } catch {
    error;
  }
})

test('teste2', async () => {
  try {
    await getUserName(2);
  } catch (error) {
    expect(error).toEqual({ error: 'User with 2 not found.' })
  }
})

test('com promisse', () => {
  return getUserName(4).then((nam) => {
    expect(nam).toBe('Mark');
  })
})

test('promise', () => {
  return getUserName(2).catch((err) => {
    expect(err).toEqual({ error: 'User with 2 not found.' })
  })
})
