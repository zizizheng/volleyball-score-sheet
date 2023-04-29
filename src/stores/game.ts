import { Game } from '@/types/model';
import { defineStore } from 'pinia';
import { EmptyObject } from '@/types/common';
import { cMockGames } from '@/stores/_mock';

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
