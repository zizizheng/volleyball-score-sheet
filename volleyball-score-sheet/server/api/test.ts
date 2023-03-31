import { PrismaClient } from '@prisma/client'

const prismaClient = new PrismaClient()

export default defineEventHandler(() => {
	const game = prismaClient.game.create({
		data: {
			id: '1',
			opponent: 'opponent',
		}
	})

	return game
})