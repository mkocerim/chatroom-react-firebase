import { useRef, useState } from "react";
import "../src/styles/style.css";

import Auth from "./components/Auth";
import Chat from "./components/Chat";
function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("token"));
  const [room, setRoom] = useState(null);
  console.log(room);
  const inputRef = useRef(null);
  if (!isAuth) {
    return (
      <div className="container">
        <Auth setIsAuth={setIsAuth} />
      </div>
    );
  }
  return (
    <div className="container">
      {room ? (
        <Chat />
      ) : (
        <div className="room-container">
          <h1>Chat Odasi</h1>
          <label>Hangi Odaya Gireceksiniz</label>
          <input ref={inputRef} type={"text"} />
          <button
            onClick={() => {
              setRoom(inputRef.current.value);
            }}
          >
            Odaya Gir
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
