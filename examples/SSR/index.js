const React = require('react')
const { Ball } = require('vin-react-boilerplate')
const express = require('express')
const ReactDOM = require('react-dom/server')

const PORT = 3000
const app = express()

app.get('*', (req, res) => {
  const html = ReactDOM.renderToString(React.createElement(Ball))
  res.send(`<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
</head>
<body>
    ${html}
</body>
</html>`)
})

app.listen(PORT, () => console.log(`http://localhost:${PORT}`))
