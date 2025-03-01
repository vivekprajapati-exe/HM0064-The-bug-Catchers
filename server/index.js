
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const AuthRouter = require('./routes/auth');


require('dotenv').config();
require('./models/db');
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('SHHHH Backend running');
});

app.use(bodyParser.json());
app.use(cors());
app.use('/auth', AuthRouter);



app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})
