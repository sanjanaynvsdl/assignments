const dotenv = require("dotenv");
dotenv.config();
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;


// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
    .then(()=> {
        console.log("connected to mongo DB successfully!")
    }) 
    .catch((err)=> {
        console.log("There was a error while conecting to the mongo db "+ err);
    })

// Define schemas
const UserSchema = new Schema({
    // Schema definition here
    name:String,
    email:{type:String, unique:true},
    password:String,
});

const TodoSchema = new Schema({
    // Schema definition here
    title:String,
    description:String,
    done:Boolean,
    userId:ObjectId,
   
}, { timestamps: true});

const User = mongoose.model('User', UserSchema);
const Todo = mongoose.model('Todo', TodoSchema);

module.exports = {
    User,
    Todo
}