<template>
	<div class="box" :class="{ 'not-ready': props.notReady }" @click="!props.notReady && handleNav(props.routerName)">
		<el-icon :size="40" color="">
			<slot />
		</el-icon>
		<p>{{ props.title }}</p>
	</div>
</template>
<script setup lang="ts">
const props = defineProps<{
	title: string
	routerName: string
	notReady?: boolean
}>()
</script>
<script lang="ts">

export default {
	data() {
		const router = useRouter();
		return {
			handleNav: (path: string) => router.push(path)
		}
	},
}
</script>
<style scoped lang="scss">
@import 'assets/scss/var.scss';

.box {
	width: 150px;
	height: 150px;
	border-radius: 5px;
	border: 1px solid $theme-color;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	* {
		color: $theme-color;
	}
}

.not-ready {
	border-color: lightgrey;

	* {
		color: lightgray;
	}
}
</style>