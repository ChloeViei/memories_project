
const express = require('express');
const app = express();
const memoryRoute = express.Router();

// Memory model
let Memory = require('../models/Memory');

// Add Memory
memoryRoute.route('/create').post((req, res, next) => {
    Memory.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
});

// Get All Memories
memoryRoute.route('/').get((req, res) => {
    Memory.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

// Get single memory
memoryRoute.route('/read/:id').get((req, res) => {
    Memory.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})


// Update memory
memoryRoute.route('/update/:id').put((req, res, next) => {
    Memory.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            return next(error);
            console.log(error)
        } else {
            res.json(data)
            console.log('Data updated successfully')
        }
    })
})

// Delete memory
memoryRoute.route('/delete/:id').delete((req, res, next) => {
    Memory.findOneAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
})

module.exports = memoryRoute;
