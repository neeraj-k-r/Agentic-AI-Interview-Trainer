# Agentic AI Technical Interviewer

> An advanced, interactive technical interview preparation platform powered by **Langflow** and **IBM Granite**. This application simulates a live technical interview environment, evaluating candidate responses dynamically and providing constructive feedback.

---

## 🚀 Overview

The **Agentic AI Technical Interviewer** is designed to streamline the technical screening process. Using a state-of-the-art LLM (**IBM Granite** via a localized **Langflow** flow), it acts as an intelligent interviewer that:
1. Initiates the interview session.
2. Formulates tailored technical questions based on the candidate's responses.
3. Evaluates responses in real-time.
4. Generates an interview summary and scorecard.

---

## 🛠️ Architecture & Tech Stack

This project is built using the MERN stack architecture with an AI orchestration layer:

- **Frontend**: React.js for a clean, conversational chat interface.
- **Backend**: Express.js/Node.js acting as a secure gateway to route traffic and protect API credentials.
- **Orchestration**: Langflow for visual flow construction and multi-step agentic prompts.
- **LLM**: IBM Granite for response reasoning, evaluation, and feedback generation.

### System Workflow
```
[React Frontend] <---> [Express Backend] <---> [Langflow Engine] <---> [IBM Granite LLM]
```

---

## 📂 Project Structure

```text
├── backend/                                                     # Express backend API gateway
│   ├── server.js                                                # Express server configuration
│   ├── package.json                                             # Backend dependencies & scripts
│   └── .env                                                     # Local environment variables (Gitignored)
├── interview-agent-frontend/                                    # React frontend application
│   ├── src/                                                     # React components & styles
│   │   ├── App.js                                               # Main interview chat interface
│   │   └── index.js                                             # Frontend entry point
│   └── package.json                                             # Frontend dependencies
├── app.json                                                     # Exported Langflow agent flow JSON
├── SB4UniversityEngagements_AICTE_Problem Statements_2026.pdf  # Project problem statement
├── 8 Project Submission Template for EduentFoundation_IBMUniversityEngagement.pptx # Project presentation slide deck
├── .gitignore                                                   # Git exclusion rules (safeguarding API keys)
└── README.md                                                    # Main documentation (this file)
```

---

## ⚙️ Configuration & Setup

### 1. Prerequisites
- **Node.js** (v16+)
- **NPM** (v8+)
- **Langflow** (Running locally or in a cloud instance)

### 2. Environment Setup (Backend)
Navigate to the `backend/` folder and create a `.env` file containing the following variables:

```env
PORT=5000
LANGFLOW_BASE_URL=http://127.0.0.1:7860
LANGFLOW_FLOW_ID=5f0a9c53-803c-4e86-8b37-a8b7b3196d40

```



---

## 🏃 Run Instructions

### 1. Start the Backend Server
```bash
cd backend
npm install
npm start
```
The server will start running on [http://localhost:5000](http://localhost:5000).

### 2. Start the Frontend Application
```bash
cd interview-agent-frontend
npm install
npm start
```
The application will launch in your browser at [http://localhost:3000](http://localhost:3000).

---

## 🛡️ Security Note
This project contains a root `.gitignore` file that explicitly blocks the upload of all local `.env` files and `node_modules` folders to Git. Sensitive tokens like Watsonx / Langflow keys must only be managed locally in your `.env` file.
