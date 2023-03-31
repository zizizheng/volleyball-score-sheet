<template>
	<div :class="$style.wrapper" v-show="password === null">
		<img :class="$style.icon" src="toss.png" />
		<div>
			<h2>NVA 計分板 - 透視物理治療</h2>
		</div>
		<div :class="$style.login">
			<ElInput v-model="input" />
			<ElButton type="primary" @click="handleLogin">登入</ElButton>
		</div>

	</div>
	<div v-show="password !== null">
		<NuxtLink to="/members">隊員</NuxtLink>
		<br />
		<NuxtLink to="/games">歷史賽局</NuxtLink>
	</div>
</template>
<script>
export default {
	data() {
		return {
			input: null,
			password: null,
			handleLogin: () => {
				if(this.input !== 'tossphysio') {
					alert('密碼錯誤');
					this.input = '';
				}
				else this.password = this.input;
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
</style>