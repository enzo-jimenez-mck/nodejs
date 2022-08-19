const express = require('express');
const app = express();
const PORT = process.env.PORT || 80;

app.get('/', (req,res) => {
  console.log('get');
    res.send('<img src="https://raw.githubusercontent.com/enzo-jimenez-mck/nodejs/blob/main/k8s.jfif" />');
});

app.listen(PORT, () => console.log(`Listening ${PORT}`));
