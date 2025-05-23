import React from 'react';

export default function Chat({
  chatUsers,
  selectedChat,
  chatMessages,
  inputValue,
  handleInputChange,
  handleSendMessage,
}) {
  return (
    <div className='chat'>
      <div className='chat-navbar'>
        <div className='chat-navbar-left'>
          <h2 className='chat-navbar-left-text'>{chatUsers[selectedChat].name}</h2>
        </div>
        <div className='chat-navbar-right'>
          <img className='chat-navbar-icon' src='https://cdn-icons-png.flaticon.com/128/1828/1828970.png' alt='img' />
          <div className='chat-navbar-right2'><img className='chat-navbar-icon' src='https://cdn-icons-png.flaticon.com/128/1828/1828805.png' alt='img' /></div>
          <div className='chat-navbar-right2'><img className='chat-navbar-icon' src='https://cdn-icons-png.flaticon.com/128/483/483947.png' alt='img' /><p className='chat-navbar-text'>Call</p></div>
          <div className='chat-navbar-right2'><img className='chat-navbar-icon' src='https://cdn-icons-png.flaticon.com/128/9732/9732900.png' alt='img' /><p className='chat-navbar-text'>Snooze</p></div>
          <div className='chat-navbar-right2-close'><img className='chat-navbar-icon' src='https://cdn-icons-png.flaticon.com/128/8299/8299973.png' alt='img' /><p className='chat-navbar-text'>Close</p></div>
        </div>
      </div>
      <hr className='chat-hr' />

      <div className='chat-window'>
        {(chatMessages[selectedChat] || []).map((msg, i) =>
          msg.sender === 'user' ? (
            <div key={i} className='chat-user fade-in'>
              <p className='chat-user-text'>{msg.text}</p>
              <img className='chat-user-profile' src={chatUsers[selectedChat].profile} alt='user profile' />
            </div>
          ) : (
            <div key={i} className='chat-bot fade-in'>
              <img className='chat-bot-profile' src='https://tse4.mm.bing.net/th?id=OIP.DxU4OIrugZvwL_9lUdwDbgHaHa&pid=Api&P=0&h=180' alt='bot profile' />
              <p className='chat-bot-text'>{msg.text}</p>
            </div>
          )
        )}
      </div>

      <form className='chat-input' onSubmit={handleSendMessage}>
        <button type='submit' className='chat-input-plus' title="Send Message">+</button>
        <input type='text' className='chat-input-text' placeholder='Send Message' value={inputValue} onChange={handleInputChange} autoComplete="off" />
      </form>
    </div>
  );
}
