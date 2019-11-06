const personBl = require('../../domain/BL/person.bl');
const personValidator = require('../../domain/schemas/person.schema');

let personController = {

    getPersons: async (req, res) => {
        const person = await personBl.getAll();
        if (person) {
            res.status(200).json({
                person
            });
        }
        else {
            res.status(404).json({
                'error': true,
                'msg': 'Not found Persons'
            });

        }
    },
    getPerson: async (req, res) => {
        const person = await personBl.getOne(req.params.id);
        if (person) {
            res.status(200).json({
                person
            });
        }
        else {
            res.status(404).json({
                'error': true,
                'msg': 'Not found Person'
            });

        }
    },
    savePerson: async (req, res) => {
        const personBody = req.body;
        const validation = personValidator.validate(personBody);

        if (validation.success) {
            const person = await personBl.add(personBody);
            if (person) {
                res.status(200).json({
                    "success": person,
                    "msg": "Person saved"
                });

            } else {
                res.status(500).json({
                    "success": person,
                    "msg": "No saved person."
                });
            }

        } else {
            res.status(500).json({
                "success": validation.success,
                "msg": validation.messasge
            });
        }
    },
    updatePerson: async (req, res) => {
        const validation = personValidator.validate(req.body);
        if (validation.success) {
            const personUpdate = {
                id: req.params.id,
                name: req.body.name,
                lastname: req.body.lastname,
                dateofbirth: req.body.dateofbirth,
                email: req.body.email,
                sex: req.body.sex
            }

            const person = await personBl.update(personUpdate);
            if (person) {
                res.status(200).json({
                    "success": true,
                    "msg": "Person Update",
                    "person": person
                });
            } else {
                res.status(500).json({
                    'error': true,
                    'msg': 'No saved Persons'
                });
            }
        } else {
            res.status(400).json({
                "success": validation.ok,
                "msg": validate.messasge
            });
        }
    },

    deletePerson: async (req, res) => {
        const person = await personBl.delete(req.params.id);
        if (person) {
            res.status(200).json({
                'success': person,
                'msg': 'Person deleted'
            });
        }
        else {
            return res.status(404).json({
                'error': true,
                'msg': 'Not found Person'
            });

        }
    }
}
module.exports = personController;