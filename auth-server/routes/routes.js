const express = require('express');
const router = express.Router();
const Model = require('../model/model');

module.exports = router;

//post
router.post('/post', async (req, res) => {
    const data = new Model({
        username: req.body.username,
        password: req.body.password
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})

//get all
router.get('/getAll', async (req, res) => {
    try {
        const data = await Model.find();
        res.json(data)
    }
    catch (error) {
        res.status(500).json({message: error.message})
    }
})

//get by ID
router.get('/getOne/:id', async (req, res) => {
    try {
        const data = await Model.findById(req.params.id);
        res.json(data)
    }
    catch (error) {
        res.status(500).json({message: error.message})
    }
})

//update by ID
router.patch('/update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await Model.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//delete by ID
router.delete('/delete/:id', (req, res) => {
    res.send('Delete by ID API')
})

