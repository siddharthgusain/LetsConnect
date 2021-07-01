const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");
const conversationRoute = require("./routes/conversations");
const messageRoute = require("./routes/messages");
const multer = require('multer');
const path  = require("path")

dotenv.config();

mongoose.connect(process.env.MONGO_URL,
    {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true} ,() =>{
    console.log("connected to mongoDB");
});

app.use("/images" , express.static(path.join(__dirname,"public/images")));
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

const storage = multer.diskStorage({

    destination:(req, file , cb) =>{
        cb(null , "public/images");
    },
    filename: (req , file, cb) =>{
        cb(null, req.body.name);
    }
});

const upload  = multer({ storage : storage });

app.post("/api/upload", upload.single("file") , (req,res) =>{
    try{
        return res.status(200).json("File uploaded successfully.");
    }catch(err){
        console.log(err);
    }
});

app.use("/api/users" , userRoute);
app.use("/api/auth" , authRoute);
app.use("/api/posts",postRoute);
app.use("/api/conversations", conversationRoute);
app.use("/api/messages", messageRoute);

if(process.env.NODE_ENV === 'production'){

    app.use(express.static('client/build'));
    app.get("*" , (req , res) =>{

        res.sendFile(path.resolve(__dirname,'client' , 'build' , 'index.html'));
 
    });
}

const port  = process.env.PORT || 5000;

app.listen(port,() =>{
    console.log("Server started at port 8080" + port);
});