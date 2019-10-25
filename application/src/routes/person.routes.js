const express = require('express');
const router = express.Router();
const personController = require('../controller/person.controller')

//person routes
router.get('/', personController.getPersons);
router.get('/:id', personController.getPerson);
router.post('/', personController.savePerson);
router.put('/:id', personController.updatePerson);
router.delete('/:id', personController.deletePerson);

module.exports = router;

