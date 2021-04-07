const express = require('express');
const cors    = require('cors');
const app     = express();

const port = 3000;

app.use(cors());
app.use(express.json());


const login     = require('./routes/login');
// const dashboard = require('./routes/dashboard');


app.use('/', login);
// app.use('/dashboard', dashboard);

app.get('/teste', (req, res) => {
    console.log(req.method);

    res.send('<h1>Vue JS</h1>')
})

app.listen(port, () => {
    console.log(`Server listening at port ${port}`);
})