//  start writing from here
const mongoose = require("mongoose")

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

console
mongoose.connect(process.env.MONGO_URI)
    .then(()=> {
        console.log("Successfully connected to mongo DB")
    })
    .catch((err)=> {
        console.log("Error while connecting to the data base "+err)
    })

const UserSchema = new Schema({
    name:String,
    email:{type:String, unique:true},
    password:String
}, {timestamps:true})

const TodoSchema = new Schema({
    
    title:String,
    description:String,
    isDone : Boolean,
    userId:ObjectId,

}, {timestamps:true})

const User = mongoose.model('User', UserSchema);
const Todo = mongoose.model("Todo", TodoSchema);

module.exports =  {
    User,
    Todo
}