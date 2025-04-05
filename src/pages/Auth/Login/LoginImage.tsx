import Lottie from "lottie-react";
import lottieImage from "@/assets/lottie/login-register.json";

const LoginImage = () => {
  return (
    <>
      <Lottie animationData={lottieImage} loop={true} />
    </>
  );
};

export default LoginImage;
