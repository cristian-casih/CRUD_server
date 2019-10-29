const Joi = require('joi');

const PersonSchema = joiValidate = (obj) => {
    let model = {
        name: Joi.types.String().min(6).max(30).required(),
        lastname: Joi.types.String().required(),
        age: Joi.types.Number().min(1).max(3).required(),
        email: Joi.types.String().email().required(),
        sex: Joi.types.String().required(),
        //password: Joi.types.String().min(8).max(30).regex(/[a-zA-Z0-9]{3,30}/).required(),
        created: Joi.types.Date(),
    }
    return Joi.validate(obj, model);
}
const validation = () => {
    const scope = this;
    scope.Validate = (person) => {
        const hasError = PersonSchema.validate(person, { abortEarly: false }).error;
        const messasge = !hasError ? "" : hasError.details.map((err) => err.message).join(', ');
        return { success: !hasError, messasge };
    }
    return scope;
};

module.exports = validation();