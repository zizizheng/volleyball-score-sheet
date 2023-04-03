import { Game } from '@/types/model';
import { defineStore } from 'pinia'
import { ElMessage } from 'element-plus';

export const useGameStore = defineStore<'game', { games: Game[] }, {}, { fetchGames: () => Promise<Game[]> }>('game', {
	state: () => ({
		games: [],
	}),
	actions: {
		fetchGames: async () => {
			ElMessage.error({ message: '123' })
			return [];
		}
	}
})