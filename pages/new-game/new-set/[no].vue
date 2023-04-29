<template>
	<div class="wrapper">
		<div class="score-container">
			<div class="score-display">
				<div class="score">{{ myScore }}</div>
				<div class="score">{{ oppScore }}</div>
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
		<ElDialog v-model="dialogVisible" title="Tips" width="30%" draggable>
			<span>{{ score ? '我方' : '對方' }}得分</span>
			<template #footer>
				<span class="dialog-footer">
					<ElButton>Cancel</ElButton>
					<ElButton type="primary"> Confirm </ElButton>
				</span>
			</template>
		</ElDialog>
	</div>
</template>
<script lang="ts">
import { EmptyObject } from '@/types/common';
import { Point } from '@/types/model';
import { sumBy } from 'lodash';

export default defineNuxtComponent<
	EmptyObject,
	{ myScore: number; oppScore: number },
	{ points: Point[]; dialogVisible: boolean; score?: boolean }
>({
	data() {
		return {
			points: [],
			dialogVisible: false,
			score: undefined,
		};
	},
	methods: {
		record(score: boolean) {
			this.dialogVisible = true;
			this.score = score;
		},
	},
	computed: {
		myScore: function () {
			return sumBy(this.points, (point) => (point.score ? 1 : 0));
		},
		oppScore: function () {
			return sumBy(this.points, (point) => (point.score ? 0 : 1));
		},
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
