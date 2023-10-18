"use client";

import { FormEvent, useState } from "react";
import InputPassword from "../atoms/InputPassword";

import { useRouter } from "next/navigation";
import ArrowDown from "../atoms/arrow";

const STEP = {
  profile: 0,
  email: 1,
  password: 2,
};

const MAX_STEP = STEP.password;

function RegistForm() {
  const [step, setStep] = useState<number>(0);
  const [terms, setTerms] = useState<boolean>(false);
  const [nama, setNama] = useState<string>("");
  const [jk, setJk] = useState<"L" | "P">("L");
  const [tglLahir, setTglLahir] = useState<string>("");
  const [hp, setHp] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Password tidak sama");
      return;
    }
    if (step !== MAX_STEP) {
      setStep((value) => value + 1);
      return;
    }
    setIsLoading(true);

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        body: JSON.stringify({
          email,
          password,
          nama,
          jenisKelamin: jk,
          phone: hp,
          tglLahir,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      if (!response.ok) throw Error(data.message);

      alert("Akun berhasil dibuat");
      router.push("/login");
    } catch (error) {
      if (error instanceof Error) {
        if (error.message === "auth/email-already-in-use") {
          alert("Email sudah digunakan");
          setStep(STEP.email);
        } else if (error.message === "auth/invalid-email") {
          alert("Email tidak valid");
        } else if (error.message === "auth/weak-password") {
          alert("Password harus lebih dari 6 karakter");
        } else if (error.message === "auth/operation-not-allowed") {
          alert("Operasi tidak diperbolehkan");
        } else if (error.message === "auth/internal-error") {
          alert("Terjadi kesalahan internal");
        }
      }
    }
    setIsLoading(false);
  };

  return (
    <form
      className="flex flex-col gap-7 transition-all"
      onSubmit={handleSubmit}
    >
      <p className="text-center text-slate-400 font-semibold">
        Step {step + 1}
      </p>
      <div
        className={`flex flex-col gap-3 ${
          step === STEP.profile ? "" : "hidden"
        }`}
      >
        <label htmlFor="nama" className="text-3xl font-bold">
          Nama
        </label>
        <input
          type="text"
          id="nama"
          required={step === STEP.profile}
          placeholder="Masukkan Nama Lengkap"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
          className="py-4 px-7 ring-1 rounded-[10px] placeholder:font-bold focus:outline-blue_primary"
        />
      </div>
      <div
        className={`flex flex-col gap-3 ${
          step === STEP.profile ? "" : "hidden"
        }`}
      >
        <label htmlFor="email" className="text-3xl font-bold">
          Jenis Kelamin
        </label>
        <div className="relative">
          <select
            id="jenisKelamin"
            required={step === STEP.profile}
            placeholder="Masukkan Nama Lengkap"
            value={jk}
            onChange={(e) =>
              setJk(
                e.target.value === "L"
                  ? "L"
                  : e.target.value === "P"
                  ? "P"
                  : "L"
              )
            }
            className="w-full py-4 px-7 ring-1 rounded-[10px] focus:outline-blue_primary placeholder:font-bold appearance-none bg-transparent"
          >
            <option value="L">Laki-laki</option>
            <option value="P">Perempuan</option>
          </select>
          <div className="absolute top-1/2 right-6 scale-150">
            <ArrowDown stroke="black" />
          </div>
        </div>
      </div>
      <div
        className={`flex flex-col gap-3 ${
          step === STEP.profile ? "" : "hidden"
        }`}
      >
        <label htmlFor="ttl" className="text-3xl font-bold">
          Tanggal Lahir
        </label>
        <input
          type="date"
          id="ttl"
          required={step === STEP.profile}
          placeholder="Masukkan Nomor"
          value={tglLahir}
          onChange={(e) => setTglLahir(e.target.value)}
          className="py-4 px-7 ring-1 rounded-[10px] placeholder:font-bold focus:outline-blue_primary"
        />
      </div>
      <div
        className={`flex flex-col gap-3 ${
          step === STEP.profile ? "" : "hidden"
        }`}
      >
        <label htmlFor="hp" className="text-3xl font-bold">
          No. Handphone
        </label>
        <input
          type="text"
          id="hp"
          required={step === STEP.profile}
          placeholder="Masukkan Nomor"
          value={hp}
          onChange={(e) => setHp(e.target.value)}
          className="py-4 px-7 ring-1 rounded-[10px] placeholder:font-bold focus:outline-blue_primary"
        />
      </div>
      <div
        className={`flex flex-col gap-3 ${step === STEP.email ? "" : "hidden"}`}
      >
        <label htmlFor="email" className="text-3xl font-bold">
          Email
        </label>
        <input
          type="email"
          id="email"
          required={step === STEP.email}
          placeholder="Masukkan Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="py-4 px-7 ring-1 rounded-[10px] placeholder:font-bold focus:outline-blue_primary"
        />
        <p>
          Alamat email yang anda masukkan akan menjadi Akun Baru GNB Media milik
          Anda.
        </p>
      </div>
      <div
        className={`relative flex flex-col gap-3 ${
          step === STEP.password ? "" : "hidden"
        }`}
      >
        <label htmlFor="email" className="text-3xl font-bold">
          Password
        </label>
        <InputPassword
          placeholder="Masukkan Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required={step === STEP.password}
        />
      </div>
      <div
        className={`relative flex flex-col gap-3 ${
          step === STEP.password ? "" : "hidden"
        }`}
      >
        <label htmlFor="email" className="text-3xl font-bold">
          Ulangi Password
        </label>
        <InputPassword
          placeholder="Ulangi Password Anda"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <b
          className={`text-red-500 ${
            password !== confirmPassword ||
            (password.length < 6 && password.length > 0)
              ? ""
              : "hidden"
          }`}
        >
          {password !== confirmPassword
            ? "Password tidak sama!"
            : password.length < 6 && password.length > 0
            ? "Password harus lebih dari 6 karakter!"
            : ""}
        </b>
      </div>
      <div className="flex gap-3 items-center">
        <input
          type="checkbox"
          id="remember"
          onChange={() => setTerms((value) => !value)}
          className="relative flex-shrink-0 p-2 peer appearance-none w-8 h-8 rounded-[10px] bg-[#D9D9D9] checked:bg-green_primary transition-all duration-300 ease-in-out"
        />
        <label
          htmlFor="remember"
          className="font-semibold text-base inline-block drop-shadow-md"
        >
          Saya Telah Membaca dan Menyetujui Syarat dan Ketentuan yang Berlaku
        </label>
        <svg
          className="absolute w-8 h-8 p-2 hidden peer-checked:block pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </div>
      {step < MAX_STEP ? (
        <button
          type="submit"
          disabled={!terms}
          className="py-4 bg-blue_primary text-3xl font-bold text-white rounded-2xl transition-all disabled:cursor-not-allowed disabled:bg-slate-400"
        >
          Lanjutkan
        </button>
      ) : (
        <button
          type="submit"
          disabled={!terms || isLoading}
          className="py-4 bg-blue_primary text-3xl font-bold text-white rounded-2xl transition-all disabled:cursor-not-allowed disabled:bg-slate-400"
        >
          {isLoading ? "Mendaftarkan..." : "Daftar"}
        </button>
      )}
    </form>
  );
}

export default RegistForm;
