export default function createHandler(bodyParser, req, res){
  bodyParser.json()(req, res, () => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    console.log(req.body)
    res.end(JSON.stringify({ message: 'Person created!'}));
  })
}