const { NoteModel } = require('../infrastructure/noteModel')

const createNote = async noteData =>
	new NoteModel(noteData).save().catch(err => {
		console.log("Error creating note", err)
		throw new Error(`Error creating note: ${err}`)
	})

const updateNoteByMemberId = async (memberId, noteId, noteData) =>
	NoteModel.findOneAndUpdate(
		{
			_id: noteId,
			member_id: memberId
		},
		noteData,
		{ new: true }
	).catch(err => {
		console.log("Error updating note", err)
		throw new Error(`Error updating note: ${err}`)
	})

const softDeleteNoteByMemberId = async (memberId, noteId) =>
	NoteModel.findOneAndUpdate(
		{
			_id: noteId,
			member_id: memberId
		},
		{ deleted_at: new Date() },
		{ new: true }
	).catch(err => {
		console.log("Error deleting note", err)
		throw new Error(`Error deleting note: ${err}`)
	})

module.exports = {
	createNote,
	updateNoteByMemberId,
	softDeleteNoteByMemberId
}