"use client";

import { useState } from "react";

const servers = ["🎮", "🔥", "⚡", "🏆"];

const messages = [
  {
    name: "GameON",
    text: "Welcome to GameON Message! 🎮",
  },
  {
    name: "Admin",
    text: "Create a server and start chatting with your friends.",
  },
  {
    name: "GameON Bot",
    text: "Your gaming community starts here 🚀",
  },
];

export default function Home() {
  const [text, setText] = useState("");
  const [chatMessages, setChatMessages] = useState(messages);

  function sendMessage() {
    const value = text.trim();

    if (!value) return;

    setChatMessages([
      ...chatMessages,
      {
        name: "You",
        text: value,
      },
    ]);

    setText("");
  }

  return (
    <main className="gameon">
      <aside className="sidebar">
        <div className="logo">
          <span>G</span>ameON
        </div>

        <div className="section-title">Servers</div>

        {servers.map((server, index) => (
          <button
            className={`server ${index === 0 ? "active" : ""}`}
            key={index}
          >
            {server}
            <span className="server-name"> Server {index + 1}</span>
          </button>
        ))}

        <div className="section-title">Channels</div>

        <div className="channel active"># general</div>
        <div className="channel"># gaming</div>
        <div className="channel"># memes</div>
        <div className="channel"># announcements</div>
      </aside>

      <section className="main">
        <header className="topbar">
          <strong># general</strong>
        </header>

        <div className="chat">
          {chatMessages.map((message, index) => (
            <div className="message" key={index}>
              <div className="avatar">
                {message.name.charAt(0)}
              </div>

              <div>
                <div className="message-name">{message.name}</div>
                <div className="message-text">{message.text}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="composer">
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") sendMessage();
            }}
            placeholder="Message #general"
          />

          <button className="send" onClick={sendMessage}>
            Send
          </button>
        </div>
      </section>
    </main>
  );
}
