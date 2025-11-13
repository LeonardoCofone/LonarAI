# 🌐 Lonar – Your Intelligent Personal Assistant

Lonar is both a website and a PWA app that brings together **artificial intelligence, productivity, and spirituality**.  
The goal is to offer a **complete personal assistant**, capable of managing everything you need daily — agenda, tasks, emails, documents, reminders, and even a morning spiritual briefing — all in one unified platform.

---

## ✨ Vision

The idea behind Lonar is simple:  
> “One single assistant that knows you, your time, your work, and your soul.”

Lonar is not just another AI that answers questions — it’s a **digital companion** that:
- organizes your day and appointments;  
- manages calendars, tasks, documents, and emails;  
- communicates in multiple languages with a natural tone;  
- starts your day with an **inspired and motivating morning briefing**.

---

## 🧩 Project Structure

SITE/  
├── backend/  
│   ├── server.js                # Node.js server (API + agents orchestration)  
│   ├── refreshTokens.js         # Regenerates refresh tokens  
│   ├── users.csv                # Users + tokens DB  
│   ├── .env                     # Environment variables and credentials  
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
│   │   └── conversation-memory.js # Chat memory (e.g., 4-message context)  
│  
│   ├── tts/  
│   │   └── speech-service.js    # TTS/STT (ElevenLabs + Groq)  
│  
│   └── utils/  
│       ├── model-selector.js    # Chooses best AI model for each task  
│       ├── userDataService.js   # Loads user data from backend/data  
│       └── user-utils.js        # Reads users.csv  
│  
├── pwa/  
│   ├── index.html               # Dashboard (chat + calendar + tasks + settings)  
│   ├── app.js                   # Frontend logic (UI, sync, API, agents)  
│   ├── app.css                  # UI/UX styles  
│   ├── manifest.json            # PWA configuration  
│   ├── sw.js                    # Service Worker (cache, offline support)  
│   └── icons/  
│       ├── icon-192.png  
│       └── icon-512.png  
│  
├── login.html  
├── existing.html  
├── onboarding.html  
├── gia_registrato.html  
├── auth.js                      # Login/Signup logic  
├── style.css                    # Public pages styling  
├── script.js                    # Landing/login scripts  
├── index.html                   # Landing page  
├── ecosystem.config.js          # PM2 configuration  
└── README.md                    # Full documentation  

---

## 🧠 What Lonar Can Do

### 🗓️ Personal organization
Lonar automatically syncs your calendars, tasks, and reminders from Google or your local system.  
You can ask: “What do I have to do today?” or “Add a meeting tomorrow at 3 PM.”

### 💌 Smart email
Manages your Gmail inbox, reads important emails, and can write or reply in a guided way.

### 📄 Documents and files
Accesses your Google Drive files or creates new ones (docs, sheets, notes).

### 💬 Natural conversation
Replies in multiple languages (Italian, English, Spanish, French, German, Portuguese, Russian, Japanese, Chinese, Arabic, etc.).  
Automatically detects the language you write in.

### ☀️ Daily briefing
Every morning, Lonar generates a personalized summary with the **weather, agenda, news**, and all your tasks.

### 💰 Finance and productivity
Tracks expenses, projects, and completed tasks, also generating summary reports.

---

## 🧩 General Workflow

1. **Login or register** (Google OAuth supported).  
2. The backend creates a personal file in the `data/` folder with your info.  
3. Once authenticated, you access the **main PWA dashboard**.  
4. From there, you can chat with Lonar, check your schedule, and receive notifications and briefings.

---

## 🛠️ Core Technologies

- **Frontend:** HTML, CSS, JavaScript (PWA)  
- **Backend:** Node.js + Express  
- **Database:** Local JSON (one file per user)  
- **Authentication:** Google OAuth 2.0  
- **Voice:** ElevenLabs + Groq API (TTS/STT)  
- **AI Models:** LLaMA / GPT / Gemini / Cohere (dynamic model selection)  
- **Deployment:** PM2 (ecosystem.config.js)  

---

## 🔒 Security & Privacy

All data is **stored locally** on the server in the `backend/data` folder.  
Nothing is shared with **any third parties** — each user has a **separate, encrypted file**, updated only by Lonar.

---

## ❤️ Author

**Leonardo Cofone**  
Student and developer passionate about **Artificial Intelligence**, programming, and Christian faith.  
Lonar was born from the desire to build an AI that **helps people in both their practical and spiritual life**, combining **technology and humanity**.

> “AI, not magic.”  
> — *Leonardo Cofone*
