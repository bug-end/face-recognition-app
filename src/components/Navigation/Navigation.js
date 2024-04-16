const Navigation = ({ onRouteChange, isSignedIn }) => {
  if (isSignedIn) {
    return (
      <nav>
        <button onClick={() => onRouteChange('signout')}>Sign Out</button>
      </nav>
    );
  } else {
    return (
      <nav>
        <button onClick={() => onRouteChange('signin')}>Sign In</button>
        <button onClick={() => onRouteChange('register')}>Register</button>
      </nav>
    );
  }
};

export default Navigation;
