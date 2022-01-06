import React, { useState, useEffect, createRef } from "react";
import "./Chatbot.css";
import bot from "../media/bot.png";
import chatbot from "../media/chat-bot.png";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const URL = "https://botsyto.herokuapp.com/nlp";

const chatItms = [
];

function Chatbot() {
  let messagesEndRef = createRef(null);
  const [inactive, setInactive] = useState(true);
  const [state, setState] = useState({ chat: chatItms, msg: "" });

  //const [messages, setMessages] = useState([])
  /*useEffect(() => {
        db.collection('messages').orderBy('createdAt').limit(50).onSnapshot(snapshot => {
            setMessages(snapshot.docs.map(doc => doc.data()))
        })
    }, [])*/

  useEffect(() => {
    scrollToBottom();
  }, [state.chat]);

  let scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  let handleKeyDown = (event) => {
    if (event.key === "Enter") {
      if (state.msg !== "") {
        dialogProcess();
      }
    }
  };

  let onStateChange = (e) => {
    setState({ ...state, msg: e.target.value });
  };

  let executeQuery = async () => {
    let payload = {
      query: state.msg,
    };
    const response = await fetch(URL, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true",
      },
      body: JSON.stringify(payload),
    });
    return response.json();
  };

  let dialogProcess = () => {
    if (state.msg !== "") {
      chatItms.push({
        id: chatItms.length + 1,
        text: state.msg,
        state: "sent",
      });
      setState({ msg: "", chat: [...chatItms] });

      executeQuery()
        .then((response) => {
          chatItms.push({
            id: chatItms.length + 1,
            text: response.data,
            state: "received",
          });
          setState({ msg: "", chat: [...chatItms] });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div>
      {inactive ? (
        <div className="bot">
          <img onClick={() => setInactive(!inactive)} src={bot} />
        </div>
      ) : (
        <div className="chat-content">
          <div className="chat-header">
            <img src={chatbot} alt="chatbot" />
            <h4>Botsyto</h4>
            <div onClick={() => setInactive(!inactive)} className="cerrar-chat">
              <FontAwesomeIcon icon={faTimes} />
            </div>
          </div>
          <div className="msgs">
            {chatItms.map((item) => (
              <div key={item.id} className={`msg ${item.state}`}>
                {/*<img src={photoURL} alt="" />*/}
                {item.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <div className="chat-footer">
            <div className="sendNewMessage">
              <input
                type="text"
                placeholder="Escribir mensaje aquí"
                onChange={onStateChange}
                onKeyDown={handleKeyDown}
                value={state.msg}
              />
            </div>
            <button className="btnSendMsg" onClick={dialogProcess}>
              <div id="triangulo" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Chatbot;
