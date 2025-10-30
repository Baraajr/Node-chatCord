# 💬 Node‑chatCord

A real-time chat application built with **Node.js**, **Express**, and **Socket.io**. Users can join chat rooms and communicate instantly, showcasing full-stack development with live updates and room-based messaging.

---

## 🚀 Features

- **Socket.io-powered Real-Time Chat**
  - Connect multiple users in real time
  - Room support: join specific chat rooms
  - Broadcast messages to room participants

- **Express Server**
  - Serves frontend assets and WebSocket client
  - REST endpoint support (e.g., greeting routes)

- **Vanilla Frontend**
  - HTML/CSS/JS UI for sending and receiving messages
  - Interface indicates new user joins and departures

---

## 🧭 Tech Stack

| Layer      | Technology               |
|------------|--------------------------|
| Backend    | Node.js, Express         |
| Real-Time  | Socket.io                |
| Frontend   | HTML, CSS, Vanilla JS    |
| Dev Tools  | Nodemon (development)    |

---

## 📂 Project Structure

```text
chatcord/
├── public/
│   ├── css/            # Stylesheets
│   ├── js/             # Frontend JavaScript
│   └── index.html      # Main app page
├── utils/
│   └── formatMessage.js # Message formatting helper
├── server.js           # Express + Socket.io setup
├── package.json        # Dependencies & scripts
└── .gitignore          # Ignored files
```

---

## ⚙️ Installation & Usage

```bash
# Install dependencies
npm install

# Run in development mode (with auto-reload)
npm run dev

# Or run normally
npm start
```

## 🧩 Customization Ideas
- Add user authentication (e.g., JWT, OAuth)
- Persist chat history (e.g., MongoDB, Redis)
- Enhance UI/UX: emojis, markdown, file sharing
- Deploy on a scalable platform (e.g., Heroku, AWS)

---

## 📫 Author

**Ahmed Baraa Ali Khattab**  
📧 [ahmedbaraa009@gmail.com](mailto:ahmedbaraa009@gmail.com)  
🔗 [LinkedIn](https://www.linkedin.com/in/ahmed-baraa-b94b7b284)  
🐙 [GitHub](https://github.com/Baraajr)


