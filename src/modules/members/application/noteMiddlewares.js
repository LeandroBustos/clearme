const { noteSchema, noteUpdateSchema } = require('./noteDtos')

const validateNote = (req, res, next) => {
	const { error, value } = noteSchema.validate(req.body)

	if (error) {
		return res.status(400).json({ error: error.details })
	}

	req.body = value
	next()
}

const validateNoteUpdate = (req, res, next) => {
	const { error, value } = noteUpdateSchema.validate(req.body)

	if (error) {
		return res.status(400).json({ error: error.details })
	}

	req.body = value
	next()
}

module.exports = {
	validateNote,
	validateNoteUpdate,
}