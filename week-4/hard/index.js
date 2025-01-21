const express = require("express");
const dotenv = require("dotenv");
const authRoutes = require("./routes/user")
const todoRoutes = require("./routes/todo");
dotenv.config();



const app = express();
const port = process.env.PORT;

app.use(express.json());

app.get("/healthy", (req, res)=> res.send("I am Healthy"));

//  start writing your routes here
app.use("/auth", authRoutes);
app.use("/todos", todoRoutes);



app.listen(port, ()=> console.log(`server is running at http://localhost:${port}`));

