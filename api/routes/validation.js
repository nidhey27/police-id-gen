const Joi = require('@hapi/joi');


const adminRegistrationValidation = (data) => {
    const admin = {
        name: Joi.string().min(3).required(),
        email: Joi.required(),
        password: Joi.string().min(6).required()
    }

    return Joi.validate(data, admin);
}

const adminLoginValidation = (data) => {
    const admin = {
        email: Joi.required(),
        password: Joi.string().min(6).required()
    }

    return Joi.validate(data, admin);
}

module.exports = {
    adminRegistrationValidation,
    adminLoginValidation
}