import { useState } from 'react';
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
          <legend className='f1 fw6 ph0 mh0'>Sign In</legend>
          <div className='mt3'>
            <label className='db fw6 lh-copy f6' htmlFor='email-address'>
              Email
            </label>
            <input
              className='pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100'
              type='email'
              name='email-address'
              id='email-address'
              onChange={onEmailChange}
            />
          </div>
          <div className='mv3'>
            <label className='db fw6 lh-copy f6' htmlFor='password'>
              Password
            </label>
            <input
              className='b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100'
              type='password'
              name='password'
              id='password'
              onChange={onPasswordChange}
            />
          </div>
        </fieldset>
        <div>
          <input
            onClick={onSubmitSignIn}
            className='b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib'
            type='submit'
            value='Sign in'
          />
        </div>
        <div className='lh-copy mt3'>
          <p onClick={() => onRouteChange('register')} className='f6 link dim black db pointer'>
            Register
          </p>
        </div>
      </div>
    </article>
  );
};

export default Signin;
