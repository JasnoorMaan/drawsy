// src/components/Loader.tsx
import { useEffect, useState } from "react";
import "./Loader.css";

interface LoaderProps {
  duration?: number;
}

const Loader = ({ duration = 2000 }: LoaderProps) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  return (
    <div className={`loader-container ${!isLoading ? "loader-hidden" : ""}`}>
      <div className="loader">
        <div className="loader-blob"></div>
        <div className="loader-blob"></div>
        <div className="loader-blob"></div>
      </div>
    </div>
  );
};

export default Loader;
