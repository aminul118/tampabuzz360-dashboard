import Lottie from "lottie-react";
import { useEffect, useState } from "react";

const Loader = () => {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch("/loading.json")
      .then((response) => response.json())
      .then((data) => setAnimationData(data))
      .catch((error) => console.error("Error loading animation:", error));
  }, []);

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Lottie animationData={animationData} loop={true} className="w-24 h-24" />
    </div>
  );
};

export default Loader;
