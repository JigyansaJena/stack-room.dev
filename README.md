# StackRoom

> Real-time collaborative coding rooms with AI-powered bug resolution.

![License](https://img.shields.io/badge/license-MIT-indigo)
![Status](https://img.shields.io/badge/status-in%20development-yellow)

## What is StackRoom?

StackRoom is an open-source, real-time collaborative coding environment where developers can chat, write code together, and get instant AI assistance — all in one place.

## Features

- Real-time group chat rooms with roles & invite links
- Collaborative code editor (multi-user, live sync)
- AI assistant powered by Gemini — use `@ai` in chat
- Smart code snippets with syntax highlighting & AI verdict
- File attachments — images, PDFs, ZIPs, code files
- Google & GitHub OAuth

## Tech Stack

- **Frontend** — HTML, Tailwind CSS, jQuery
- **Backend** — Node.js, Express
- **Database** — Firebase Firestore
- **Auth** — Firebase Authentication (Google, GitHub)
- **AI** — Google Gemini 1.5 Flash
- **Editor** — CodeMirror 6

## Getting Started

```bash
# Clone the repo
git clone https://github.com/yourrepo/stackroom.git
cd stackroom

# Install dependencies
npm install

# Setup environment
cp .env.example .env
# Fill in your keys in .env

# Run dev server
npm run dev
```

Open `http://localhost:3000`

## Environment Variables

See `.env.example` for all required variables.

## Contributing

Pull requests are welcome. For major changes, open an issue first.

## License

[MIT](LICENSE)
