const apiUrl = process.env.REACT_APP_API_URL;

export const checkServerStatus = () => {
  return fetch(`${apiUrl}/`).then((response) => response.text());
};

export const registerUser = (email, password, name) => {
  return fetch(`${apiUrl}/register`, {
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
  return fetch(`${apiUrl}/signin`, {
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
  return fetch(`${apiUrl}/imageurl`, {
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
  return fetch(`${apiUrl}/image`, {
    method: 'put',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id: userId,
    }),
  }).then((response) => response.json());
};
