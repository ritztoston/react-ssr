import express from 'express';
import React from 'react';
import {renderToString} from 'react-dom/server';
import Home from '../client/src/components/Home';

const app = express();

app.use(express.static('client/public'));

app.get('/', (req, res) => {
  const content = renderToString(<Home/>);

  const html = `
     <html>
     <head>
     <body>
     <div id="root">${content}</div>
     <script src="bundle.js"></script>
     </body>
     </head>
     </html>
  `;

  res.send(html);
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});