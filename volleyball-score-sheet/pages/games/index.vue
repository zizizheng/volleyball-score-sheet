<template>
	<div>
		{{ JSON.stringify(games) }}
	</div>
</template>
<script>
import { useGameStore } from '@/stores/game';
const gameStore = useGameStore();

export default {
	setup() {
		gameStore.fetchGames();
		return {};
	},
	data() {
		return {
			games: gameStore.games,
		};
	},
};
</script>
<style lang=""></style>
