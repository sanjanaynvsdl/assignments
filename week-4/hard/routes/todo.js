const { Router } = require("express");
const adminMiddleware = require("../middleware/user");
const router = Router();
const {Todo} = require("../database/index")


router.post('/',adminMiddleware,  async(req, res) => {
    // Implement todo creation logic
    const title = req.body.title;
    const description = req.body.description;
    const done = req.body.done;
    // const{ userId} = req; //this is de-structure or
    const userId = req.userId;
    // console.log(userId);

    console.log("The user-details are "+ title + description + done + userId);
    try {
        await Todo.create({
            title:title,
            description:description,
            done:done,
            userId:userId,
        })

        return res.json({
            msg:"Successfully created todo"
        }) 
        
    } catch (error) {
        return res.status(500).json({
            msg:"Internal server error in post-todo functionality "+error
        })
    }
});

router.put('/:id', adminMiddleware, async(req, res) => {
    // Implement update todo  logic
    const todoId = req.params.id;
    const title = req.body.title;
    const description = req.body.description;
    const done = req.body.done;

    try {
        await Todo.updateOne({
            _id:todoId,
        }, {
            title:title,
            description:description,
            done:done
        },)

        return res.json({
            msg:`Todo with given id ${todoId} is being updated successfully!`
        })

    } catch (error) {
        return res.json({
            msg:"Internal server error in update todo functionality "+error
        })
        
    }

});

//Delete all todo's of  a user!
router.delete('/', adminMiddleware, async(req, res) => {
    // Implement delete todo logic
    const {userId} = req;

    try {
        await Todo.deleteMany({
            userId:userId,
        })

        return res.json({
            msg:"Deleted all the todo's of this user!"
        })

    } catch(err) {
        return res.status(500).json({
            msg:"Internal server error "+ err,
        })

    }




});

router.delete('/:id', adminMiddleware, async(req, res) => {
    // Implement delete todo by id logic
    const todoId = req.params.id;

    try {
        await Todo.deleteOne({
            _id:todoId,
        })

        return res.json({
            msg: `Todo with the id ${todoId} deleted successfully!`
        })
    } catch (error) {
        return res.status(500).json({
            msg:"Internal server error in delete todo functionality "+error
        })
    }
});


//Get all todo's of a user,
router.get('/', adminMiddleware, async(req, res) => {
    // Implement fetching all todo logic
    const id = req.userId;
    console.log(id);
    try {
        const userTodos = await Todo.find({
            userId:id
        })
        console.log(userTodos);
        return res.json({
            todos:userTodos,
            msg:"Fetched all the todo's of the user"
        })
    } catch (error) {
        return res.json({
            msg:`Internal server error in fetching all todo's functionality `+error
        })
    }
});

//get particular todo by id,
router.get('/:id', adminMiddleware, async(req, res) => {
    // Implement fetching todo by id logic
    const todoId = req.params.id;

    try {
        const todoToFind = await Todo.findOne({
            _id:todoId
        })

        if(!todoToFind) {
            return res.json({
                msg:`Todo with this id ${id} does not exist!`
            })
        }

        return res.json({
            todo:todoToFind,
            msg:`Fetched the required todo with the id ${todoId}`
        })
        
    } catch (error) {
        
    }
});

module.exports = router;