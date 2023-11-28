const express = require('express');
const router = express.Router();
const fetchUser = require('../middleware/fetchUser')
const Notes = require('../models/Notes')
const { body, validationResult } = require('express-validator');



//Routes 1 Get all the Notes
router.get('/fetchAllNotes', fetchUser, async (req, res) => {
    const notes = await Notes.find({ user: req.user.id })
    res.json(notes);
})

//Routes 2 Add  Notes
router.post('/addNotes', [
    body('title').isLength({ min: 5 }).withMessage('enter a valid title'),
    body('description').isLength({ min: 5 }).withMessage('Description must be atleast 5 character'),
], fetchUser, async (req, res) => {
    const { title, description, tag } = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).send({ errors: errors.array() });
    }
    try {
        const notes = await Notes.create({
            title, tag, description, user: req.user.id
        })
        const savedNotes = await notes.save();
        return res.json(savedNotes);
    } catch (error) {
        console.log(error)
        return res.status(500).send({ errors: 'Internal server error' });
    }
})



//Routes 3 update  Notes
router.put('/updateNotes/:id', fetchUser, async (req, res) => {
    const { title, description, tag } = req.body;
    // create new notes object
    const newNotes = {};
    if (title) newNotes.title = title;
    if (description) newNotes.description = description;
    if (tag) newNotes.tag = tag;
    //find tha note to be updated and update it 
    try {
        let note = await Notes.findById(req.params.id);
        if (!note)
            return res.status(404).send('Note found');
        if (note.user.toString() != req.user.id)
            return res.status(401).send('Note found');
        note = await Notes.findByIdAndUpdate(req.params.id, { $set: newNotes }, { new: true })
        res.json(note);
    } catch (error) {
        console.log(error)
        return res.status(500).send({ errors: 'Internal server error' });
    }

})


//Routes 4 update  Delete
router.delete('/deleteNotes/:id', fetchUser, async (req, res) => {

    //find tha note to be updated and update it 
    try {
        let note = await Notes.findById(req.params.id);
        if (!note)
            return res.status(404).send('Note found');
        if (note.user.toString() != req.user.id)
            return res.status(401).send('Note Allowed');
        note = await Notes.findByIdAndDelete(req.params.id)
        return res.json({ success: 'Note has been delete', note: note });
    } catch (error) {
        console.log(error)
        return res.status(500).send({ errors: 'Internal server error' });
    }
})

module.exports = router