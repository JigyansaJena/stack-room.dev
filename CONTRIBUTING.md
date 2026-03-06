# Contributing to StackRoom

Contributions are welcome — bug fixes, features, docs, or just pointing out something broken.

---

## Setup

```bash
git clone https://github.com/your-username/stackroom.git
cd stackroom
npm install
cp .env.example .env        # fill in Firebase + Gemini keys
# place service-account.json in server/
node server/index.js
```

---

## Workflow

1. Open an issue before working on anything big
2. Fork, create a branch from `main`
3. Make your changes and test manually
4. Open a PR with a clear description of what changed and why

```bash
git checkout -b fix/what-youre-fixing
git checkout -b feature/what-youre-adding
```

---

## Code Guidelines

- `const` and `let` only, never `var`
- `async/await` over promise chains
- All logic in `<script type="module">` — non-module script is UI only
- Always escape user input before inserting into innerHTML
- New API routes follow the same pattern — verify token, try/catch, return JSON

---

## Commits

Short, present tense, clear.

```
fix chat input not clearing after send
add file delete for admin
update readme api routes
```

---

## What Not to Do

- Do not expose API keys or secrets
- Do not commit directly to `main`
- Do not remove existing features without discussion

---

## Security

Do not open public issues for security vulnerabilities. Email directly instead.

---

## Questions

Open an issue tagged `[Question]`.