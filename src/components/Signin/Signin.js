import { useState } from 'react';

import { Button } from '../Button/Button';

import { signIn } from '../../api/requests';

import styles from './Signin.module.css';

const Signin = ({ onRouteChange, loadUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const onPasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const onSubmitSignIn = () => {
    signIn(email, password).then((user) => {
      if (user.id) {
        loadUser(user);
        onRouteChange('home');
      }
    });
  };

  return (
    <article className={styles.wrapper}>
      <div className={styles.signinBox}>
        <fieldset id='sign_up' className={styles.fieldset}>
          <legend className={styles.legend}>Sign In</legend>
          <div className={styles.inputWrapper}>
            <label className={styles.label} htmlFor='email-address'>
              Email
            </label>
            <input
              className={styles.input}
              type='email'
              name='email-address'
              id='email-address'
              onChange={onEmailChange}
              autoComplete='off'
              required
            />
          </div>
          <div className={styles.inputWrapper}>
            <label className={styles.label} htmlFor='password'>
              Password
            </label>
            <input
              className={styles.input}
              type='password'
              name='password'
              id='password'
              onChange={onPasswordChange}
              autoComplete='off'
            />
          </div>
        </fieldset>
        <div className={styles.buttonsWrapper}>
          <div>
            <Button onClick={onSubmitSignIn}>Sign In</Button>
          </div>
          <div>
            <Button onClick={() => onRouteChange('register')} variant='secondary'>
              Register
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Signin;
