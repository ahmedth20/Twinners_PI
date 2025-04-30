import React, { useState, useRef, useEffect } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
const genAI = new GoogleGenerativeAI("AIzaSyDET__Jc1chLV_QOHtXOgMUKehg86QoQI8");

const GeminiChatbot = () => {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Bonjour ! Je suis votre assistant médical. Posez-moi vos questions.👋" }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);
    setLoading(true);

    try {
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });
      const chat = model.startChat({
        history: messages
          .filter((msg) => msg.sender !== "bot")
          .map((msg) => ({
            role: msg.sender === "user" ? "user" : "model",
            parts: [{ text: msg.text }]
          }))
      });

      const result = await chat.sendMessage(input);
      const response = result.response.text();
      const botMsg = { sender: "bot", text: response };
      setMessages((prev) => [...prev, botMsg]);
    } catch (error) {
      const errMsg = { sender: "bot", text: "❌ Erreur : " + (error.message || "inconnue") };
      setMessages((prev) => [...prev, errMsg]);
    }

    setInput("");
    setLoading(false);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>🩺 Gemini - Assistant Médical</h2>
      <div style={styles.chatBox}>
        {messages.map((msg, i) => (
          <div
            key={i}
            style={{
              ...styles.messageContainer,
              justifyContent: msg.sender === "user" ? "flex-end" : "flex-start"
            }}
          >
            <div
              style={{
                ...styles.messageBubble,
                backgroundColor: msg.sender === "user" ? "#4a90e2" : "#e5e5ea",
                color: msg.sender === "user" ? "#fff" : "#000",
                borderBottomRightRadius: msg.sender === "user" ? "0" : "15px",
                borderBottomLeftRadius: msg.sender === "user" ? "15px" : "0"
              }}
            >
              {msg.text}
            </div>
          </div>
        ))}
        {loading && (
          <div style={{ textAlign: "center", marginTop: 10 }}>
            ⏳ Le bot réfléchit...
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div style={styles.inputContainer}>
        <input
          style={styles.input}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Pose ta question ici..."
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button onClick={handleSend} style={styles.sendButton}>
          ➤
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "700px",
    margin: "30px auto",
    padding: "20px",
    fontFamily: "'Segoe UI', sans-serif",
    borderRadius: "15px",
    boxShadow: "0 0 20px rgba(0,0,0,0.1)",
    backgroundColor: "#f9f9f9"
  },
  header: {
    textAlign: "center",
    marginBottom: "20px"
  },
  chatBox: {
    border: "1px solid #ddd",
    borderRadius: "10px",
    padding: "15px",
    backgroundColor: "#fff",
    height: "400px",
    overflowY: "auto",
    display: "flex",
    flexDirection: "column"
  },
  messageContainer: {
    display: "flex",
    margin: "5px 0"
  },
  messageBubble: {
    maxWidth: "75%",
    padding: "10px 15px",
    borderRadius: "15px",
    lineHeight: "1.5",
    wordWrap: "break-word",
    transition: "all 0.3s ease"
  },
  inputContainer: {
    display: "flex",
    marginTop: "15px"
  },
  input: {
    flex: 1,
    padding: "12px 15px",
    borderRadius: "30px",
    border: "1px solid #ccc",
    fontSize: "16px"
  },
  sendButton: {
    marginLeft: "10px",
    backgroundColor: "#4a90e2",
    border: "none",
    borderRadius: "50%",
    width: "45px",
    height: "45px",
    color: "#fff",
    fontSize: "18px",
    cursor: "pointer",
    transition: "background 0.3s ease"
  }
};

export default GeminiChatbot;
