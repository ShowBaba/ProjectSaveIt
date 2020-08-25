const express = require('express');
const noteController = require('../controllers/note-controller');
const { createNote, getAllNotes
    , getOneNote, updateNote, deleteNote } = require('../controllers/note-controller');


const router = express.Router();

router.post('/', createNote);

router.get('/', getAllNotes);
router.get('/:id', getOneNote);
router.patch('/:id', updateNote);
router.delete('/:id', deleteNote);

module.exports = router;