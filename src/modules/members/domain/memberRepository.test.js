
describe('memberRepository', () => {
	describe('getMembers', () => {

		describe('When there is data', () => {
			const expectedOutput = [
				{
					"_id": "64450956e59f674b8bac6faf",
					"client_id": "6444745e051a84c0c0f4c559",
					"name": "ROBERTO JUÑEZ",
					"phone_number": "1134224334",
					"email": "claudio@gmail.com",
					"created_at": "2023-04-23T10:32:02.939Z",
					"updated_at": "2023-04-23T10:32:02.939Z",
					"deleted_at": null,
					"notes": []
				}
			];
			let result
			let memberRepositoryMock
			beforeAll(async () => {
				memberRepositoryMock = {
					getMembers: jest.fn().mockResolvedValue(expectedOutput)
				};
				result = await memberRepositoryMock.getMembers();
			})

			it("Should return an array with the expected data", async () => {
				expect(memberRepositoryMock.getMembers).toHaveBeenCalledTimes(1);
				expect(Array.isArray(result)).toBe(true);
				expect(!!result.length).toBe(true);
				expect(result).toEqual(expectedOutput);
			});
		})

		describe('When there is no data', () => {
			const expectedOutput = [];
			let result
			let memberRepositoryMock
			beforeAll(async () => {
				memberRepositoryMock = {
					getMembers: jest.fn().mockResolvedValue(expectedOutput)
				};
				result = await memberRepositoryMock.getMembers();
			})
			it("Should return an empty array", async () => {
				expect(memberRepositoryMock.getMembers).toHaveBeenCalledTimes(1);
				expect(Array.isArray(result)).toBe(true);
				expect(!!result.length).toBe(false);
				expect(result).toEqual(expectedOutput);
			});
		})

		describe('When there is an error', () => {
			const expectedError = new Error("Error getting members");
			let memberRepositoryMock
			beforeAll(async () => {
				memberRepositoryMock = {
					getMembers: jest.fn().mockRejectedValue(expectedError)
				};
			})
			it("Should throw the expected error", async () => {
				await expect(memberRepositoryMock.getMembers()).rejects.toThrow(expectedError);
				expect(memberRepositoryMock.getMembers).toHaveBeenCalledTimes(1);
			});
		})
	})

	describe('createMember', () => {

		describe("When successful", () => {
			const expectedOutput = {
				"client_id": "6444745e051a84c0c0f4c559",
				"name": "ROBERTO JUÑEZ",
				"phone_number": "1134224334",
				"email": "claudio@gmail.com",
				"created_at": "2023-04-25T21:20:05.441Z",
				"updated_at": "2023-04-25T21:20:05.441Z",
				"deleted_at": null,
				"_id": "6448440a2e0e1ed9d4d0ce96"
			};

			let result
			let memberRepositoryMock
			beforeAll(async () => {
				memberRepositoryMock = {
					createMember: jest.fn().mockResolvedValue(expectedOutput)
				};
				result = await memberRepositoryMock.createMember();
			})

			it("Should return a member entity", () => {
				expect(memberRepositoryMock.createMember).toHaveBeenCalledTimes(1);
				expect(typeof result).toBe('object');
				expect(!!Object.keys(result).length).toBe(true);
				expect(result).toEqual(expectedOutput);
			})

		})

		describe('When there is an error', () => {
			const expectedError = new Error("Error creating member");
			let memberRepositoryMock
			beforeAll(async () => {
				memberRepositoryMock = {
					createMember: jest.fn().mockRejectedValue(expectedError)
				};
			})
			it("Should throw the expected error", async () => {
				await expect(memberRepositoryMock.createMember()).rejects.toThrow(expectedError);
				expect(memberRepositoryMock.createMember).toHaveBeenCalledTimes(1);
			});
		})
	})

	describe('updateMemberById', () => {

		describe("When successful", () => {
			const expectedOutput = {
				"_id": "6448597014fbd149f4cc44f1",
				"client_id": "6444745e051a84c0c0f4c559",
				"name": "ROBERTO JUÑEZ",
				"phone_number": "1134224334",
				"email": "claudio@gmail.com",
				"created_at": "2023-04-25T22:51:07.752Z",
				"updated_at": "2023-04-25T22:51:07.752Z",
				"deleted_at": null
			};

			let result
			let memberRepositoryMock
			beforeAll(async () => {
				memberRepositoryMock = {
					updateMemberById: jest.fn().mockResolvedValue(expectedOutput)
				};
				result = await memberRepositoryMock.updateMemberById();
			})

			it("Should return a member entity", () => {
				expect(memberRepositoryMock.updateMemberById).toHaveBeenCalledTimes(1);
				expect(typeof result).toBe('object');
				expect(!!Object.keys(result).length).toBe(true);
				expect(result).toEqual(expectedOutput);
			})

		})

		describe('When there is an error', () => {
			const expectedError = new Error("Error updating member");
			let memberRepositoryMock
			beforeAll(async () => {
				memberRepositoryMock = {
					updateMemberById: jest.fn().mockRejectedValue(expectedError)
				};
			})
			it("Should throw the expected error", async () => {
				await expect(memberRepositoryMock.updateMemberById()).rejects.toThrow(expectedError);
				expect(memberRepositoryMock.updateMemberById).toHaveBeenCalledTimes(1);
			});
		})
	})


	describe('softDeleteMemberById', () => {

		describe("When successful", () => {
			let memberRepositoryMock
			beforeAll(async () => {
				memberRepositoryMock = {
					softDeleteMemberById: jest.fn().mockResolvedValue()
				};
				result = await memberRepositoryMock.softDeleteMemberById();
			})

			it("Should execute", () => {
				expect(memberRepositoryMock.softDeleteMemberById).toHaveBeenCalledTimes(1);
			})

		})

		describe('When there is an error', () => {
			const expectedError = new Error("Error deleting member");
			let memberRepositoryMock
			beforeAll(async () => {
				memberRepositoryMock = {
					softDeleteMemberById: jest.fn().mockRejectedValue(expectedError)
				};
			})
			it("Should throw the expected error", async () => {
				await expect(memberRepositoryMock.softDeleteMemberById()).rejects.toThrow(expectedError);
				expect(memberRepositoryMock.softDeleteMemberById).toHaveBeenCalledTimes(1);
			});
		})
	})

})
