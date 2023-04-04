import { EmptyObject } from '@/types/common';
import { RegisteredPlayer } from '@/types/model';
import { POSITION } from '@prisma/client';
import { defineStore } from 'pinia';
export const usePlayerStore = defineStore<
	'player',
	{ isLoading: boolean; players: RegisteredPlayer[] },
	EmptyObject,
	{ fetchPlayers: () => Promise<RegisteredPlayer[]> }
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
					this.players = [
						{
							id: '1',
							name: '任鋒韜',
							no: 8,
							position: POSITION.OH,
							height: null,
							weight: null,
						},
						{
							id: '2',
							name: '鄭宗霖',
							no: 13,
							position: POSITION.OP,
							height: null,
							weight: null,
						},
						{
							id: '3',
							name: '李爵任',
							no: 18,
							position: POSITION.MB,
							height: null,
							weight: null,
						},
					];
					resolve(this.players);
				}, 3000)
			);
		},
	},
});
