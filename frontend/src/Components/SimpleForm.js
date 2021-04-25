import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
 


// all available config props
const config ={
  floating: true,
  enableSmoothScroll:true,
  botAvatar:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Bot_awake.svg/480px-Bot_awake.svg.png"
};

// all available props
const theme = {
  background: '#f5f8fb',
  fontFamily: 'serif',
  headerBgColor: '#37AF37',
  headerFontColor: '#fff',
  headerFontSize: '20px',
  botBubbleColor: '#0F3789',
  botFontColor: '#fff',
  userBubbleColor: '#FFE384',
  userFontColor: '#4a4a4a',
  
  
};

const steps = [
  {
    id: 'intro',
    message: 'Hi! how may I help you?',
     trigger:2
  },
  {
    id: '2',
   
    options: [
      { value: 1, label: 'My Orders', trigger: 'my orders' },
      { value: 2, label: 'Return Product', trigger: 'return products' },
      { value: 3, label: 'Others', trigger: 'others-1' },
    ],
  },
  {
    id: 'return products',
    message: 'return products',
    trigger: '2',
  },
  {
    id: 'my orders',
    message: 'Here for you!',
    end: true,
  },
  {
    id: 'others-1',
    options: [
      { value: 1, label: 'Payment', trigger: 'payment' },
      { value: 2, label: 'Track My Order', trigger: 'track order' },
      { value: 3, label: 'Edit Profile', trigger: 'edit profile' },
    ],
  },
  {
    id: 'payment',
    message: 'return products',
    trigger: '2',
  },
  {
    id: 'track order',
    message: 'return products',
    trigger: '2',
  },
  {
    id: 'edit profile',
    message: 'return products',
    trigger: '2',
  },
];
class SimpleForm extends Component {
   

  render() {
    return (
      <ThemeProvider theme={theme}>
      <ChatBot
      headerTitle="Here For You"
      recognitionEnable={true}
      speechSynthesis={{ enable: true, lang: 'en' }}
      steps={steps} 
      {...config}
    />
    </ThemeProvider>
    );
  }
       
}
export default SimpleForm;