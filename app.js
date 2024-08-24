const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const path = require("path");
const userowners = require("./routes/ownersRouter");
const usersRouter = require("./routes/usersRouter");
const productsRouter = require("./routes/productsRouter");

const db = require("./config/mongoose-connection");

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

app.use("/owners", userowners);
app.use("/users", usersRouter);
app.use("/products", productsRouter);
// app.use("/index", index);

app.listen(3000,(req,res)=>{
    console.log("sercer listen----3000")
});

// app.get("/", function (req,res){
//     res.send("hey it is working");
//     console.log("good");
// });