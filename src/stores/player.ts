import { cMockPlayers } from '@/stores/_mock';
import { EmptyObject } from '@/types/common';
import { Player } from '@/types/model';
import { defineStore } from 'pinia';
export const usePlayerStore = defineStore<
	'player',
	{ isLoading: boolean; players: Player[] },
	EmptyObject,
	{ fetchPlayers: () => Promise<Player[]> }
>('player', {
	state: () => ({
		isLoading: false,
		players: [],
	}),
	actions: {
		async fetchPlayers() {
			this.isLoading = true;
			return new Promise((resolve) =>
				setTimeout(() => {
					this.isLoading = false;
					this.players = cMockPlayers;
					resolve(this.players);
				}, 3000)
			);
		},
	},
});
