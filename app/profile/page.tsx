"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { DEFAULT_USER, getUser, PopXUser } from "../lib/user";

export default function ProfilePage() {
  const [user, setUser] = useState<PopXUser>(DEFAULT_USER);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- localStorage only exists on the client; this hydrates the profile with data submitted at signup/login after mount.
    setUser(getUser());
  }, []);

  return (
    <main className="flex flex-1 flex-col">
      <header className="border-b border-border/60 bg-white px-6 py-5">
        <h1 className="text-[18px] font-medium leading-[21px] text-text">
          Account Settings
        </h1>
      </header>

      <section className="flex-1 px-6 pt-6">
        <div className="flex items-start gap-4">
          <div className="relative h-[60px] w-[60px] shrink-0">
            <Image
              src="/images/avatar.png"
              alt={`${user.fullName} avatar`}
              fill
              className="rounded-full object-cover"
              sizes="60px"
            />
            <span className="absolute -bottom-1 -right-1 h-6 w-6">
              <Image
                src="/images/camera-badge.svg"
                alt=""
                width={21}
                height={23}
              />
            </span>
          </div>

          <div className="pt-1">
            <p className="text-[15px] font-medium leading-[19px] capitalize text-text">
              {user.fullName}
            </p>
            <p className="mt-1 text-[14px] leading-[19px] capitalize text-text">
              {user.email}
            </p>
          </div>
        </div>

        <p className="mt-6 text-[14px] leading-[22px] text-text">
          {user.bio}
        </p>

        <div className="mt-6 border-t border-dashed border-border" />
      </section>
    </main>
  );
}
