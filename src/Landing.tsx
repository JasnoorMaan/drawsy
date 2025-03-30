import Spline from "@splinetool/react-spline";
import { useNavigate } from "react-router-dom";
import "./index.css";

export default function App() {
  const navigate = useNavigate();

  const handleOpenDrawsy = () => {
    navigate("/whiteboard");
  };
  return (
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
          />
        </div>
      </div>
    </div>
  );
}
