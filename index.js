const express = require('express');
const app = express();
const router = require('./Routes/Routes');
const PORT = 3001;

app.use(router)
app.listen(PORT, () => {
    console.log('O servidor esta rodando na porta '+PORT)
})