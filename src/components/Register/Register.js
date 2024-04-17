import { useState } from 'react';
import { registerUser } from '../../api/requests';

const Register = ({ onRouteChange, loadUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const onEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const onPasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const onNameChange = (event) => {
    setName(event.target.value);
  };

  const onSubmitRegister = () => {
    registerUser(email, password, name).then((user) => {
      if (user.id) {
        loadUser(user);
        onRouteChange('home');
      }
    });
  };

  return (
    <article>
      <div>
        <div>
          <fieldset id='sign_up'>
            <legend>Register</legend>
            <div>
              <label htmlFor='name'>Name</label>
              <input type='text' name='name' id='name' onChange={onNameChange} />
            </div>
            <div>
              <label htmlFor='email-address'>Email</label>
              <input type='email' name='email-address' id='email-address' onChange={onEmailChange} />
            </div>
            <div>
              <label htmlFor='password'>Password</label>
              <input type='password' name='password' id='password' onChange={onPasswordChange} />
              <div>
                <p>Password requirements:</p>
                <ul>
                  <li>At least 8 characters long</li>
                  <li>At least one digit</li>
                  <li>At least one lowercase letter</li>
                  <li>At least one uppercase letter</li>
                  <li>At least one special character</li>
                </ul>
              </div>
            </div>
          </fieldset>
          <div>
            <button onClick={onSubmitRegister} type='submit'>
              Register
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Register;
