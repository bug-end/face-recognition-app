import { useState, useEffect } from 'react';

import { Logo } from './components/Logo/Logo';
import { Navigation } from './components/Navigation/Navigation';
import { FaceRecognition } from './components/FaceRecognition/FaceRecognition';
import { ImageLinkForm } from './components/ImageLinkForm/ImageLinkForm';
import { Rank } from './components/Rank/Rank';
import { Signin } from './components/Signin/Signin';
import { Register } from './components/Register/Register';
import { LoadingOverlay } from './components/LoadingOverlay/LoadingOverlay';
import { PageRow } from './components/PageRow/PageRow';

import { detectFace, updateEntries, checkServerStatus } from './api/requests';

import styles from './App.module.css';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [imageUrlResponse, setImageUrlResponse] = useState('');
  const [input, setInput] = useState('');
  const [box, setBox] = useState([]);
  const [route, setRoute] = useState('signin');
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [user, setUser] = useState({
    id: '',
    name: '',
    email: '',
    entries: 0,
    joined: '',
  });

  const resetState = () => {
    setImageUrlResponse('');
    setInput('');
    setBox([]);
    setRoute('signin');
    setIsSignedIn(false);
    setUser({
      id: '',
      name: '',
      email: '',
      entries: 0,
      joined: '',
    });
  };

  useEffect(() => {
    setIsLoading(true);
    const minLoaderDisplayTime = 2000;
    const startTime = Date.now();

    checkServerStatus()
      .then((data) => {
        const elapsedTime = Date.now() - startTime;
        const remainingTime = Math.max(0, minLoaderDisplayTime - elapsedTime);

        setTimeout(() => {
          console.log(data);
          setIsLoading(false);
        }, remainingTime);
      })
      .catch((err) => console.error(err));
  }, []);

  const handleLoadUser = (data) => {
    setUser({
      id: data.id,
      name: data.name,
      email: data.email,
      entries: data.entries,
      joined: data.joined,
    });
  };

  const calculateFaceLocation = (data) => {
    const clarifaiBoundingBoxes = data.outputs[0].data.regions.map((region) => {
      return region.region_info.bounding_box;
    });

    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    let boundingBoxes = [];

    clarifaiBoundingBoxes.forEach((boundingBox) => {
      boundingBoxes.push({
        leftCol: boundingBox.left_col * width,
        topRow: boundingBox.top_row * height,
        rightCol: width - boundingBox.right_col * width,
        bottomRow: height - boundingBox.bottom_row * height,
      });
    });
    return boundingBoxes;
  };

  const displayFace = (boundingBox) => {
    setBox(boundingBox);
  };

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleOnPictureSubmit = () => {
    setImageUrlResponse(input);
    if (input.length > 0) {
      detectFace(input)
        .then((data) => {
          setInput('');
          if (data) {
            updateEntries(user.id)
              .then((count) => {
                setUser({ ...user, entries: count });
                displayFace(calculateFaceLocation(data));
              })
              .catch((err) => console.log(err));
          }
        })
        .catch((err) => console.log(err));
    }
  };

  const handleOnRouteChange = (route) => {
    if (route === 'signout') {
      resetState();
    } else if (route === 'home') {
      setIsSignedIn(true);
    }
    setRoute(route);
  };

  return isLoading ? (
    <LoadingOverlay />
  ) : (
    <div className={styles.fadeIn}>
      <Navigation isSignedIn={isSignedIn} onRouteChange={handleOnRouteChange} />
      <main>
        <PageRow className={styles.pageRow}>
          {route === 'home' ? (
            <>
              <div className={styles.headingWrapper}>
                <Logo />
                <Rank name={user.name} entries={user.entries} />
              </div>
              <ImageLinkForm
                onInputChange={handleInputChange}
                onButtonSubmit={handleOnPictureSubmit}
                inputValue={input}
              />
              <FaceRecognition boxes={box} imageUrl={imageUrlResponse} />
            </>
          ) : route === 'signin' ? (
            <Signin loadUser={handleLoadUser} onRouteChange={handleOnRouteChange} />
          ) : (
            <Register loadUser={handleLoadUser} onRouteChange={handleOnRouteChange} />
          )}
        </PageRow>
      </main>
    </div>
  );
}

export default App;
