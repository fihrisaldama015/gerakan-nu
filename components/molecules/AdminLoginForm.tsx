"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

import InputPassword from "../atoms/InputPassword";

function AdminLoginForm() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const router = useRouter();

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || !password)
      return alert("Email dan Password tidak boleh kosong");
    setIsLoading(true);
    try {
      const response = await fetch("/api/login-admin", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      if (!response.ok) throw Error(data.message);

      router.push("/admin");
    } catch (error) {
      if (error instanceof Error) {
        const errorMessage = error.message;
        alert(errorMessage);
      }
    }
    setIsLoading(false);
  };

  return (
    <form onSubmit={handleLogin} className="flex flex-col gap-7">
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
      </div>
      <button
        disabled={isLoading}
        className="py-4 bg-blue_primary text-3xl font-bold text-white rounded-2xl disabled:cursor-not-allowed disabled:bg-slate-700"
      >
        {isLoading ? "Loading..." : "Login"}
      </button>
    </form>
  );
}

export default AdminLoginForm;
