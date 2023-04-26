const { MemberModel } = require('../infrastructure/memberModel')

const getMembers = async memberData =>
	MemberModel.find(
		memberData ?
			{ ...memberData, deleted_at: null }
			: { deleted_at: null }
	)
		.lean()
		.populate({
			path: 'notes',
			match: { deleted_at: null }
		})
		.catch(err => {
			console.log("Error getting members", err)
			throw new Error(`Error getting members: ${err}`)
		})

const getMembersByClientId = async clientId => getMembers({ client_id: clientId })

const createMember = async memberData =>
	new MemberModel(memberData).save().catch(err => {
		console.log("Error creating member", err)
		throw new Error(`Error creating member: ${err}`)
	})

const updateMemberById = async (memberId, memberData) =>
	MemberModel.findByIdAndUpdate(
		memberId,
		memberData,
		{ new: true }
	).catch(err => {
		console.log("Error updating member", err)
		throw new Error(`Error updating member: ${err}`)
	})

const softDeleteMemberById = async memberId =>
	MemberModel.findByIdAndUpdate(
		memberId,
		{ deleted_at: new Date() },
		{ new: true }
	).catch(err => {
		console.log("Error deleting member", err)
		throw new Error(`Error deleting member: ${err}`)
	})

module.exports = {
	getMembers,
	getMembersByClientId,
	createMember,
	updateMemberById,
	softDeleteMemberById
}