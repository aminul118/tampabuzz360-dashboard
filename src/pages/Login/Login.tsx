import LoginForm from "@/components/Auth/Login/LoginForm";
import LoginImage from "@/components/Auth/Login/LoginImage";
import Container from "@/components/ui/Container";

const Login = () => {
  return (
    <Container className="h-screen flex justify-center items-center container">
      <div className="grid grid-cols-2 justify-center items-center gap-10 shadow-lg rounded-2xl">
        <LoginImage />
        <LoginForm />
      </div>
    </Container>
  );
};

export default Login;
