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
