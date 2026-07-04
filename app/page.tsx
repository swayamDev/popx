import Link from "next/link";
import Button from "./components/Button";

export default function LandingPage() {
  return (
    <main className="flex flex-1 flex-col justify-end px-6 pb-10">
      <h1 className="text-[28px] font-medium leading-[36px] text-text">
        Welcome to PopX
      </h1>
      <p className="mt-3 text-[18px] leading-[26px] text-muted">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      </p>

      <div className="mt-8 flex flex-col gap-4">
        <Link href="/signup">
          <Button variant="primary">Create Account</Button>
        </Link>
        <Link href="/login">
          <Button variant="light">Already Registered? Login</Button>
        </Link>
      </div>
    </main>
  );
}
