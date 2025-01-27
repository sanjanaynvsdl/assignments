// start writing from here
const express = require("express")
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();

const authRoutes = require("./routes/user");
const todoRoutes = require("./routes/todo");


const PORT = process.env.PORT;

const app = express()


app.use(express.json())
app.use(cors({
    origin:"http://localhost:5173"
}));

app.get("/working", (req,res)=> {
    res.send("Todo- Assignment - week5");
})

app.use("/auth", authRoutes);
app.use("/todos", todoRoutes);



app.listen(PORT, ()=> {
    console.log(`Server is running on the http://localhost:${PORT}`);
})