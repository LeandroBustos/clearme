const noteRepository = require('./noteRepository')

const createNote = async note => {
	try {
		return await noteRepository.createNote(note)
	} catch (err) {
		throw err
	}
}

const updateNoteByMemberId = async (memberId, noteId, note) => {
	try {
		return await noteRepository.updateNoteByMemberId(memberId, noteId, note)
	} catch (err) {
		throw err
	}
}

const deleteNoteByMemberId = async (memberId, noteId) => {
	try {
		await noteRepository.softDeleteNoteByMemberId(memberId, noteId)
	} catch (err) {
		throw err
	}
}

module.exports = {
	createNote,
	updateNoteByMemberId,
	deleteNoteByMemberId
}