export const registerUser = (email, password, name) => {
  return fetch('http://localhost:4000/register', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: email,
      password: password,
      name: name,
    }),
  }).then((response) => response.json());
};

export const signIn = (email, password) => {
  return fetch('http://localhost:4000/signin', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  }).then((response) => response.json());
};

export const detectFace = (input) => {
  return fetch('http://localhost:4000/imageurl', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      input: input,
    }),
  }).then((response) => response.json());
};

export const updateEntries = (userId) => {
  return fetch('http://localhost:4000/image', {
    method: 'put',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id: userId,
    }),
  }).then((response) => response.json());
};
