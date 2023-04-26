const memberRepository = require('./memberRepository')

const getMembers = async () => {
	try {
		return await memberRepository.getMembers()
	} catch (err) {
		throw err
	}
}

const getMembersByClientId = async (clientId) => {
	try {
		return await memberRepository.getMembersByClientId(clientId)
	} catch (err) {
		throw err
	}
}


const createMember = async member => {
	try {
		return await memberRepository.createMember(member)
	} catch (err) {
		throw err
	}
}

const updateMemberById = async (memberId, member) => {
	try {
		return await memberRepository.updateMemberById(memberId, member)
	} catch (err) {
		throw err
	}
}

const changeClientByMemberId = async (memberId, clientId) => {
	try {
		return await memberRepository.updateMemberById(memberId, clientId)
	} catch (err) {
		throw err
	}
}

const deleteMemberById = async memberId => {
	try {
		await memberRepository.softDeleteMemberById(memberId)
	} catch (err) {
		throw err
	}
}

module.exports = {
	getMembers,
	getMembersByClientId,
	createMember,
	updateMemberById,
	changeClientByMemberId,
	deleteMemberById
}