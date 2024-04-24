import { Button } from '../Button/Button';

import styles from './Navigation.module.css';

const Navigation = ({ onRouteChange, isSignedIn }) => {
  if (isSignedIn) {
    return (
      <nav>
        <button onClick={() => onRouteChange('signout')}>Sign Out</button>
      </nav>
    );
  } else {
    return (
      <nav className={styles.navigationWrapper}>
        <Button onClick={() => onRouteChange('signin')} variant='secondary'>
          Sign In
        </Button>
        <Button onClick={() => onRouteChange('register')} variant='secondary'>
          Register
        </Button>
      </nav>
    );
  }
};

export default Navigation;
