import Container from "@/components/ui/Container";
import LoginImage from "../Auth/Login/LoginImage";
import RegisterForm from "../Auth/Register/RegisterForm";

const Register = () => {
  return (
    <Container className="h-screen flex justify-center items-center container">
      <div className="grid grid-cols-2 justify-center items-center gap-10 shadow-lg rounded-2xl">
        <LoginImage />
        <RegisterForm />
      </div>
    </Container>
  );
};

export default Register;
