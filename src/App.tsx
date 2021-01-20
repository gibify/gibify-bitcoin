import React from 'react';

import './Styles/GlobalStyles.css';

import './App.css';

import ImageLogo from './assets/gibify-logo.svg';

const App: React.FC = () => {
   return (
      <h1>
            <img src={ImageLogo} alt="logo"/> 
      </h1>
      
   )
   
}

export default App;
