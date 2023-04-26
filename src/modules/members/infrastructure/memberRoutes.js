const express = require('express')

const { validateMember, validateMemberUpdate } = require('../application/memberMiddlewares')
const { validateNote, validateNoteUpdate } = require('../application/noteMiddlewares')
const memberService = require('../domain/memberServices')
const noteService = require('../domain/noteServices')

const router = express.Router()

router.get('/', async (req, res) => {
	try {
		const members = await memberService.getMembers()
		return res.status(200).send(members)
	} catch (err) {
		return res.status(500).send(err)
	}
})

router.get('/client/:id', async (req, res) => {
	const { id } = req.params
	try {
		const members = await memberService.getMembersByClientId(id)
		return res.status(200).send(members)
	} catch (err) {
		return res.status(500).send(err)
	}
})

router.post('/', validateMember, async (req, res) => {
	try {
		const member = await memberService.createMember(req.body)
		return res.status(201).send(member)
	} catch (err) {
		return res.status(500).send(err)
	}
})

router.post('/note', validateNote, async (req, res) => {
	try {
		const note = await noteService.createNote(req.body)
		return res.status(201).send(note)
	} catch (err) {
		return res.status(500).send(err)
	}
})

router.put('/:id', validateMemberUpdate, async (req, res) => {
	const { id } = req.params
	try {
		const updatedMember = await memberService.updateMemberById(id, req.body)
		return res.status(200).send(updatedMember)
	} catch (err) {
		return res.status(500).send(err)
	}
})


router.put('/:memberId/note/:noteId', validateNoteUpdate, async (req, res) => {
	const { memberId, noteId } = req.params
	try {
		const updatedNote = await noteService.updateNoteByMemberId(memberId, noteId, req.body)
		return res.status(200).send(updatedNote)
	} catch (err) {
		return res.status(500).send(err)
	}
})

router.patch('/:id/client', async (req, res) => {
	const { id } = req.params
	try {
		const updatedMember = await memberService.changeClientByMemberId(id, req.body)
		return res.status(200).send(updatedMember)
	} catch (err) {
		return res.status(500).send(err)
	}
})

router.delete('/:id', async (req, res) => {
	const { id } = req.params
	try {
		await memberService.deleteMemberById(id)
		return res.status(200).send()
	} catch (err) {
		return res.status(500).send(err)
	}
})

router.delete('/:memberId/note/:noteId', async (req, res) => {
	const { memberId, noteId } = req.params
	try {
		await noteService.deleteNoteByMemberId(memberId, noteId)
		return res.status(200).send()
	} catch (err) {
		return res.status(500).send(err)
	}
})

module.exports = router