import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";

const Api_Url =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${import.meta.env.VITE_API_KEY}";

function Arogya() {
  const [messages, setMessages] = useState([
    { sender: "ai", text: "Hello, how can I help you!", image: null },
  ]);
  const [input, setInput] = useState("");
  const [file, setFile] = useState(null);
  const chatEndRef = useRef(null);
  const fileInputRef = useRef(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSend = async () => {
    if (!input.trim() && !file) return;

    // Add user message
    const userMsg = { sender: "user", text: input, image: file };
    setMessages((prev) => [...prev, userMsg]);
    scrollToBottom();
    setInput("");

    // Show AI loading
    const loadingMsg = { sender: "ai", text: "⏳ Thinking...", image: null };
    setMessages((prev) => [...prev, loadingMsg]);
    scrollToBottom();

    // Prepare request
 const body = {
  contents: [
    {
      role: "user",
      parts: [
        { text: `You are Arogya, a helpful Leaflet chatbot. Answer in 2 sentences maximum, plain text, no formatting.` },
        { text: input },
        ...(file ? [{ inline_data: file }] : []),
      ],
    },
  ],
};


    try {
      const response = await fetch(Api_Url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const data = await response.json();
      const aiText = data.candidates[0].content.parts[0].text;

      // Update AI response
      setMessages((prev) => {
        const msgs = [...prev];
        msgs[msgs.length - 1] = { sender: "ai", text: aiText, image: null };
        return msgs;
      });
      scrollToBottom();
    } catch (err) {
      console.error(err);
      // Optionally update AI message with error
      setMessages((prev) => {
        const msgs = [...prev];
        msgs[msgs.length - 1] = { sender: "ai", text: "❌ Something went wrong.", image: null };
        return msgs;
      });
    } finally {
      setFile(null);
    }
  };

  const handleFileChange = (e) => {
    const uploaded = e.target.files[0];
    if (!uploaded) return;

    const reader = new FileReader();
    reader.onload = (ev) => {
      const base64String = ev.target.result.split(",")[1];
      setFile({ mime_type: uploaded.type, data: base64String });
    };
    reader.readAsDataURL(uploaded);
  };

  return (
    <div className="main-layout">
      <div className="content">
        <div className="chat-container">
          {messages.map((msg, i) => (
            <div key={i} className={msg.sender === "user" ? "user-chat-box" : "ai-chat-box"}>
              <img
                src={msg.sender === "user" ? "/react-vite-files/user.png" : "/react-vite-files/aiimage-removebg-preview.png"}
                alt={msg.sender}
                style={{ width: msg.sender === "user" ? "45px" : "50px" }}
              />
              <div className={`${msg.sender}-chat-area`}>
                {msg.text}
                {msg.image && (
                  <img
                    src={`data:${msg.image.mime_type};base64,${msg.image.data}`}
                    className="chooseimg"
                    alt="uploaded"
                  />
                )}
              </div>
            </div>
          ))}
          <div ref={chatEndRef}></div>
        </div>

        {/* Prompt area */}
        <div id="prompt-area">
          <input
            type="text"
            placeholder="message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />

          <button onClick={() => fileInputRef.current.click()}>
            <img src="/react-vite-files/image.svg" alt="Upload" />
          </button>
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={handleFileChange}
          />

          <button onClick={handleSend}>
            <img src="/react-vite-files/submit.svg" alt="Send" />
          </button>

         
        </div>
      </div>
    </div>
    
  );
}

export default Arogya;
