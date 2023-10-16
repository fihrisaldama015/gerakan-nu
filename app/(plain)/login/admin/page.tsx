import AdminLoginForm from "@/components/molecules/AdminLoginForm";
import ArrowDown from "@/components/atoms/arrow";

function AdminLoginPage() {
  return (
    <>
      <h1 className="text-5xl font-bold flex items-center justify-center gap-3">
        Login Admin <ArrowDown stroke="black" className="scale-[2]" />
      </h1>
      <AdminLoginForm />
    </>
  );
}

export default AdminLoginPage;
