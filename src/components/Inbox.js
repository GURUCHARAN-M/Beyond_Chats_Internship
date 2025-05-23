import React from 'react';

export default function Inbox({ chatUsers, chatMessages, selectedChat, handleChatSelect }) {
  return (
    <div className='inbox'>
      <h1 className='inbox-h1'>Your Inbox</h1>
      <div className='inbox-filter'>
        <h3>4 Open ˅</h3>
        <h3>Newest ˅</h3>
      </div>
      {chatUsers.map((user, index) => (
        <div
          key={index}
          className={`inbox-chat ${selectedChat === index ? 'inbox-chat-active' : ''}`}
          onClick={() => handleChatSelect(index)}
        >
          <img className='inbox-profile' src={user.profile} alt={user.name} />
          <div className='inbox-chat-msg'>
            <p className={`inbox-text1 ${selectedChat === index ? 'inbox-text1-active' : ''}`}>{user.name}</p>
            <p className={`inbox-text2 ${selectedChat === index ? 'inbox-text2-active' : ''}`}>
              {chatMessages[index]?.length
                ? chatMessages[index][chatMessages[index].length - 1].text
                : ''}
            </p>
          </div>
          <div><br /><p className={`inbox-chat-time ${selectedChat === index ? 'inbox-chat-time-active' : ''}`}>10m</p></div>
        </div>
      ))}
    </div>
  );
}
