export const UPWORK_URL =
  "https://www.upwork.com/freelancers/~01f1f5a0a105561579?mp_source=share";

export const DIRECT_EMAIL = "neven.zdelar@gmail.com";

export const CONTACT_SUBJECT = "Project inquiry";

export const CONTACT_BODY = `Hi Neven,

I found your site and wanted to reach out.

Product / prototype link:
What you need:
Timeline:
Budget range:
Call availability:
`;

export const CONTACT_MAILTO = `mailto:${DIRECT_EMAIL}?subject=${encodeURIComponent(
  CONTACT_SUBJECT,
)}&body=${encodeURIComponent(CONTACT_BODY)}`;

export const heroContent = {
  eyebrow: "Neven Zdelar",
  title: "I build software",
  summary:
    "I am a frontend and product engineer. I work on web, mobile, desktop, and AI-heavy products, with a strong focus on UI, UX, and the details that make software feel finished.",
};

export const profileNotes = [
  "Working professionally since 2017.",
  "React, Next.js, React Native, Electron, TypeScript.",
  "Top Rated Plus on Upwork, 100% Job Success, 3.3k+ hours.",
];
