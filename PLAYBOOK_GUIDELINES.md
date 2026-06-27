# Playbook Content Guidelines

Rules to follow when writing every new playbook post.

---

## Rule 1 — Card Title & Description Length

The card on the `/playbooks` listing page shows the post `title` and `description` from frontmatter. Keep them within these limits for visual consistency across all cards:

- **Title** — 50–60 characters. Should wrap to exactly 2 lines on the card, never 3.
- **Description** — 120–160 characters. Should wrap to 2–3 lines on the card.

**Check before publishing:**
Count characters in the frontmatter `title` and `description` fields before saving the MDX file.

---

## Rule 2 — Slug Format

- 3–5 words max, all lowercase, hyphens only
- Must contain the primary target keyword
- No stop words (a, the, how, can, they, before, to)
- The title is for humans. The slug is for Google.

**Example:**
```
Title: "How to Build Trust With Customers Before You Have a Brand"
Slug:  build-trust-with-customers
```

---

## Rule 3 — Heading Count (H2s)

- 1 H1 — the post title only, never repeated in the body
- 3–4 H2s max for a ~1,000 word post (one H2 per ~250–300 words)
- H3s only when a section genuinely needs sub-points

More than 4 H2s fragments the content into sections too thin to rank individually.

---

## Rule 4 — Primary Keyword Placement

The primary keyword (from DataForSEO) must appear:
- In the title
- In the meta description
- Naturally in the body at least once (first 200 words preferred)
- In at least one H2 if possible

---

## Rule 5 — Author

Default author for all posts: **Agnel John D**

This applies to every post unless explicitly changed. Set in frontmatter as:
```
author: "Agnel John D"
```

---

## Rule 6 — Stats & Claims

Do not include statistics or percentage claims without a real source.
If a claim comes from personal business experience (not a published study), rewrite it as a firsthand observation:

- ❌ "increases completion rates by up to 40%"
- ✅ "in our experience, completion rates improved significantly"

---

## Rule 7 — Images

Leave `ogImage` field out of frontmatter until an actual image is ready.
Do not use placeholder paths.

---

## Rule 8 — Internal Links

No internal links until more pages exist on the site.
Revisit this rule once at least 3 posts are published — then add "related post" links between them.

---

## Rule 9 — Post CTA (End of every post)

Every post ends with a "Read another post" link — no newsletter-style sign-off.
Once more posts exist, link to the most topically related one.
Until then, link back to `/playbooks`.

---

## Rule 10 — Keyword Cannibalization Check

Before finalizing any new post, check the primary keyword against all existing published posts.
No two posts should target the same primary keyword.
If overlap exists, adjust the angle of the new post before writing.

---

## Workflow (every new post)

1. User pastes raw script
2. Extract 8–10 candidate keywords from the content
3. Query DataForSEO for volume + competition data
4. Pick best keyword: highest volume with LOW competition, relevant to content angle
5. Check against existing posts for cannibalization
6. Decide: title (50–60 chars), description (120–160 chars), slug (3–5 words)
7. Write and save MDX with correct frontmatter
