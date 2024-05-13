import { Button } from '../Button/Button';

import styles from './Navigation.module.css';

const Navigation = ({ onRouteChange, isSignedIn }) => {
  return (
    <nav className={styles.navigationWrapper}>
      {isSignedIn ? (
        <Button onClick={() => onRouteChange('signout')} variant='secondary'>
          Sign Out
        </Button>
      ) : (
        <>
          <Button onClick={() => onRouteChange('signin')} variant='secondary'>
            Sign In
          </Button>
          <Button onClick={() => onRouteChange('register')} variant='secondary'>
            Register
          </Button>
        </>
      )}
    </nav>
  );
};

export default Navigation;
