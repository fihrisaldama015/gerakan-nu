"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

import { auth, provider } from "@/lib/firebase";
import { signInWithPopup } from "firebase/auth";

import InputPassword from "../atoms/InputPassword";

function LoginForm() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isError, setIsError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const router = useRouter();

  const handleLoginGoogle = async () => {
    setIsLoading(true);
    try {
      const result = await signInWithPopup(auth, provider);

      const { uid, email, displayName } = result.user;

      const response = await fetch("/api/login-google", {
        method: "POST",
        body: JSON.stringify({ uid, email, displayName }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      if (!response.ok) throw Error(data.message);

      router.push("/profile");
    } catch (error) {
      if (error instanceof Error) {
        const errorMessage = error.message;
        alert(errorMessage);
      }
    }
    setIsLoading(false);
  };

  const handleSignIn = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || !password)
      return alert("Email dan Password tidak boleh kosong");
    setIsLoading(true);
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      setIsError(false);
      const data = await response.json();
      if (!response.ok) throw Error(data.message);

      router.push("/profile");
    } catch (error) {
      setIsError(true);
      if (error instanceof Error) {
        if (error.message === "auth/invalid-login-credentials") {
          alert("Email atau Password salah");
          setErrorMessage("Email atau Password salah");
        } else if (error.message === "auth/operation-not-allowed") {
          alert("Operasi tidak diperbolehkan");
        } else if (error.message === "auth/internal-error") {
          alert("Terjadi kesalahan internal");
        } else if (error.message === "auth/too-many-requests") {
          alert(
            "Akses ke akun ini untuk sementara dinonaktifkan karena banyak upaya login yang gagal. Anda dapat segera memulihkannya dengan mengatur ulang kata sandi Anda atau Anda dapat mencobanya lagi nanti."
          );
        } else {
          alert(error.message);
        }
      }
    }
    setIsLoading(false);
  };
  return (
    <form onSubmit={handleSignIn} className="flex flex-col gap-7">
      <div className="flex flex-col gap-3">
        <label htmlFor="email" className="text-3xl font-bold">
          Email
        </label>
        <input
          type="email"
          id="email"
          placeholder="Masukkan Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="py-4 px-7 ring-1 rounded-[10px] placeholder:font-bold focus:outline-blue_primary"
        />
      </div>
      <div className="relative flex flex-col gap-3">
        <label htmlFor="email" className="text-3xl font-bold" tabIndex={-1}>
          Password
        </label>
        <InputPassword
          placeholder="Masukkan Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="flex flex-row-reverse">
          <Link href="/forgot" className="text-blue_primary font-bold">
            Lupa Password?
          </Link>
        </div>
      </div>
      <b className={`text-red-500 ${isError ? "" : "hidden"}`}>
        {errorMessage}
      </b>
      <button
        disabled={isLoading}
        className="py-4 bg-blue_primary text-3xl font-bold text-white rounded-2xl focus:outline-blue-900 disabled:cursor-not-allowed disabled:bg-slate-700"
      >
        {isLoading ? "Loading..." : "Login"}
      </button>
      <div className="flex items-center gap-6">
        <span className="w-full h-[1px] bg-[#496052]"></span>
        <p className="text-[#496052] font-bold text-lg">Atau</p>
        <span className="w-full h-[1px] bg-[#496052]"></span>
      </div>
      <p className="text-center">Daftar/Login dengan akun ini</p>
      <button
        type="button"
        onClick={handleLoginGoogle}
        className="relative py-4 px-5 ring-2 ring-black rounded-[20px] flex items-center justify-center focus:outline-blue_primary"
      >
        <Image
          src="/icons/google.svg"
          width={40}
          height={40}
          alt="google"
          className="absolute left-[20px]"
        />
        <p className="text-center">Google</p>
      </button>
      <p className="mt-16 text-center text-3xl font-bold">
        Belum Mempunyai Akun?
      </p>
      <Link
        href="/register"
        className="p-4 rounded-[20px] text-center bg-green_primary font-bold text-2xl text-white"
      >
        Buat Akun Disini
      </Link>
    </form>
  );
}

export default LoginForm;
