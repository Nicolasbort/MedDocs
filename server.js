const express = require('express');
const app     = express();

const port = 3000;


app.get('/teste', (req, res) => {
    console.log(req.method);

    res.send('<h1>Vue JS</h1>')
})

app.listen(port, () => {
    console.log(`Server listening at port ${port}`);
})