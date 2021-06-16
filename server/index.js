const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const helmet = require("helmet");
const morgan = require("morgan");

dotenv.config();

app.listen(8800,() =>{
    console.log("test");
});