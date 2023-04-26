const Joi = require('joi')

const noteSchema = Joi.object({
	member_id: Joi.string().required(),
	content: Joi.string().required(),
})

const noteUpdateSchema = Joi.object({
	content: Joi.string().required(),
})

module.exports = {
	noteSchema,
	noteUpdateSchema,
}