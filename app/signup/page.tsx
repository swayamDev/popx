"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import Button from "../components/Button";
import TextField from "../components/TextField";
import { saveUser } from "../lib/user";

export default function SignupPage() {
  const router = useRouter();
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [company, setCompany] = useState("");
  const [isAgency, setIsAgency] = useState<"yes" | "no">("yes");

  const isValid =
    fullName.trim().length > 0 &&
    phone.trim().length > 0 &&
    email.trim().length > 0 &&
    password.trim().length > 0;

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!isValid) return;
    saveUser({ fullName, email });
    router.push("/profile");
  }

  return (
    <main className="flex flex-1 flex-col px-6 pt-16 pb-10">
      <h1 className="text-[28px] font-medium leading-[36px] text-text">
        Create your
        <br />
        PopX account
      </h1>

      <form onSubmit={handleSubmit} className="mt-6 flex flex-col">
        <TextField
          label="Full Name"
          required
          placeholder="Enter full name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <TextField
          label="Phone number"
          required
          type="tel"
          placeholder="Enter phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <TextField
          label="Email address"
          required
          type="email"
          placeholder="Enter email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          required
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <TextField
          label="Company name"
          placeholder="Enter company name"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />

        <fieldset className="mt-8">
          <legend className="text-[16px] leading-[17px] text-text">
            Are you an Agency?<span className="text-required">*</span>
          </legend>
          <div className="mt-4 flex items-center gap-8">
            {(["yes", "no"] as const).map((option) => (
              <label
                key={option}
                className="flex cursor-pointer items-center gap-2"
              >
                <span className="relative flex h-5 w-5 items-center justify-center rounded-full border-2 border-primary">
                  {isAgency === option && (
                    <span className="h-2.5 w-2.5 rounded-full bg-primary" />
                  )}
                </span>
                <input
                  type="radio"
                  name="isAgency"
                  value={option}
                  checked={isAgency === option}
                  onChange={() => setIsAgency(option)}
                  className="sr-only"
                />
                <span className="text-[16px] leading-[17px] text-text capitalize">
                  {option}
                </span>
              </label>
            ))}
          </div>
        </fieldset>

        <div className="mt-16">
          <Button type="submit" disabled={!isValid}>
            Create Account
          </Button>
        </div>
      </form>
    </main>
  );
}
