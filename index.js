const express = require('express');
const app = express();
const router = require('./Routes/Routes');
const PORT = 3001;
const cors = require('cors');

app.use(cors({
    origin: 'http://localhost:5173'
}));
app.use(express.json());
app.use('/api', router)


app.listen(PORT, () => {
    console.log('O servidor esta rodando na porta '+PORT)
})
