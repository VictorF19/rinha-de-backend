import http from 'http'
import bodyParser from 'body-parser';

import createHandler from './src/handlers/create.js';
import { run } from './src/db/index.js';

run().then(() => {
  const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "application/json");
    
    const { url, method } = req
    const post = 'POST', get = 'GET'
  
    if (method === post && url === '/pessoas') {
      createHandler(bodyParser, req, res)
    }
  
    if (method === get) {
      if (url.includes(`/pessoas/t=`)) {}
      if (url.includes(`/pessoas/`)) {}
      if (url.includes(`/contagem-pessoas`)) {}
    }
  
  });
  
  server.listen(80).once('listening', () => {
    console.log('Server started on port 80!')
  })
  
  process.on('SIGTERM', () => {
    console.log('Server ending...')
    server.close(() => process.exit())
  })
}).catch(() => {
  console.error('Error initializing database')
})


