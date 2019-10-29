const Person = require('../../domain/models/person.model');

let personController = {

    getPersons: (req, res) => {
        Person.find((err, persons) => {
            if (err) {
                return res.status(500).send({
                    'error': true,
                    'msg': 'Error consult Persons'
                });
            }
            if (!persons) {
                return res.status(404).send({
                    'error': true,
                    'msg': 'Not found Persons'
                });
            } else {
                return res.status(200).json({
                    persons
                });
            }
        });
    },
    getPerson: (req, res) => {
        Person.findById(req.params.id, (err, person) => {
            if (err) {
                return res.status(404).send({
                    'error': true,
                    'msg': 'Error consult Persons'
                });
            }
           if (!person) {
                return res.status(404).send({
                    'error': true,
                    'msg': 'Not found Person'
                });
            }else {
                return res.status(200).json({
                    person
                });
            }
        });
    },
    savePerson: (req, res) => {
        const personReq = req.body;
        const personNew = new Person(personReq);
      
        personNew.save((err, person) => {
            if (err) {
                console.log(err);
                return res.status(404).send({
                    'error': 'error creat person'
                });
            } else {
                return res.status(200).json({
                    person
                });

            }
        });
    },
    updatePerson: (req, res) => {
        Person.findById(req.params.id, (err, person) => {
            if (!person) {
                res.status(404).json({
                    "error": true,
                    "msg": "No person updated"
                })
            }
            if (req.body.name != null) person.name = req.body.name;
            if (req.body.lastname != null) person.lastname = req.body.lastname;
            if (req.body.age != null) person.age = req.body.age;
            person.save((err) => {
                if (!err) {
                    res.json({
                        "success": true,
                        "msg": "Person Actualizado",
                        "person": req.body
                    })
                } else if (err.name === 'ValidateError') {
                    return res.status(400).json({
                        "error": true,
                        "msg": "Validate error"
                    })
                } else {
                    return res.status(500).send({
                        'error': true,
                        'msg': 'Error consult Persons'
                    });
                }

            });
        });
    },
    deletePerson: (req, res) => {
        Person.findByIdAndDelete(req.params.id, (err,person) => {
            if (!err) {
                res.json({
                    "success": true,
                    "msg": "Person deleted!"
                })
            }
            if(!person){
                res.status(404).json({
                    "error": true,
                    "msg": "Delete no person found"
                })
            }else {
                return res.status(500).send({
                    'error': true,
                    'msg': 'Error consult Persons'
                });
            }
        });
    }
}
module.exports = personController;