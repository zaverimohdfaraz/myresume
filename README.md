# Faraz Zaveri — Portfolio

Personal portfolio built with **Next.js 16 (App Router)**, **TypeScript**, **Tailwind CSS v4** and **Nodemailer** for the contact form. Frontend and backend live in the same Next.js app.

## Run locally

```bash
npm install
cp .env.example .env.local   # then fill in your SMTP details
npm run dev                  # http://localhost:3000
```

## Where things are

| What | File |
| --- | --- |
| All text: intro, projects, experience, skills, contact links | `lib/data.ts` |
| Home page sections | `app/page.tsx` |
| Project case-study pages (`/work/<slug>`) | `app/work/[slug]/page.tsx` |
| Contact form API (Nodemailer) | `app/api/contact/route.ts` |
| Animated projects board in the hero | `components/Pipeline.tsx` |
| Colours and fonts | `app/globals.css` (`@theme` block) |
| Resume PDF | `public/resume/Faraz_Zaveri_Resume.pdf` |
| Project screenshots | `public/images/projects/` |

**Add a project:** add an object to `projects` in `lib/data.ts`. Set `featured: true` to show it as a large row on the home page. Add `image: "/images/projects/your-file.jpg"` once you have a screenshot; without one, a dark name panel is shown instead.

**Update the resume:** replace `public/resume/Faraz_Zaveri_Resume.pdf` (keep the same file name).

## Contact form email (Nodemailer)

Set these in `.env.local` locally and in **Vercel → Project → Settings → Environment Variables** for production:

```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_USER=farazzaveri26@gmail.com
SMTP_PASS=<Gmail App Password>
CONTACT_TO=farazzaveri26@gmail.com
```

For Gmail, turn on 2-Step Verification and create an App Password; your normal Gmail password won't work. Hostinger or any other SMTP works the same way. Replies go straight to the visitor because `replyTo` is set to their email.

## Deploy

Push to GitHub — Vercel detects Next.js automatically. Old links (`/my-resume`, `/recent-work`, `/contact`) redirect to the matching sections (`next.config.ts`).
