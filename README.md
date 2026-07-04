# PopX

A pixel-matched React/Next.js implementation of the PopX mobile app design (Adobe XD), built for the frontend qualifier task.

## Screens

| Route | Screen | Behavior |
|---|---|---|
| `/` | Landing | Entry point — routes to Signup or Login |
| `/signup` | Create your PopX account | Full name, phone, email, password, company name, agency radio. Submits to `/profile` |
| `/login` | Signin to your PopX account | Email + password. Login button enables once both fields are filled. Submits to `/profile` |
| `/profile` | Account Settings | Shows the name/email captured at signup or login (falls back to design defaults) |

Navigation is handled with Next.js App Router (`next/link`, `useRouter`), so transitions between screens are client-side and instant.

## Design fidelity

- Fixed **375x812** mobile frame, centered on the page (`app/layout.tsx`), matching the Adobe XD artboard size.
- Colors, type scale (Rubik, 13-28px), spacing, and button/input states were pulled directly from the XD Inspect panel.
- Font: **Rubik** (weights 400/500/600), loaded via Google Fonts.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build

```bash
npm run build
npm run start
```

## Project structure

```
app/
  layout.tsx            # root layout - centered mobile frame + font
  page.tsx               # Landing screen
  login/page.tsx           # Login screen
  signup/page.tsx           # Signup screen
  profile/page.tsx           # Profile / Account Settings screen
  components/
    Button.tsx              # primary / light button variants
    TextField.tsx             # floating-label input
  lib/
    user.ts                    # tiny localStorage-backed store so Profile
                                  reflects what was entered at signup/login
public/images/
  avatar.png                   # profile photo asset
  camera-badge.svg               # camera badge icon (profile screen)
```

## Deploying

This is a standard Next.js app - deploy directly to Vercel (recommended, zero config) or Netlify.
