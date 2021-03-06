const express = require('express');
const { createNote, getAllNotes
    , getOneNote, updateNote, deleteNote } = require('../controllers/note-controller.js');


const router = express.Router();

router.post('/', createNote);

router.get('/', getAllNotes);
router.get('/:id', getOneNote);
router.patch('/:id', updateNote);
router.delete('/:id', deleteNote);

module.exports = router;