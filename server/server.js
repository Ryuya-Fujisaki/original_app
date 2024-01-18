const express = require("express");
const jwt = require("jsonwebtoken");
const cors = require("cors"); //試験中

const app = express();
const userRouter = require("./routes/user");

const PORT = 3000;

app.use(cors()); //試験中
app.set("view engine", "ejs");

app.get("/",  (req, res) => {
    res.render("index", { text: "NodejsとExpress" });
});

//ルーティング
app.use("/user", userRouter);


app.listen(PORT, () => console.log("サーバーが起動しました"));
