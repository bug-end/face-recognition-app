import './App.css';
import Logo from './components/Logo/Logo';
import Navigation from './components/Navigation/Navigation';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import ParticlesBg from 'particles-bg';
import { useState, useEffect } from 'react';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import { detectFace, updateEntries, checkServerStatus } from './api/requests';

function App() {
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
    checkServerStatus()
      .then((data) => console.log(data))
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

  const handleInputchange = (event) => {
    setInput(event.target.value);
  };

  const handleOnPictureSubmit = () => {
    setImageUrlResponse(input);
    detectFace(input)
      .then((data) => {
        if (data) {
          updateEntries(user.id)
            .then((count) => setUser({ ...user, entries: count }))
            .catch(console.log);
        }
        displayFace(calculateFaceLocation(data));
      })
      .catch((err) => console.log(err));
  };

  const handleOnRouteChange = (route) => {
    if (route === 'signout') {
      resetState();
    } else if (route === 'home') {
      setIsSignedIn(true);
    }
    setRoute(route);
  };

  return (
    <div className='App'>
      <Navigation isSignedIn={isSignedIn} onRouteChange={handleOnRouteChange} />
      {route === 'home' ? (
        <div>
          <Logo />
          <Rank name={user.name} entries={user.entries} />
          <ImageLinkForm onInputChange={handleInputchange} onButtonSubmit={handleOnPictureSubmit} />
          <FaceRecognition boxes={box} imageUrl={imageUrlResponse} />
        </div>
      ) : route === 'signin' ? (
        <Signin loadUser={handleLoadUser} onRouteChange={handleOnRouteChange} />
      ) : (
        <Register loadUser={handleLoadUser} onRouteChange={handleOnRouteChange} />
      )}
      <ParticlesBg type='cobweb' bg={true} num={35} />
    </div>
  );
}

export default App;
