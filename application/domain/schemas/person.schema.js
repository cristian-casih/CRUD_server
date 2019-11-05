const Joi = require('@hapi/joi');

const personSchema = Joi.object({

    name: Joi.string().min(3).max(30).required(),
    lastname: Joi.string().min(3).max(50).required(),
    dateofbirth: Joi.date(),
    email: Joi.string().email().required(),
    sex: Joi.string().required(),
    //password: Joi.types.String().min(8).max(30).regex(/[a-zA-Z0-9]{3,30}/).required(),
    created: Joi.date(),
})
const validation = () => {
    const scope = this;
    scope.validate = (person) => {
        const hasError = personSchema.validate(person, { abortEarly: false }).error;
        const messasge = !hasError ? "" : hasError.details.map((err) => err.message).join(', ');
        return { success: !hasError, messasge };
    }
    return scope;
};

module.exports = validation();