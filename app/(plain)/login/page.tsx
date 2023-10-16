import LoginForm from "@/components/molecules/LoginForm";
import ArrowDown from "@/components/atoms/arrow";

function LoginPage() {
  return (
    <>
      <h1 className="text-5xl font-bold flex items-center justify-center gap-3">
        Login Akun <ArrowDown stroke="black" className="scale-[2]" />
      </h1>
      <LoginForm />
    </>
  );
}

export default LoginPage;
