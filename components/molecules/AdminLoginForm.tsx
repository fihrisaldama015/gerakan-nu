"use client";
import Link from "next/link";
import { useState } from "react";
import InputPassword from "../atoms/InputPassword";

function AdminLoginForm() {
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
    </form>
  );
}

export default AdminLoginForm;
