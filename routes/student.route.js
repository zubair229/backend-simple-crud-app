const express = require('express');
const Student = require('../models/student.model.js');
const router = express.Router();
const {getStudents, getStudent,createStudent, updateStudent, deleteStudent} = require('../controllers/student.controller.js');


router.get('/', getStudents);
router.get('/:id', getStudent);
router.post('/', createStudent);
router.put('/:id', updateStudent);
router.delete('/:id', deleteStudent);



module.exports = router;