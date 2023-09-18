import Tilt from "react-parallax-tilt";
import "./Logo.css";
import brain from "./brain.png";

const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt className="tiltWrapper br4 shadow-2 pa2">
        <img src={brain} alt="logo" />
      </Tilt>
    </div>
  );
};

export default Logo;
