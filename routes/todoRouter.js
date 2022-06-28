const express=require('express');
const todoController=require('./../controllers/todoController');
const router=express.Router();


router
    .route('/isCompleted')
    .get(todoController.getAllTrue)


router
    .route('/:id')
    .get(todoController.printOne)
    .delete(todoController.deleteList)
    .patch(todoController.updateList)

router
    .route('/')
    .get(todoController.printAllList)
    .post(todoController.postList)

module.exports = router;    