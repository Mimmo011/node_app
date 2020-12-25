const express = require('express');
const app = express();

app.get('/', (req, res) =>{
  res.send('Ciao a tutti')
});

app.listen(4000, () => {
  console.log('Server in ascolto alla porta 4000');
});
