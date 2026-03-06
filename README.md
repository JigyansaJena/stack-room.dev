# StackRoom

A real-time collaborative coding platform. Chat, write code, review pull requests, and get AI help — all inside one room.

---

## What's Inside

- Room-based workspaces with invite codes
- Real-time chat with @mentions, reply, edit, delete
- @ai in chat gets an AI response visible to everyone
- Personal AI assistant panel with streaming responses (Gemini 2.5 Flash)
- VS Code-style code editor with a file explorer
- Pull request system — edits go through admin approval before committing
- Admin controls — change roles, remove members, approve/reject PRs
- Typing indicators, syntax highlighted code blocks, markdown rendering
- Dark/light theme, resizable panels, GSAP animations

---

## Tech Stack

| Layer | Tech |
|---|---|
| Frontend | HTML, Tailwind CSS |
| Realtime | Firebase Firestore |
| Auth | Firebase Authentication (Google OAuth) |
| Backend | Node.js + Express |
| AI | Google Gemini 2.5 Flash |
| Editor | CodeMirror 5 |
| Animations | GSAP 3 |

---

## Getting Started

```bash
git clone https://github.com/your-username/stackroom.git
cd stackroom
npm install
cp .env.example .env
# add service-account.json to server/
node server/index.js
# open http://localhost:3000
```

---

## Environment Variables

```env
FIREBASE_API_KEY=
FIREBASE_AUTH_DOMAIN=
FIREBASE_PROJECT_ID=
FIREBASE_STORAGE_BUCKET=
FIREBASE_MESSAGING_SENDER_ID=
FIREBASE_APP_ID=
GEMINI_API_KEY=
PORT=3000
```

---

## Project Structure

```
stackroom/
├── public/
│   ├── auth/index.html       sign-in
│   ├── lobby/index.html      create and join rooms
│   └── chat/index.html       room workspace
├── server/
│   └── index.js              API, auth, AI routes
├── .env
└── package.json
```

---

## Roadmap

- Voice and video rooms (Agora)
- Live collaborative code editing
- AI code review on pull requests
- GitHub repo sync
- Message reactions and search
- File diff view on PR review
- Mobile support

---

## Known Limitations

- No live code sync yet — last save wins if two people edit at once
- File tree is flat, no folders
- Messages load last 100 only

---