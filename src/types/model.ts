export enum POSITION {
	OH = 'OH',
	OP = 'OP',
	MB = 'MB',
	S = 'S',
	L = 'L',
}

export enum ACTION {
	ACE = 'ACE',
	KILL = 'KILL',
	BLOCK = 'BLOCK',
	SERVICE_NOT_IN = 'SERVICE_NOT_IN',
	SERVICE_OUTBALL = 'SERVICE_OUTBALL',
	SPIKE_NOT_IN = 'SPIKE_NOT_IN',
	SPIKE_OUTBALL = 'SPIKE_OUTBALL',
	TOUCH_OUT = 'TOUCH_OUT',
	NET_VALIDATION = 'NET_VALIDATION',
	FOOT_FAULT = 'FOOT_FAULT',
	DOUBLE_CONTACT = 'DOUBLE_CONTACT',
	LIFT = 'LIFT',
	CENTER_LINE_FAULT = 'CENTER_LINE_FAULT',
	POSITION_FAULT = 'POSITION_FAULT',
}
export interface Game {
	id: number;
	homeTeam: string;
	awayTeam: string;
	homeScore: number;
	awayScore: number;
	sets: Set[];
}
// export interface SingleSet extends Omit<_Set, 'gameId'> {
// 	histories: History[];
// }

// export interface Game extends _Game {
// 	sets: SingleSet[];
// }

// export type NewHistory = Pick<History, 'score' | 'responsePlayer' | 'action'>;
