import React, { useState } from 'react'
import './styles/App.css';
import Toolbar from './components/Toolbar';
import Inbox from './components/Inbox';
import Chat from './components/Chat';
import AIChat from './components/AIChat';
import { GoogleGenerativeAI } from "@google/generative-ai";

export default function App() {
  
  const icons = [
    { src: 'https://tse4.mm.bing.net/th?id=OIP.DxU4OIrugZvwL_9lUdwDbgHaHa&pid=Api&P=0&h=180', title: 'AI Copilot' },
    { src: 'https://cdn-icons-png.flaticon.com/128/711/711155.png', title: 'Inbox', active: true },
    { src: 'https://cdn-icons-png.flaticon.com/128/5968/5968940.png', title: 'Message' },
  ];  
  const bottomIcons = [
    { src: 'https://cdn-icons-png.flaticon.com/128/2682/2682835.png', title: 'Current' },
    { src: 'https://cdn-icons-png.flaticon.com/128/3309/3309121.png', title: 'Data' },
    { src: 'https://cdn-icons-png.flaticon.com/128/2567/2567943.png', title: 'Stats' },
    { src: 'https://cdn-icons-png.flaticon.com/128/2118/2118701.png', title: 'People' },
  ];

  const [hovered, setHovered] = useState(false);
  const [selectedChat, setSelectedChat]=useState(1)
  const [chatMessages, setChatMessages]=useState({
    0: [
      { sender: 'user', text: 'Let me know when you’re free to talk about the project update.' },
      { sender: 'bot', text: 'Sure! How about tomorrow afternoon?' },
    ],
    1: [
      { sender: 'user', text: 'Hey, I already contacted you through whatsapp.' },
      { sender: 'bot', text: 'Got it! I will check and get back.' },
    ],
    2: [
      { sender: 'user', text: 'Sure, I’ll send over the files by tonight. Thanks!' },
      { sender: 'bot', text: 'Thanks! I will review them.' },
    ],
    3: [
      { sender: 'user', text: 'Please review the latest version of the proposal ASAP.' },
      { sender: 'bot', text: 'On it! Will update you soon.' },
    ],
  })
  const [inputValue, setInputValue] = useState('')
  const chatUsers = [
    {
      name: 'David',
      profile: 'https://tse3.mm.bing.net/th?id=OIP.y40ocT3BHCAf8BzCmtPx3gAAAA&pid=Api&P=0&h=180',
    },
    {
      name: 'Angelina',
      profile: 'https://tse3.mm.bing.net/th?id=OIP.2i5UaEHaQM3PYAYXQyM1AAAAAA&pid=Api&P=0&h=180',
    },
    {
      name: 'Sophia',
      profile: 'https://tse2.mm.bing.net/th?id=OIP.jryuUgIHWL-1FVD2ww8oWgHaHa&pid=Api&P=0&h=180',
    },
    {
      name: 'James',
      profile: 'https://tse1.mm.bing.net/th?id=OIP._LLkn0qvD0f1vKMKFLAkdQAAAA&pid=Api&P=0&h=180',
    },
  ]
  const [aiChatMessages, setAiChatMessages] = useState([
    { sender: 'bot', text: 'Hi, How can I help you today!!!' },
    { sender: 'user', text: 'Hey, I need you to summarise the paragraph that appears in the chat window.' },
    { sender: 'bot', text: 'Sure, Let\'s do this now!!!' },
  ])
  const [aiInputValue, setAiInputValue] = useState('')

  const handleChatSelect = (index) => {
    setSelectedChat(index)
  }  
  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }
  const handleSendMessage = (e) => {
    e.preventDefault()
    if (inputValue.trim() === '') return
    setChatMessages((prev) => {
      const newMessages = { ...prev }
      if (!newMessages[selectedChat]) newMessages[selectedChat] = []
      newMessages[selectedChat].push({ sender: 'user', text: inputValue })
      return newMessages
    })
    setInputValue('')
  }
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
  const sendToGemini = async (userInput) => {
    try {
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });
      const result = await model.generateContent(userInput);
      const response = await result.response;
      return response.text();
    } catch (err) {
      console.error("Gemini API error:", err);
      return "⚠️ Sorry, I couldn't get a response from Gemini.";
    }
  };
  const handleAiInputChange = (e) => {
    setAiInputValue(e.target.value)
  }
  const handleAiSendMessage = async (e) => {
    e.preventDefault();
    if (aiInputValue.trim() === '') return;
    const userMessage = aiInputValue;
    setAiChatMessages((prev) => [...prev, { sender: 'user', text: userMessage }]);
    setAiInputValue('');
    const botResponse = await sendToGemini(userMessage);
    setAiChatMessages((prev) => [...prev, { sender: 'bot', text: botResponse }]);
  };

  return (
    <div className='main-div'>
      <Toolbar icons={icons} bottomIcons={bottomIcons} hovered={hovered} setHovered={setHovered} />
      <Inbox chatUsers={chatUsers} chatMessages={chatMessages} selectedChat={selectedChat} handleChatSelect={handleChatSelect} />
      <Chat chatUsers={chatUsers} selectedChat={selectedChat} chatMessages={chatMessages} inputValue={inputValue} handleInputChange={handleInputChange} handleSendMessage={handleSendMessage} />
      <AIChat aiChatMessages={aiChatMessages} aiInputValue={aiInputValue} handleAiInputChange={handleAiInputChange} handleAiSendMessage={handleAiSendMessage} />
    </div>
  )
}
