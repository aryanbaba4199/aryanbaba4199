import React, { useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import { Box, Paper, TextField, IconButton, Typography, Avatar } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import Nav from '@/layout/navbar/Navbar';
import Footer from '@/layout/footer/Footer';
import MyImage from "@/public/images/mydp.jpg";
import StarsCanvas from '@/components/starcanvas';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const gptAnswer = async () => {
    try {
      const { data } = await axios.post(`/api/chatgpt?query=${input}`);
      console.log("GPT ", data);
      if (!data.success) {
        alert(data.message);
        return;
      }
      const botMessage = { text: data.answer, user: false };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      console.log(error);
      alert(error?.response?.data?.message || error);
    }
  };

  const handleSend = async () => {
    if (input.trim()) {
      const userMessage = { text: input, user: true };
      setMessages([...messages, userMessage]);
      setInput('');

      try {
        const response = await fetch('https://your-api-endpoint.com/chatbot', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ message: input }),
        });

        if (response.ok) {
          const data = await response.json();
          if (data === "chatgpt") {
            gptAnswer();
          } else {
            const botMessage = { text: data.reply, user: false };
            setMessages((prevMessages) => [...prevMessages, botMessage]);
          }
        } else {
          const errorMessage = { text: 'Error: Could not fetch response from the server.', user: false };
          setMessages((prevMessages) => [...prevMessages, errorMessage]);
        }
      } catch (error) {
        gptAnswer();
      }
    }
  };

  return (
    <>
    <StarsCanvas/>
      <Nav />
      
      <div className="w-full flex justify-center items-center min-h-screen my-8">
        <div className="md:flex grid w-full max-w-screen-lg space-x-1">
          <div className="flex-1 hidden justify-center items-center md:flex">
            <Image src={MyImage} className='w-96 pr-12' alt="Raushan Kumar" />
          </div>
          <Paper className="flex-1 flex flex-col p-4 md:mt-0 mt-4 shadow-lg bg-slate-600">
            <div className='text-white flex flex-col justify-center items-center'>
              <img
                src="https://cdn-icons-png.flaticon.com/256/8943/8943377.png"
                className='w-24 h-24'
                alt="Chatbot Avatar"
              />
              <p className='bg-black px-2 rounded-md mb-8'>Hi I am Raushan's Chatbot</p>
            </div>
            <Box className="flex flex-col space-y-2 overflow-auto md:h-80 h-[65vh] mb-4">
              {messages.map((message, index) => (
                <Box
                  key={index}
                  className={`flex ${message.user ? 'justify-end' : 'justify-start'}`}
                >
                  <Box className={`flex items-center ${message.user ? 'flex-row-reverse' : 'flex-row'}`}>
                    <Avatar className="mx-2">
                      {message.user ? 'U' : (
                        <img
                          src="https://cdn-icons-png.flaticon.com/256/8943/8943377.png"
                          className='pt-1'
                          alt="Bot Avatar"
                        />
                      )}
                    </Avatar>
                    <Typography
                      className={`p-2 rounded-lg ${message.user ? 'bg-blue-500 text-white' : 'bg-slate-950 text-white'}`}
                    >
                      {message.text}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
            <Box className="flex items-center gap-4 text-white bg-white rounded-md">
              <TextField
                variant="outlined"
                fullWidth
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === 'Enter') handleSend();
                }}
                className="flex-grow"
              />
              <IconButton color="primary" onClick={handleSend}>
                <SendIcon />
              </IconButton>
            </Box>
          </Paper>
          <div className="flex-1">
            <div className='flex md:pl-12 pl-2 md:px-0 px-4 md:pt-32 pt-8 flex-col justify-center items-center'>
            <p className='font-serif text-4xl'>Raushan Kumar</p>
            <p className='text-xl font-semibold mt-3'>Full Stack Developer</p>
            <p className='text-xl font-semibold '>MERN Stack Developer</p>
            <p className='mt-4'>
              Highly motivated Full-Stack Developer with 3+ years of experience
              building web applications using the MERN stack (MongoDB, Express.js,
              React, Node.js) and Next.js. I'm passionate about creating user-friendly,
              performant, and scalable web experiences.
            </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Chatbot;
