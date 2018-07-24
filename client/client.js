// Startup point for client side application
import React from 'react';
import ReactDom from 'react-dom';
import Home from './src/components/Home';

ReactDom.hydrate(<Home/>, document.querySelector('#root'));