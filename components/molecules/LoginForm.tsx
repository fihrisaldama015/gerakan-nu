"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import InputPassword from "../atoms/InputPassword";

function LoginForm() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <form className="flex flex-col gap-7">
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
        <label htmlFor="email" className="text-3xl font-bold">
          Password
        </label>
        <InputPassword
          placeholder="Masukkan Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Link
          href="/forgot"
          className="flex flex-row-reverse text-blue_primary font-bold"
        >
          Lupa Password?
        </Link>
      </div>
      <button className="py-4 bg-blue_primary text-3xl font-bold text-white rounded-2xl">
        Login
      </button>
      <div className="flex items-center gap-6">
        <span className="w-full h-[1px] bg-[#496052]"></span>
        <p className="text-[#496052] font-bold text-lg">Atau</p>
        <span className="w-full h-[1px] bg-[#496052]"></span>
      </div>
      <p className="text-center">Daftar/Login dengan akun ini</p>
      <button
        type="button"
        className="relative py-4 px-5 ring-2 ring-black rounded-[20px] flex items-center justify-center"
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
