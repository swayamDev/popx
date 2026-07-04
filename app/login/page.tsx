"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import Button from "../components/Button";
import TextField from "../components/TextField";
import { saveUser } from "../lib/user";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isValid = email.trim().length > 0 && password.trim().length > 0;

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!isValid) return;
    saveUser({ email });
    router.push("/profile");
  }

  return (
    <main className="flex flex-1 flex-col px-6 pt-16">
      <h1 className="text-[28px] font-medium leading-[36px] text-text">
        Signin to your
        <br />
        PopX account
      </h1>
      <p className="mt-3 text-[18px] leading-[26px] text-muted">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      </p>

      <form onSubmit={handleSubmit} className="mt-8 flex flex-col">
        <TextField
          label="Email Address"
          type="email"
          placeholder="Enter email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border-primary"
        />

        <div className="mt-10">
          <Button type="submit" disabled={!isValid}>
            Login
          </Button>
        </div>
      </form>
    </main>
  );
}
