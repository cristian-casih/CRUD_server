const personModel = require('../models/person.model');

const personBL = () => {
    this.add = async (person) => {
        try {
            const newPerson = new personModel(person);
            await newPerson.save();
            return true;
        } catch (error) {
            return false;
        }
    };
    this.getAll = async () => {
        try {
            const persons = await personModel.find();
            return persons;
        } catch (error) {
            return null;
        }
    };
    this.getOne = async (id) => {
        try {
            const data = await personModel.findById(id);
            return data;
        } catch{
            null;
        }
    };
    this.update = async (person) => {
        try {
            const personToUpdate = await personModel.findByIdAndUpdate(person.id);

            personToUpdate.name = person.name;
            console.log(personToUpdate.name);
            
            personToUpdate.lastname = person.lastname;
            personToUpdate.age = person.age;
            personToUpdate.email = person.email;
            personToUpdate.sex = person.sex;

            
            await personToUpdate.save();
            return true;
        } catch (error) {
            false;
        }
    };
    this.delete = async (id) => {
        try {
            await personModel.findByIdAndRemove(id);
            return true;
        } catch (error) {
            return false;
        }
    };
    return this;
};
module.exports = personBL();