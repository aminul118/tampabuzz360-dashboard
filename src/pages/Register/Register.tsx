import LoginImage from "@/components/Auth/Login/LoginImage";
import RegisterForm from "@/components/Auth/Register/RegisterForm";
import Container from "@/components/ui/Container";

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
