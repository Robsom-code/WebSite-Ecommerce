const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');


const app = express();
app.use(express.json());
app.use(cors());


mongoose.connect('mongodb://localhost:27012/userdata',
{
useNewUrlParser: true, 
useUnifiedTopology: true
});

requireDir("./src/models");

app.use("/api", require("./src/routes"));


//numero do servidor
app.listen(3002);







