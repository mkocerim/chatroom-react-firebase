import React, { useEffect, useState } from "react";
import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  where,
} from "firebase/firestore";
import { auth, db } from "../firebase/FirebaseConfig";

const Chat = ({ room }) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const messagesRef = collection(db, "messages");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(message);
    if (!message) return;

    await addDoc(messagesRef, {
      text: message,
      createdAt: serverTimestamp(),
      user: auth.currentUser.displayName,
      room: room,
    });
    setMessage("");
  };

  useEffect(() => {
    const queryMessage = query(
      messagesRef,
      where("room", "==", room),
      orderBy("createdAt")
    );

    onSnapshot(queryMessage, (snapshoot) => {
      let commingMessages = [];

      snapshoot.forEach((doc) => {
        commingMessages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(commingMessages);
    });
  }, []);

  return (
    <div className="chat">
      <header>
        <p>{auth.currentUser.displayName}</p>
        <p>{room}</p>
        <a href="/">New Room</a>
      </header>
      <form action="" onSubmit={handleSubmit}>
        <input
          value={message}
          type="text"
          placeholder="mesajinizi giriniz"
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
      <div className="messages">
        {messages.map((message) => (
          <div key={message.id}>
            {auth.currentUser.displayName === message.user ? (
              <div key={message.id} className="user-message">
                <span className="text">{message.text}</span>
              </div>
            ) : (
              <div key={message.id} className="message">
                <span className="user">{message.user} : </span>
                <span className="text">{message.text}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chat;
