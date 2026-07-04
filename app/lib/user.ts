export interface PopXUser {
  fullName: string;
  email: string;
  bio: string;
}

const STORAGE_KEY = "popx-user";

export const DEFAULT_USER: PopXUser = {
  fullName: "Marry Doe",
  email: "Marry@gmail.com",
  bio: "Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam",
};

export function saveUser(user: Partial<PopXUser>) {
  if (typeof window === "undefined") return;
  const current = getUser();
  const next = { ...current, ...user };
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
}

export function getUser(): PopXUser {
  if (typeof window === "undefined") return DEFAULT_USER;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_USER;
    return { ...DEFAULT_USER, ...JSON.parse(raw) };
  } catch {
    return DEFAULT_USER;
  }
}
