# Next Portfolio

A multilingual developer portfolio built with Next.js App Router, TypeScript, Tailwind CSS, and server actions.

This project includes:

- Home, About, Projects, and Contact pages
- English and Japanese language support via next-intl
- Theme switching (light/dark)
- Contact form validation with Zod + React Hook Form
- Email delivery with Resend + React Email template
- Reusable UI components and animated sections

## Tech Stack

- Next.js 16 (App Router)
- React 19 + TypeScript
- Tailwind CSS 4
- next-intl
- Framer Motion
- shadcn/ui style components
- React Hook Form + Zod
- Resend + React Email

## Project Structure

```text
app/
  (locale)/
    page.tsx
    about/page.tsx
    projects/page.tsx
    contact/page.tsx
  actions/contact.action.ts
  emails/contact-email.tsx
  data/data.ts
  messages/en.json
  messages/ja.json
components/
  form.tsx
  skills.tsx
  project-card.tsx
  layouts/
  header/
i18n/request.ts
lib/
  resend.ts
  validations.ts
```

## Getting Started

### 1. Prerequisites

- Node.js 20+ recommended
- npm (or pnpm/yarn/bun)

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env.local` file in the project root:

```env
RESEND_API_KEY=your_resend_api_key_here
```

Without this key, the app throws an error from `lib/resend.ts` on startup.

### 4. Run development server

```bash
npm run dev
```

Open http://localhost:3000

## Available Scripts

```bash
npm run dev    # Start dev server
npm run build  # Create production build
npm run start  # Start production server
npm run lint   # Run ESLint
```

## How Contact Email Works

1. User submits the form in `components/form.tsx`
2. Data is validated with `contactFormSchema` in `lib/validations.ts`
3. Server action `sendContactEmail` in `app/actions/contact.action.ts` sends email
4. Email HTML is generated from `app/emails/contact-email.tsx`
5. Resend API delivers the message

## Internationalization

- Translation files:
  - `app/messages/en.json`
  - `app/messages/ja.json`
- Locale is chosen from `NEXT_LOCALE` cookie in `i18n/request.ts`
- Supported locales in current setup: `en`, `ja`

## Common JSON Mistake (Important)

If you see errors like:

- `Unexpected end of string`
- `Expected comma`
- `Colon expected`

It usually means a JSON string contains a real line break.

In JSON, write line breaks as `\n`, not as raw Enter/new lines inside a quoted string.

## Deployment

The project can be deployed on Vercel.

Before deployment:

- Set `RESEND_API_KEY` in Vercel environment variables
- Make sure contact recipient/from settings in `app/actions/contact.action.ts` are production-ready

---
