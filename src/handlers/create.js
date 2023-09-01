function payloadIsValid (payload) {
  const { apelido, nome, nascimento, stack } = payload;

  if (!apelido || !nome || !nascimento) return false;

  if (apelido.length > 32) return false;
  if (nome.length > 100) return false;
  if (nascimento.test(/^\d{4}-(0[1-9]|1[0-2])-([0-2]\d|3[01])$/)) return false

  return true
}

const createHandler = (bodyParser, req, res) => {
  bodyParser.json()(req, res, () => {
    const payloadIsValid = payloadIsValid(req.body)

    if (!payloadIsValid) {
      res.writeHead(422, { 'Content-Type': 'application/json' });
      res.end()
      return
    }

    res.writeHead(200, { 'Content-Type': 'application/json' });
    console.log(req.body)
    res.end(JSON.stringify({ message: 'Person created!'}));
  })
}

export default createHandler;