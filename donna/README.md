# Donna — Executive Coach

React + TypeScript + Vite app for coaching conversations with "Donna", powered by Claude.

## Setup
```bash
cp .env.example .env.local   # then set VITE_ANTHROPIC_API_KEY
npm install
npm run dev
```

> The API key is used from the browser (`dangerouslyAllowBrowser`), so it is visible to anyone who loads the page. Use this for local prototyping only; put a server-side proxy in front of the API before deploying.
