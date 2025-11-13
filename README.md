# 🌐 Lonar – Your Intelligent Personal Assistant

You can try Lonar at [https://leonardocofone.github.io/LonarAI/](https://leonardocofone.github.io/LonarAI/)  
Lonar is a **website and PWA** that combines artificial intelligence and productivity tools.  
Its goal is to provide a **complete personal assistant** capable of managing daily tasks, emails, calendars, documents, reminders, and notifications — all in one unified platform.

---

## ✨ Vision

Lonar is designed to be a **smart digital assistant** that:

- Organizes your day and appointments  
- Manages calendars, tasks, documents, and emails  
- Communicates naturally in multiple languages  
- Provides a personalized daily briefing with agenda, news, weather, and tasks  

The focus is on helping users **stay organized, productive, and informed**.

---

## 🧩 Project Structure

SITO/
├── backend/
│   ├── server.js                # Node.js server (API + agents orchestration)
│   ├── refreshTokens.js         # Regenerates refresh tokens
│   ├── users.csv                # Users + tokens DB
│   ├── .env                     # Env vars and credentials
│   ├── package.json             # Backend dependencies
│
│   ├── data/
│   │   └── user@gmail.com.json  # User data (tasks, events, settings, messages)
│
│   ├── agents/
│   │   ├── routing-agent.js     # Selects which tool/AI to use
│   │   ├── jarvis-agent.js      # Executes actions (main agent)
│   │   └── daily-briefing-agent.js # Morning briefing / spiritual agenda
│
│   ├── tools/
│   │   ├── calendar-tool.js     # Calendar API
│   │   ├── tasks-tool.js        # Local task manager
│   │   ├── gmail-tool.js        # Gmail API
│   │   ├── documents-tool.js    # Local docs manager
│   │   ├── finance-tool.js      # Finance tracker
│   │   ├── sheets-tool.js       # Google Sheets API
│   │   ├── drive-tool.js        # Google Drive API
│   │   ├── news-tool.js         # News API
│   │   ├── weather-tool.js      # Weather API
│   │   ├── index.js             # Exports all tools
│   │   └── contacts-tool.js     # Google Contacts API
│
│   ├── prompts/
│   │   ├── routing-prompt.js
│   │   ├── jarvis-prompt.js
│   │   └── briefing-prompt.js
│
│   ├── memory/
│   │   └── conversation-memory.js # Chat memory (e.g. 4-msg context)
│
│   ├── tts/
│   │   └── speech-service.js    # TTS/STT (ElevenLabs + Groq)
│
│   └── utils/
│       ├── model-selector.js    # Chooses best AI model per task
│       ├── userDataService.js   # Loads user data from backend/data
│       └── user-utils.js        # Reads users.csv
│
├── pwa/
│   ├── index.html               # Dashboard (chat + calendar + tasks + settings)
│   ├── app.js                   # Frontend logic (UI, sync, API, agents)
│   ├── app.css                  # UI/UX styles
│   ├── manifest.json            # PWA config
│   ├── sw.js                    # Service Worker (cache, offline)
│   └── icons/
│       ├── icon-192.png
│       └── icon-512.png
│
├── login.html
├── existing.html
├── onboarding.html
├── onboarding.css
├── onboarding.js
├── gia_registrato.html
├── PrivacyPolicy.html           # Policy for burocracy
├── auth.js                      # Login/Signup logic
├── style.css                    # Public pages style
├── script.js                    # Landing/login scripts
├── index.html                   # Landing page
├── ecosystem.config.js           # PM2 config
└── README.md

---

## 🧠 Features

### 🗓️ Personal organization
Syncs calendars, tasks, and reminders automatically.  
Commands like: “What’s on my schedule today?” or “Add meeting tomorrow at 3 PM.”

### 💌 Smart email
Manages Gmail inbox, prioritizes emails, drafts, and replies automatically.

### 📄 Documents and files
Access and manage Google Drive files or create new ones (docs, sheets, notes).

### 💬 Natural conversation
Responds in multiple languages (Italian, English, Spanish, French, German, Portuguese, Russian, Japanese, Chinese, Arabic).  
Automatically detects the user’s input language.

### ☀️ Daily briefing
Generates a daily summary with agenda, tasks, weather, and news.

### 💰 Finance & productivity
Tracks projects, completed tasks, and expenses. Generates summary reports.

---

## 🧩 Workflow

1. **Login or register** via Google OAuth  
2. Backend creates a personal file in `data/` with user info  
3. Access the **main PWA dashboard**  
4. Chat with Lonar, check schedule, and receive notifications

---

## 🛠️ Technologies

- **Frontend:** HTML, CSS, JavaScript (PWA)  
- **Backend:** Node.js + Express  
- **Database:** Local JSON files  
- **Authentication:** Google OAuth 2.0  
- **Voice:** ElevenLabs + Groq API (TTS/STT)  
- **AI Models:** LLaMA / GPT / Gemini / Cohere (dynamic selection)  
- **Deployment:** PM2  

---

## 🔒 Security & Privacy

All user data is **stored locally** in `backend/data`.  
Each user has a **separate, encrypted file**.  
No data is shared with third parties.

---

## 👤 Author

**Leonardo Cofone**  
AI developer and student, passionate about building **practical, high-quality AI solutions**.

> “AI, not magic.”  
> — *Leonardo Cofone*