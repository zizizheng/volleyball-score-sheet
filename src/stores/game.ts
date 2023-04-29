import { Game } from '@/types/model';
import { defineStore } from 'pinia';
import { EmptyObject } from '@/types/common';
const cMockGames: Game[] = [
	{
		id: '1',
		opponent: 'A',
		matchedAt: new Date(),
		createdAt: new Date(),
		updatedAt: null,
		playerIds: [],
		sets: [
			{
				id: '1',
				no: 1,
				score: 25,
				opponentScore: 23,
				createdAt: new Date(),
				updatedAt: null,
				points: [],
			},
		],
	},
	{
		id: '1',
		opponent: 'A',
		matchedAt: new Date(),
		createdAt: new Date(),
		updatedAt: null,
		playerIds: [],
		sets: [
			{
				id: '1',
				no: 1,
				score: 25,
				opponentScore: 23,
				createdAt: new Date(),
				updatedAt: null,
				points: [],
			},
		],
	},
	{
		id: '1',
		opponent: 'A',
		matchedAt: new Date(),
		createdAt: new Date(),
		updatedAt: null,
		playerIds: [],
		sets: [
			{
				id: '1',
				no: 1,
				score: 25,
				opponentScore: 23,
				createdAt: new Date(),
				updatedAt: null,
				points: [],
			},
		],
	},
];

export const useGameStore = defineStore<'game', { games: Game[] }, EmptyObject, { fetchGames: () => Promise<Game[]> }>(
	'game',
	{
		state: () => ({
			games: cMockGames,
		}),
		actions: {
			async fetchGames() {
				this.games = cMockGames;
				return this.games;
			},
		},
	}
);
