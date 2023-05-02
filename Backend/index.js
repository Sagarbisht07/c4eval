const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const UserRouter= require('./Router/user.router');
const auth= require("./Middleware/auth.maddleware");
const PostRouter= require("./Router/post.router");

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("wlc to the server");
});

app.use("/users",UserRouter)
app.use("/post",auth,PostRouter)

app.listen(8000, async () => {
  try {
    await connection;
    console.log("db is connected");
  } catch (error) {
    console.log(error);
  }
  console.log("server is up on 8000port");
  
});
