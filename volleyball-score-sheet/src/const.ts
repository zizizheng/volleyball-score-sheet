import { ACTION } from '@prisma/client';

export const cActionDisplayReference: Record<ACTION, string> = {
	[ACTION.ACE]: '發球得分',
	[ACTION.KILL]: '攻擊得分',
	[ACTION.BLOCK]: '欄網得分',
	[ACTION.SERVICE_NOT_IN]: '發球沒過',
	[ACTION.SERVICE_OUTBALL]: '發球出界',
	[ACTION.SPIKE_NOT_IN]: '攻擊掛網',
	[ACTION.SPIKE_OUTBALL]: '攻擊出界',
	[ACTION.TOUCH_OUT]: '打手出界',
	[ACTION.NET_VALIDATION]: '觸網犯規',
	[ACTION.FOOT_FAULT]: '足部犯規',
	[ACTION.DOUBLE_CONTACT]: '連擊',
	[ACTION.LIFT]: '持球',
	[ACTION.CENTER_LINE_FAULT]: '越中線犯規',
	[ACTION.POSITION_FAULT]: '輪轉錯誤',
};
