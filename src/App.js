import "./App.css";
import Logo from "./components/Logo/Logo";
import Navigation from "./components/Navigation/Navigation";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/Rank/Rank";
import ParticlesBg from "particles-bg";
import { useState } from "react";

function App() {
  const [imageUrlResponse, setImageUrlResponse] = useState("");
  const [input, setInput] = useState("");
  const [box, setBox] = useState([]);

  const PAT = "d0e629f380a14f6babfa9cc843c8e989";
  const USER_ID = "bielecki";
  const APP_ID = "face-recognition-app";
  const MODEL_ID = "face-detection";

  const returnClarifaiRequestOptions = (imageUrl) => {
    const IMAGE_URL = imageUrl;

    const raw = JSON.stringify({
      user_app_id: {
        user_id: USER_ID,
        app_id: APP_ID,
      },
      inputs: [
        {
          data: {
            image: {
              url: IMAGE_URL,
            },
          },
        },
      ],
    });

    const requestOptions = {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: "Key " + PAT,
      },
      body: raw,
    };

    return requestOptions;
  };

  const calculateFaceLocation = (data) => {
    const clarifaiBoundingBoxes = data.outputs[0].data.regions.map((region) => {
      return region.region_info.bounding_box;
    });

    const image = document.getElementById("inputimage");
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

  const handleonButtonSubmit = () => {
    setImageUrlResponse(input);
    fetch("https://api.clarifai.com/v2/models/" + MODEL_ID + "/outputs", returnClarifaiRequestOptions(input))
      .then((response) => response.json())
      .then((data) => {
        displayFace(calculateFaceLocation(data));
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="App">
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm onInputChange={handleInputchange} onButtonSubmit={handleonButtonSubmit} />
        <FaceRecognition boxes={box} imageUrl={imageUrlResponse} />
        <ParticlesBg type="cobweb" bg={true} num={35} />
      </div>
    </>
  );
}

export default App;
