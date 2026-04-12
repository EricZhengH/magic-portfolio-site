# magic-portfolio-site

Developer portfolio for Hang (Eric) Zheng, inspired by the content-driven, minimal structure of Magic Portfolio.

## Source data

The structured data in `src/data/profile.ts` was copied from `../nextjs-resume/shared/profile.ts`, which was extracted from the existing `nextjs-resume` repository.

The site intentionally avoids demo case studies, fake metrics, and template names. Missing source data is marked as TODO in the UI or left empty in the profile object.

## Run

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

Key routes:

- `/` - portfolio homepage with about, experience, projects, skills, and contact sections
- `/resume` - resume-style page using the same profile data
