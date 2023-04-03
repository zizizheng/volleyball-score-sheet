import { defineStore } from 'pinia'

export const useLoginStore = defineStore<'login', { password: string | null }>('login', {
	state: () => ({
		password: null,
	}),
	actions: {
		setPassword(input: string) {
			this.password = input;
		}
	}
})