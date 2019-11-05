const personBl = require('../../domain/BL/person.bl');
const personValidator = require('../../domain/schemas/person.schema');

let personController = {

    getPersons: async (req, res) => {
        const data = await personBl.getAll();
        if (data) {
            res.status(200).json({
                data
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
        const data = await personBl.getOne(req.params.id);
        if (data) {
            res.status(200).json({
                data
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
        const person = req.body;
        const validation = personValidator.validate(person);

        if (validation.success) {
            const result = await personBl.add(person);
            if (result) {
                res.status(200).json({
                    "success": result,
                    "msg": "Person saved"
                });

            } else {
                res.status(500).json({
                    "success": result,
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
            const person = {
                id: req.params.id,
                name: req.body.name,
                lastname: req.body.lastname,
                dateofbirth: req.body.dateofbirth,
                email: req.body.email,
                sex: req.body.sex
            }

            const result = await personBl.update(person);
            if (result) {
                res.status(200).json({
                    "success": true,
                    "msg": "Person Update",
                    "person": result
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
        const data = await personBl.delete(req.params.id);
        if (data) {
            res.status(200).json({
                'success': data,
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