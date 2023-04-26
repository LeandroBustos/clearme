const Joi = require('joi')

const memberSchema = Joi.object({
	client_id: Joi.string().required(),
	name: Joi.string().uppercase().required(),
	phone_number: Joi.string().required(),
	email: Joi.string().email().required(),
})

const memberUpdateSchema = Joi.object({
	name: Joi.string().uppercase(),
	phone_number: Joi.string(),
	email: Joi.string().email(),
}).or(
	'name',
	'phone_number',
	'email'
)

const memberPatchClientSchema = Joi.object({
	client_id: Joi.string().required(),
})


module.exports = {
	memberSchema,
	memberUpdateSchema,
	memberPatchClientSchema
}