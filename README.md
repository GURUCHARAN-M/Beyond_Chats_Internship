# Deployed Link : https://gurucharan-beyondchats-intercom.netlify.app/

# 🧠 React Chat UI with AI Copilot

A modern chat interface built with **React**, featuring:
- Sidebar toolbar
- Inbox-style user list
- Real-time chat interface
- AI assistant panel (Copilot)
- Responsive and interactive layout

---

## 📁 Project Structure

```
src/
├── components/
│   ├── AiChat.jsx
│   ├── Chat.jsx
│   ├── Inbox.jsx
│   └── Toolbar.jsx
├── styles/
│   └── App.css
├── App.js
└── index.js
```

---

## 🚀 Features

- **Sidebar Navigation**  
  Interactive vertical toolbar with hover-expand.

- **Inbox**  
  Displays chat list and previews with selection highlighting.

- **Chat Panel**  
  Real-time chat with avatars and dynamic messages.

- **AI Copilot Panel**  
  A secondary assistant window with user/bot messages, integrated with the Gemini API.

- **Componentized Architecture**  
  Clean separation of UI and logic into reusable components.

---

## 🛠️ Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/react-chat-ui.git
   cd react-chat-ui
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Add your Gemini API key:

   Create a `.env` file in the root:

   ```
   GEMINI_API_KEY=your_api_key_here
   ```

4. Start the development server:

   ```bash
   npm start
   ```

---

## ⚙️ Tech Stack

- React
- HTML/CSS (custom styling)
- Google Generative AI (Gemini-pro)
- Modern JavaScript (ES6+)

---
