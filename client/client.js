// Startup point for client side application
import React from 'react';
import ReactDom from 'react-dom';

import {BrowserRouter} from 'react-router-dom';
import Routes from './src/Routes';

ReactDom.hydrate(
   <BrowserRouter>
     <Routes/>
   </BrowserRouter>
   , document.querySelector('#root'));