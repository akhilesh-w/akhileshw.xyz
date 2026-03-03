# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server (localhost:3000)
npm run build     # Production build
npm run lint      # ESLint
```

## Architecture

**Next.js 14 App Router** personal website with TypeScript and Tailwind CSS.

### Content System
- Blog posts are MDX files in `content/posts/` with YAML frontmatter (title, date, author, description, readingTime, optional cross-post links: substack, medium, paragraph, other)
- `src/utils/api.ts` reads MDX files from disk — `getAllPosts()`, `getPostBySlug()`, `getAllPostSlugs()`
- Posts rendered server-side with `next-mdx-remote/rsc` and plugins: remark-gfm, remark-math, rehype-highlight, rehype-katex
- Custom MDX components defined in `components/MdxComponents.tsx` (includes Callout component with info/warning/error/success variants)

### Routing & Pages
- App Router: `src/app/` with folder-based routes
- Dynamic blog routes: `src/app/blog/[slug]/page.tsx` with `generateStaticParams()`
- API routes: `src/app/api/now-playing/route.ts` (Spotify), `src/app/api/search-index/route.ts`
- RSS feed: `src/app/rss/route.ts` rewritten to `/rss.xml` via next.config.mjs
- Server actions: `src/app/guestbook/actions.ts` for database writes

### Key Components (`components/`)
- `main-layout.tsx` — page container wrapping Navigator + Footer
- `BlogLayout.tsx` — blog post wrapper with metadata header, JSON-LD schema, reading progress bar
- `CommandPalette.tsx` — Cmd+K search (client component, fetches `/api/search-index`)
- `NowPlaying.tsx` — Spotify widget with smart polling (client component)
- `MdxComponents.tsx` — custom styled MDX elements
- `Providers.tsx` — next-themes ThemeProvider wrapper

### Styling
- Tailwind CSS with `class` dark mode strategy
- Custom dark theme colors in `tailwind.config.ts`: dark-bg (#1a1a1a), dark-text (#e5e5e5), dark-border (#333333)
- Staggered entrance animations: `.appear` + `.stagger-1` through `.stagger-5` in `globals.css`
- Typography plugin (`@tailwindcss/typography`) for prose content

### External Integrations
- **Spotify**: OAuth refresh token flow in `src/utils/spotify.ts`, env vars: `SPOTIFY_CLIENT_ID`, `SPOTIFY_CLIENT_SECRET`, `SPOTIFY_REFRESH_TOKEN`
- **Vercel Postgres**: guestbook table, env: `POSTGRES_URL`
- **Vercel Analytics + Speed Insights**: included in root layout

### Path Alias
`@/*` maps to `./src/*` (tsconfig.json)
