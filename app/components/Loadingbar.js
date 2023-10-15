"use client"
import { useEffect, useState } from "react";

const LoadingBar = () => {
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (loadingProgress < 100) {
        setLoadingProgress(loadingProgress + 1);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [loadingProgress]);

  return (
    <div
      className="fixed top-0 left-0 h-2 bg-blue-500"
      style={{ width: `${loadingProgress}%` }}
    ></div>
  );
};

export default LoadingBar;
