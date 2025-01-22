//  start writing your code from here
const {Todo} = require("../db/index");
const {Router } = require("express");
const router = Router()
const authMiddleware = require("../middleware/user");
const {z} = require('zod');

//get todo
router.get("/:id", authMiddleware , async(req,res)=> {
    const todoId = req.params.id;
    if(!todoId) {
        return res.json({
            msg:"Please provide the id of todo,"
        })
    }

    try {
        const todo = await Todo.findOne({
            _id:todoId,
        })

        if(todo) {
            return res.json({
                todo:todo,
                msg:"Successfully fetched the todo with the given id!"
            })
        } else {
            return res.json({
                msg:"Todo with the given id is not found!"
            })
        }
    } catch (error) {
        return res.status(500).json({
            msg:"Internal server in get-todo functionality "+error
        })
    }

})


//get all todo
router.get("/",authMiddleware,  async(req,res)=> {
    const userId = req.userId;
    try {
        const todos = await Todo.find({
            userId:userId
        })

        return res.json({
            todos:todos,
            msg:"Successfully fetched the todo's of the user "
        })

    } catch (error) {
        return res.status(500).json({
            msg:"Internal server issue in get-todo's functionality :",
            error:error
        })
    }
})


//add todo
router.post("/", authMiddleware , async(req,res)=> {

    const responseObj = z.object({
        title:z.string(),
        description:z.string(),
        isDone :z.boolean(),
    })

    const {success, data, error} = responseObj.safeParse(req.body);

    if(!success) {
        return res.json({
            msg:"Invalid input format!",
            error:error
        })
    }
    try {
        const title = req.body.title;
        const description = req.body.description;

        const isDone = req.body.isDone;
        const userId = req.userId;

        await Todo.create({
            title:title,
            description:description,
            isDone:isDone,
            userId:userId
        });

        return res.json({
            msg:"Todo created successfully!"
        })

    } catch (error) {
        return res.status(500).json({
            msg:"Error in add todo functionality! "+error
        })
    }

})


//update todo
router.put("/:id",authMiddleware,  async(req,res)=> {

    const responseObj = z.object({
        title:z.string(),
        description:z.string(),
        isDone :z.boolean(),
    })

    const {success, data, error} = responseObj.safeParse(req.body);

    if(!success) {
        return res.json({
            msg:"Invalid input format!",
            error:error
        })
    }

    try {
        const id = req.params.id;
        const title = req.body.title;
        const description = req.body.description;
        const isDone = req.body.isDone;

        if(!id) {
            return res.json({
                msg:"Invalid id provided"
            })
        }

        const todoToBeEdited = await Todo.findOne({
            _id:id
        })

        if(todoToBeEdited) {
            await todoToBeEdited.updateOne({
                title:title,
                description:description,
                isDone:isDone
            });

            return res.json({
                msg:"Todo updated successfully!"
            })
        } else {
            return res.status(403).json({
                msg:"Todo with the given id does not exist!"
            })
        }
    } catch (error) {
        return res.status(500).json({
            msg:"Internal server error in add todo functionalit :"+error
        })
    }

});


//delete single todo
router.delete("/:id", authMiddleware, async(req,res)=> {
    const id = req.params.id;

    if(!id) {
        return res.status(403).json({
            msg:"Invalid id input,"
        })
    }

    try {
        await Todo.deleteOne({
            _id:id,
        })
        return res.json({
            msg:"Successfully deleted the todo,"
        })
    } catch (error) {
        return res.json({
            msg:"Internal server issue in delete todo functionality ",
            error:error
        })
    }
})

module.exports = router;