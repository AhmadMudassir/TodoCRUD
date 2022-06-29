const Todo = require('./../todoModel')

exports.printAllList = async (req, res) => {
    try {
        const list = await Todo.find()

        res.status(200).json({
            status: 'success',
            results: list.length,
            data: {
                list
            }
        })
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        })
    }
}

exports.printOne = async (req, res) => {
    try {
        const list = await Todo.findById(req.params.id)

        res.status(200).json({
            status: 'success',
            data: {
                list
            }
        })
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        })
    }
}

exports.postList = async (req, res) => {
    try {
        const newlist = await Todo.create(req.body)
        res.status(201).json({
            status: 'success',
            data: {
                list: newlist
            }
        })
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        })
    }
}

exports.updateList = async (req, res) => {
    try {
        const list = await Todo.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });

        res.status(200).json({
            status: 'success',
            data: {
                list
            }
        })
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        })
    }
}

exports.deleteList = async (req, res) => {
    try {
        const list = await Todo.findByIdAndDelete(req.params.id)

        res.status(204).json({
            status: 'The list was deleted Successfully',
            data: null
        })
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: error
        })
    }
}

exports.getAllTrue = async (req, res) => {
    try {
        const list = await Todo.find({checkBox: true})

        res.status(200).json({
            status: 'success',
            data: {
                list
            }
        })
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        })
    }
}

