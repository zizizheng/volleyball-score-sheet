<template>
	<div :class="$style.wrapper" v-show="false">
		<!-- <div :class="$style.wrapper" v-show="loginStore.password === null"> -->
		<img :class="$style.icon" src="toss.png" />
		<div>
			<h2>NVA 計分板 - 透視物理治療</h2>
		</div>
		<div :class="$style.login">
			<ElInput v-model="input" />
			<ElButton type="primary" @click="handleLogin">登入</ElButton>
		</div>

	</div>
	<div :class="$style.menu" v-show="true">
		<!-- <div v-show="loginStore.password !== null"> -->
		<ClickBox title="隊員" router-name="/players">
			<User />
		</ClickBox>
		<ClickBox title="歷史賽局" router-name="/games" :not-ready="true">
			<Calendar />
		</ClickBox>
		<ClickBox title="建立比賽" router-name="/start" :not-ready="true">
			<Calendar />
		</ClickBox>
	</div>
</template>
<script>
import ClickBox from '../src/components/ClickBox.vue';
import { useLoginStore } from "@/stores/login";
import { User } from '@element-plus/icons-vue'
import { Calendar } from '@element-plus/icons-vue'

export default {
	components: { ClickBox, User, Calendar },
	setup: () => ({ loginStore: useLoginStore() }),
	data() {
		return {
			input: null,
			handleLogin: () => {
				if(this.input !== 'tossphysio') {
					alert('密碼錯誤');
					this.input = '';
				}
				else loginStore.setPassword(this.input);
			}
		}
	},
}
</script>
<style module scoped>
.wrapper {
	display: flex;
	align-items: center;
	justify-content: space-around;
	flex-direction: column;
	min-height: 100vh;
}

.login {
	display: flex;
	flex-direction: column;
	margin-top: 200px;
}

.login button {
	margin-top: 8px;
}

.icon {
	width: 200px;
}

.menu {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	row-gap: 16px;
	margin: 16px;
}
</style>