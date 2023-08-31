import http from 'http'
import bodyParser from 'body-parser';

const createHandler = (req, res) => {
  bodyParser.json()(req, res, () => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    console.log(req.body)
    res.end(JSON.stringify({ message: 'Person created!'}));
  })
  
}

const getHandler = (req, res) => {
}

const searchHandler = (req, res) => {
}

const countPeopleHandler = (req, res) => {
}


const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json");
  
  const { url, method } = req
  const post = 'POST', get = 'GET'

  if (method === post && url === '/pessoas') {
    createHandler(req, res)
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

