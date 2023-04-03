import { RegisteredPlayer } from '@/types/model';
import { POSITION } from '@prisma/client';
import { defineStore } from 'pinia';
type EmptyObject = Record<never, never>;
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
					resolve([
						{
							id: '1',
							name: 'A',
							no: 1,
							position: POSITION.OP,
							height: null,
							weight: null,
						},
						{
							id: '1',
							name: 'A',
							no: 1,
							position: POSITION.OP,
							height: null,
							weight: null,
						},
						{
							id: '1',
							name: 'A',
							no: 1,
							position: POSITION.OP,
							height: null,
							weight: null,
						},
					]);
				}, 3000)
			);
		},
	},
});
