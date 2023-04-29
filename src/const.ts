import { ACTION, VALIDATION } from '@/types/enum';

export const cActionDisplayReference: Record<ACTION, string> = {
	[ACTION.ACE]: '發球得分',
	[ACTION.KILL]: '攻擊得分',
	[ACTION.BLOCK]: '欄網得分',
	[ACTION.SERVICE_NOT_IN]: '發球沒過',
	[ACTION.SERVICE_OUTBALL]: '發球出界',
	[ACTION.SPIKE_NOT_IN]: '攻擊掛網',
	[ACTION.SPIKE_OUTBALL]: '攻擊出界',
	[ACTION.TOUCH_OUT]: '打手出界',
	[ACTION.TIP]: '吊球',
};

export const cValidationDisplayReference: Record<VALIDATION, string> = {
	[VALIDATION.NET_TOUCH]: '觸網犯規',
	[VALIDATION.FOOT_FAULT]: '打手出界',
	[VALIDATION.DOUBLE_CONTACT]: '連擊',
	[VALIDATION.CATCH]: '持球',
	[VALIDATION.CENTER_LINE_FAULT]: '越中線犯規',
	[VALIDATION.POSITION_FAULT]: '輪轉錯誤',
	[VALIDATION.DELAY_IN_SERVICE]: '發球超時',
	[VALIDATION.FOUR_HITS]: '四擊',
	[VALIDATION.REACHING_BEYOND_THE_NET]: '越網擊球',
	[VALIDATION.ATTACK_HIT_FAULT]: '後排犯規',
};
