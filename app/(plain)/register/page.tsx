import ArrowDown from "@/components/atoms/arrow";
import RegistForm from "@/components/molecules/RegistForm";

function RegisterPage() {
  return (
    <>
      <h1 className="text-5xl font-bold flex items-center justify-center gap-3">
        Daftar Akun
      </h1>
      <RegistForm />
    </>
  );
}

export default RegisterPage;
