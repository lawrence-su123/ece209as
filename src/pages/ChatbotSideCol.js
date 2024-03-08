import React, { useState, useRef, useEffect } from 'react';
import { getChatGPTResponse } from './ChatGPT';
import './ChatbotSideCol.module.css';

function ChatbotSideCol() {
  const [userMessage, setUserMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const chatBoxRef = useRef(null);

  const handleSendMessage = async () => {
    if (!userMessage) return;

    const newChatHistory = [...chatHistory, { role: 'user', content: userMessage }];
    setChatHistory(newChatHistory);

    try {
      // Assuming your getChatGPTResponse function allows additional parameters
      const response = await getChatGPTResponse(newChatHistory, { temperature: 0.3, max_tokens: 100 });


      const systemMessage = { role: 'system', content: 'You are a personal journaling assistant. Give helpful suggestions about how to augment a journal entry based on their thoughts, emotions, and experiences. Provided a prompt give suggestions to augment that prompt. Make sure your response is less than 2 sentances long.' };
      const newChatHistoryWithResponse = [...newChatHistory, { role: 'assistant', content: response }, systemMessage];

      setChatHistory(newChatHistoryWithResponse);
    } catch (error) {
      console.error('Error getting response:', error);
    }

    setUserMessage('');
  };

  useEffect(() => {
    // Scroll to the bottom of the chat box when new messages are added
    chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
  }, [chatHistory]);

  return (
    <div className="ChatbotComponent">
      <div ref={chatBoxRef} className="ChatBox">
      {chatHistory
          .filter((message) => message.role !== 'system') // Exclude "system" messages
          .map((message, index) => (
            <div key={index} className={`Message ${message.role}`}>
              {message.content}
            </div>
        ))}
      </div>
      <div className="InputBox">
        <input
          type="text"
          value={userMessage}
          onChange={(e) => setUserMessage(e.target.value)}
          placeholder="Type a message..."
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
}

export default ChatbotSideCol;