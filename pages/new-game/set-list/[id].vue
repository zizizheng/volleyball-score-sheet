<template>
	<div class="wrapper">
		<ElCard v-if="Array.isArray(sets)" v-for="({ no, score, opponentScore }, index) in sets" :key="index">
			<div class="card-header">第 {{ no }} 局 {{ score }} v.s. {{ opponentScore }}</div>
		</ElCard>
		<ElButton class="new-set-btn" type="primary" @click="handleNewSet">開啟新局</ElButton>
	</div>
</template>
<script>
import { useGameStore } from '@/stores/game';
const gameStore = useGameStore();
const router = useRouter();
export default {
	setup() {
		const route = useRoute();
		return {
			sets: gameStore.games.find((game) => game.id === route.params.id)?.sets,
		};
	},
	methods: {
		handleNewSet() {
			router.push('/new-game/new-set/' + this.sets.length);
		},
	},
};
</script>
<style lang="scss">
@import 'assets/scss/var.scss';

.wrapper {
	margin: $margin-medium;
}
.card-header {
	display: flex;
	justify-content: space-between;
}
.new-set-btn {
	width: 100%;
	margin-top: $margin-medium;
}
</style>
