import "./App.css";
import Logo from "./components/Logo/Logo";
import Navigation from "./components/Navigation/Navigation";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/Rank/Rank";

import ParticlesBg from "particles-bg";

function App() {
  const handleInputchange = (event) => {
    console.log(event.target.value);
  };

  const handleonButtonSubmit = () => {
    console.log("click");
  };

  return (
    <>
      <div className="App">
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm onInputChange={handleInputchange} onButtonSubmit={handleonButtonSubmit} />
        {/* <FaceRecognition /> */}
        <ParticlesBg type="cobweb" bg={true} num={35} />
      </div>
    </>
  );
}

export default App;
