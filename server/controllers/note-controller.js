const Note = require('../models/note-model');
const mongoose = require('mongoose');

// const xU = (req, res) => {
//   res.send('HELLO USER!');
// };

const createNote = (req, res) => {
  // console.log(req.body);
  // res.send(req.body);
  const note = new Note({
    title: req.body.title,
    note: req.body.description
  });

  try {
    note.save()
      // .then(data => {
      //   res.json(data);
      // });
      .then((newNote) => {
        res.status(201).json({
          success: true,
          message: 'New note created successfully',
          Note: newNote
        });
      });
  }
  catch (err) {
    res.status(500).json({
      success: false,
      message: 'Server error. Please try again.',
      error: err.message,
    });
  }
};



const getOneNote = (req, res) => {
  const id = req.params.id;
  
  try {
    Note.findById(id)
    .then((note) => {
      // res.status(200).json({
      //   success: true,
      //   message: `Return ${note.title}`,
      //   Note: note
      // });
      if (!note) {
        res.status(404).send({
          message: "No note with id " + id});
      } else {
        res.status(200).json({
          success: true,
          message: `Return ${note.title}`,
          Note: note
        });
      }
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'This cause does not exist',
      error: err.message,
    });
  }
};

const deleteNote = (req, res) => {
  const id = req.params.id;
  try {
    Note.findByIdAndDelete(id)
    .exec()
    .then(() => res.status(204).json({
      success: true,
      message: `Note successfully deleted`
    }));
  } catch (error) {
    res.status(500).json({
      success: false,
      message: err
    });
  }
};

const updateNote = (req, res) => {
  const id = req.params.id;
  // const updateObject = req.body;
  try {
    Note.findByIdAndUpdate({_id: req.params.id},
      {$set: req.body})
      .exec()
      .then(() => {
        res.status(200).json({
          success: true,
          message: 'Note is updated',
          updateNote: req.body,
        });
      });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error. Please try again.',
      error: error.message
    });
  }
};

const getAllNotes = (req, res) => {
  try {
    Note.find()
      .select('_id title description')
      .then((allNotes) => {
        res.status(200).json({
          success: true,
          message: 'A list of all notes',
          Notes: allNotes
        });
        // res.send(allNotes);
      });
  }
  catch (err) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: err.message
    });
  }
};
module.exports = { createNote, getAllNotes, getOneNote,
updateNote, deleteNote };