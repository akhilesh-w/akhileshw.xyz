# Site Improvements

## Design

### High Impact
- [x] **Homepage is thin** — add a "recent posts" section pulling the latest 2–3 blog posts; gives first-time visitors a reason to click deeper without navigating to /blog
- [ ] **No visual hierarchy on the homepage** — everything is the same weight/size; a slightly larger name or a subtle tagline in a different style would anchor the page
- [ ] **About page "things I like" is a flat list** — cards, icons, or a 2-column grid would make it feel intentional rather than a rough draft

### Medium Impact
- [ ] **Constellation/snow toggle is not discoverable** — if users don't notice it, it's wasted; either make it more prominent or remove it
- [ ] **Blog listing** — group posts by year and make reading time more prominent
- [ ] **No hover/focus state on the profile photo** — missed opportunity for a small personality moment

---

## Code

### High Impact
- [x] **`stagger-5` is reused for 4+ sections on the homepage** — they all animate at the same delay, defeating the stagger effect; give each section a unique delay
- [ ] **Duplicate `:root` CSS variable blocks in `globals.css`** — variables are defined twice (plain `:root` and inside `@layer base`); remove the redundant block
- [ ] **`new Date().getFullYear()` in the footer runs at build time** — will show a stale year without a redeploy; make the footer a client component or add `export const dynamic = 'force-dynamic'` to the layout

### Medium Impact
- [ ] **`navigator.tsx` has 4–5 commented-out nav items** — dead code; delete anything not shipping
- [ ] **Profile photo `<Image>` should have `priority` prop** — it's likely the LCP element; confirm it's set
- [ ] **`NowPlaying` polling interval** — verify the interval is cleared on component unmount to avoid memory leaks
- [ ] **`CommandPalette` re-fetches `/api/search-index` on every open** — cache the result client-side after the first fetch
