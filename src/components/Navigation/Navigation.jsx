import { Button } from '../Button/Button';
import { PageRow } from '../PageRow/PageRow';

import styles from './Navigation.module.css';

export const Navigation = ({ onRouteChange, isSignedIn }) => {
  return (
    <nav className={styles.navigationWrapper}>
      <PageRow>
        <div className={styles.navigation}>
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
        </div>
      </PageRow>
    </nav>
  );
};
