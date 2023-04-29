<template>
	<ElForm :model="form" label-position="top" class="form">
		<h3>建立新比賽</h3>
		<ElFormItem label="對手">
			<ElInput v-model="form.awayTeam" />
		</ElFormItem>
		<ElFormItem label="比賽時間">
			<ElDatePicker v-model="form.matchedAt" type="datetime" placeholder="選擇時間" />
		</ElFormItem>
		<ElFormItem label="出賽選手">
			<h3 v-if="isLoading">讀取球員中</h3>
			<h3 v-if="!isLoading && players.length === 0">沒有內建球員</h3>
			<ElTable v-if="!isLoading && players.length !== 0" ref="tableRef" :data="players" style="width: 100%">
				<ElTableColumn type="selection" />
				<ElTableColumn prop="name" label="姓名" />
				<ElTableColumn prop="no" label="背號" />
				<ElTableColumn prop="position" label="位置" />
				<ElTableColumn label="外援">
					<template #default="scope">
						<ElCheckTag :checked="foreignAid[scope.row.name]" @change="onCheckChange(scope.row.name)">{{
							foreignAid[scope.row.name] ? '是' : '否'
						}}</ElCheckTag>
					</template>
				</ElTableColumn>
			</ElTable>
		</ElFormItem>
		<ElFormItem class="btn-group">
			<ElButton @click="onCancel">取消</ElButton>
			<ElButton type="primary" @click="onSubmit">建立比賽</ElButton>
		</ElFormItem>
	</ElForm>
</template>

<script lang="ts" setup>
import { usePlayerStore } from '@/stores/player';
import { Game } from '@/types/model';
import { ElTable } from 'element-plus';
import { storeToRefs } from 'pinia';
import { reactive, ref } from 'vue';

const router = useRouter();
const playerStore = usePlayerStore();
playerStore.fetchPlayers();
const { players, isLoading } = storeToRefs(playerStore);
const form = reactive<Partial<Game>>({
	awayTeam: '',
	matchedAt: new Date(),
});

const tableRef = ref<InstanceType<typeof ElTable>>();
const foreignAid = ref<{ [name: string]: boolean }>({});
const onCheckChange = (name: string) => {
	foreignAid.value[name] = !foreignAid.value[name];
};
const onSubmit = () => {
	console.log('比賽資料');
	console.log(form);
	console.log(tableRef.value?.getSelectionRows());
	console.log(foreignAid);
	// TODO: 替換成 game id
	router.push('/new-game/set-list/1');
};
const onCancel = () => {
	router.push('/');
};
</script>

<style>
.form {
	margin: 16px;
}
.player-card {
	display: flex;
	align-items: center;
	font-size: 20px;
	width: 100%;
	margin-top: 4px;
}
.btn-group {
	display: flex;
	justify-content: space-between;
}
.btn-group button {
	width: 48%;
}
</style>
