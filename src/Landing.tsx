import { useEffect, useState } from "react";
import Spline from "@splinetool/react-spline";
import { useNavigate } from "react-router-dom";
import Loader from "./components/Loader";
import "./index.css";

export default function Landing() {
  const navigate = useNavigate();
  const [splineLoaded, setSplineLoaded] = useState(false);

  const handleOpenDrawsy = () => {
    navigate("/whiteboard");
  };

  const handleSplineLoad = () => {
    setSplineLoaded(true);
  };

  return (
    <>
      {!splineLoaded && <Loader duration={3000} />}

      <div className="app">
        <nav className="navbar">
          <h2 className="logo outfit">drawsy</h2>
        </nav>

        <div className="hero">
          <div className="hero-content">
            <h1 className="tagline">
              Unleash your creativity on a limitless canvas
            </h1>
            <button className="cta-button" onClick={handleOpenDrawsy}>
              Open Drawsy
            </button>
          </div>

          <div className="splineContain">
            <Spline
              scene="https://prod.spline.design/ix9GXvvEi3twgMXa/scene.splinecode"
              className="splineScene"
              onLoad={handleSplineLoad}
            />
          </div>
        </div>
      </div>
    </>
  );
}
