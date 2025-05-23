import React from 'react';

export default function AIChat({ aiChatMessages, aiInputValue, handleAiInputChange, handleAiSendMessage }) {
  return (
    <div className='ai-chat'>
      <div className='ai-chat-navbar'>
        <p className='ai-chat-navbar-text' id='ai-chat-navbar-text-active'>AI Copilot</p>
        <p className='ai-chat-navbar-text'>Details</p>
      </div>
      <hr />
      <div className='ai-chat-window'>
        {aiChatMessages.map((msg, index) =>
          msg.sender === 'user' ? (
            <div key={index} className='ai-chat-user'>
              <img className='ai-chat-user-profile' src='https://tse3.mm.bing.net/th?id=OIP.2i5UaEHaQM3PYAYXQyM1AAAAAA&pid=Api&P=0&h=180' alt='user' />
              <div className='ai-chat-user-text-flex'>
                <p className='ai-chat-user-name'>You</p>
                <p className='ai-chat-user-text'>{msg.text}</p>
              </div>
            </div>
          ) : (
            <div key={index} className='ai-chat-bot'>
              <img className='ai-chat-bot-profile' src='https://tse4.mm.bing.net/th?id=OIP.DxU4OIrugZvwL_9lUdwDbgHaHa&pid=Api&P=0&h=180' alt='bot' />
              <div className='ai-chat-bot-text-flex'>
                <p className='ai-chat-bot-name'>Fin</p>
                <p className='ai-chat-bot-msg'>{msg.text}</p>
              </div>
            </div>
          )
        )}
      </div>

      <form className='ai-chat-input' onSubmit={handleAiSendMessage}>
        <input type='text' className='ai-chat-input-text' placeholder='Ask Something !' value={aiInputValue} onChange={handleAiInputChange} autoComplete='off' />
      </form>
    </div>
  );
}
