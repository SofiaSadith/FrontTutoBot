import React, { useState, useEffect, useRef } from 'react';
import './Chatbot.css';
import bot from '../media/bot.png';
import chatbot from '../media/chat-bot.png';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const Messages = [
    {
        id: 'abca',
        text: 'Hi',
        state: 'sent'
    },
    {
        id: 'abcb',
        text: 'Hey there',
        state: 'received'
    },
    {
        id: 'abcc',
        text: 'How are you?',
        state: 'sent'
    },
    {
        id: 'abcd',
        text: 'I\'m fine',
        state: 'received'
    },
    {
        id: 'abce',
        text: 'Nice',
        state: 'sent'
    },
    {
        id: 'abcf',
        text: 'What are you?',
        state: 'received'
    },
    {
        id: 'abcg',
        text: 'A bot? nafefewo efnwfnwepfn wnfwenwpn afneoinwp enwangvpwa',
        state: 'received'
    }
]

function Chatbot() {
    const [inactive, setInactive] = useState(true);
    
    //const [messages, setMessages] = useState([])
    /*useEffect(() => {
        db.collection('messages').orderBy('createdAt').limit(50).onSnapshot(snapshot => {
            setMessages(snapshot.docs.map(doc => doc.data()))
        })
    }, [])*/
    return (
        <div>
        {inactive? (
            <div className="bot">
                <img onClick={() => setInactive(!inactive)} src={bot}/>
            </div>
        ) : (
        <div className="chat-content">
            <div className="chat-header">
                <img src={chatbot} alt="chatbot"/>
                <h4>Botsyto</h4>
                <div onClick={() => setInactive(!inactive)} className="cerrar-chat" >
                    <FontAwesomeIcon  icon={faTimes} />
                </div>
            </div>
            <div className="msgs">
                {Messages.map((msg) => (
                    <div key={msg.id} className={`msg ${msg.state}`}>
                        {/*<img src={photoURL} alt="" />*/}
                        {msg.text}
                    </div>
                ))}
            </div>
            <div className="chat-footer">
                <div className="sendNewMessage">
                    <input
                        type="text"
                        placeholder="Escribir mensaje aquí"
                    />
                </div>
                <button className="btnSendMsg" >
                    <div id="triangulo"></div>
                </button>
            </div>
        </div>
        )}
        </div>
    )
}

export default Chatbot;

