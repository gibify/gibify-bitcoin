import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './Routes/index';

import GlobalStyles from './Styles/GlobalStyles';

const App: React.FC = () => (
 <BrowserRouter>
    <Routes />

    <GlobalStyles />
 </BrowserRouter>
)

export default App;
