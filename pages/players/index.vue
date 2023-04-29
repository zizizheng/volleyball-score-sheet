<template >
	<div>
		{{ JSON.stringify(players) }}
	</div>
</template>
<script>
import { usePlayerStore } from '@/stores/player';
const playerStore = usePlayerStore();

export default {
	setup() {
		playerStore.fetchPlayers();
		return {}
	},
	data() {
		return {
			players: playerStore.players,
		}
	},
}
</script>
<style lang="">

</style>