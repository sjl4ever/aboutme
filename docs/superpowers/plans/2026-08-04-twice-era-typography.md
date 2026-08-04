# TWICE Era Typography Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Give each TWICE album chapter its own deliberate title treatment so the archive no longer reuses a few generic font buckets.

**Architecture:** Keep the existing `ArchivePage` markup and album data. Add a scoped set of `.archive-twice .exhibit-stage[data-era=...]` rules after the shared era defaults so each TWICE chapter overrides only its title font, casing, tracking, and scale where needed.

**Tech Stack:** Next.js/Vinext, existing `next/font/google` variables, CSS, existing rendered HTML tests.

---

### Task 1: Add TWICE-specific title treatments

**Files:**
- Modify: `app/globals.css` after the shared `.era-font-* h2` rules

- [ ] **Step 1: Add the minimal scoped overrides**

Use the existing font variables and the existing `data-era` values:

```css
.archive-twice .exhibit-stage[data-era="the-story-begins"] .exhibit-copy h2 { font-family: var(--font-archive-bubble), sans-serif; font-weight: 700; letter-spacing: -.08em; }
.archive-twice .exhibit-stage[data-era="twicecoaster-lane-1"] .exhibit-copy h2 { font-family: var(--font-archive-display), sans-serif; font-weight: 400; letter-spacing: -.06em; text-transform: uppercase; }
.archive-twice .exhibit-stage[data-era="twicetagram"] .exhibit-copy h2 { font-family: var(--font-archive-script), cursive; font-weight: 700; letter-spacing: -.05em; }
.archive-twice .exhibit-stage[data-era="what-is-love"] .exhibit-copy h2 { font-family: var(--font-archive-serif), Georgia, serif; font-style: italic; font-weight: 600; letter-spacing: -.06em; }
.archive-twice .exhibit-stage[data-era="feel-special"] .exhibit-copy h2 { font-family: var(--font-archive-serif), Georgia, serif; font-weight: 600; letter-spacing: .01em; text-transform: uppercase; }
.archive-twice .exhibit-stage[data-era="eyes-wide-open"] .exhibit-copy h2 { font-family: var(--font-archive-display), sans-serif; font-weight: 400; letter-spacing: .02em; text-transform: uppercase; }
.archive-twice .exhibit-stage[data-era="formula-of-love-o-t-3"] .exhibit-copy h2 { font-family: var(--font-geist-sans), Arial, sans-serif; font-weight: 700; letter-spacing: -.09em; }
.archive-twice .exhibit-stage[data-era="taste-of-love"] .exhibit-copy h2 { font-family: var(--font-archive-script), cursive; font-weight: 500; letter-spacing: -.06em; }
.archive-twice .exhibit-stage[data-era="ready-to-be"] .exhibit-copy h2 { font-family: var(--font-archive-display), sans-serif; font-weight: 400; letter-spacing: .01em; text-transform: uppercase; }
.archive-twice .exhibit-stage[data-era="with-you-th"] .exhibit-copy h2 { font-family: var(--font-archive-serif), Georgia, serif; font-style: italic; font-weight: 600; letter-spacing: -.05em; }
.archive-twice .exhibit-stage[data-era="this-is-for"] .exhibit-copy h2 { font-family: var(--font-archive-display), sans-serif; font-weight: 400; letter-spacing: .02em; text-transform: uppercase; }
.archive-twice .exhibit-stage[data-era="ten-the-story-goes-on"] .exhibit-copy h2 { font-family: var(--font-archive-serif), Georgia, serif; font-weight: 600; letter-spacing: -.03em; }
```

- [ ] **Step 2: Run the focused rendered-page test**

Run: `npm.cmd test`

Expected: all rendered HTML tests pass and the build completes.

### Task 2: Publish the corrected archive

**Files:**
- No additional source files

- [ ] **Step 1: Commit only the TWICE typography change and its plan**

Run: `git add app/globals.css docs/superpowers/plans/2026-08-04-twice-era-typography.md; git commit -m "Refine TWICE era typography"`

- [ ] **Step 2: Push the current main branch**

Run: `git push github main`

Expected: GitHub Pages workflow starts for the new commit.
