<template>
	<div class="wrapper">
		<div class="score-container">
			<div class="score-display">
				<div class="score">20</div>
				<div class="score">23</div>
			</div>
			<ElTable fit size="small" empty-text="尚未開局" height="350">
				<ElTableColumn label="我方得分" width="160" align="center">
					<template #default="scope">
						<div v-if="scope.row.score === true">
							<ElTag>{{ scope.row.action }}</ElTag>
						</div>
					</template>
				</ElTableColumn>
				<ElTableColumn label="" align="center" width="30" />
				<ElTableColumn label="對方得分" width="160" align="center">
					<template #default="scope">
						<div v-if="scope.row.score === false">
							<ElTag>{{ scope.row.action }}</ElTag>
						</div>
					</template>
				</ElTableColumn>
			</ElTable>
		</div>
		<div>
			<ElButton>輪轉表</ElButton>
			<ElButton>戰術統計</ElButton>
		</div>
		<div class="score-btn-container">
			<ElButton type="primary" size="large" class="score-btn">得分</ElButton>
			<ElButton type="info" size="large" class="score-btn">失分</ElButton>
		</div>
	</div>
</template>
<script lang="ts">
import { EmptyObject } from '@/types/common';
import { NewHistory } from '@/types/model';

export default defineNuxtComponent<EmptyObject, EmptyObject, { histories: NewHistory[] }>({
	data() {
		return {
			histories: [
				{
					score: true,
					responsePlayer: null,
					action: ACTION.ACE,
				},
				{
					score: false,
					responsePlayer: null,
					action: ACTION.BLOCK,
				},
				{
					score: false,
					responsePlayer: null,
					action: ACTION.CENTER_LINE_FAULT,
				},
				{
					score: true,
					responsePlayer: null,
					action: ACTION.KILL,
				},
				{
					score: true,
					responsePlayer: null,
					action: ACTION.ACE,
				},
				{
					score: false,
					responsePlayer: null,
					action: ACTION.ACE,
				},
				{
					score: false,
					responsePlayer: null,
					action: ACTION.ACE,
				},
				{
					score: true,
					responsePlayer: null,
					action: ACTION.ACE,
				},
			],
		};
	},
});
</script>
<style lang="scss">
@import 'assets/scss/index.scss';
.wrapper {
	height: 100vh;
	padding: $margin-medium;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}
.score-display {
	width: 100%;
	display: flex;
	justify-content: space-between;
}
.score {
	width: 160px;
	height: 160px;
	border: 1px solid $theme-color;
	border-radius: 4px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 100px;
}
.score-btn-container {
	display: flex;
	justify-content: space-between;
}
.score-btn {
	width: 160px;
	height: 160px;
	font-size: 40px;
}
</style>
