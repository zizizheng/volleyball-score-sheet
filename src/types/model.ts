import { ACTION, POSITION, VALIDATION } from '@/types/enum';

/** 一場比賽 */
export interface Game extends SystemInfo {
	/** 我方隊伍名稱 */
	homeTeam: string;
	/** 對手隊伍名稱 */
	awayTeam: string;
	/** 是否獲勝 */
	isWin?: boolean;
	/** 每局資料 */
	sets: Set[];
	matchedAt: Date;
	/** 此場比賽初賽球員，包括外援 */
	registerPlayers: (Pick<Player, 'no'> & { isAid?: true })[];
}

/** 每局資料 */
export interface Set {
	no: number;
	homeScore?: number;
	awayScore?: number;
	/** 初始輪轉位置，最多 7 人 */
	order: [number, number, number, number, number, number, number];
	points?: Point[];
	/** 局數時間（分） */
	setTime?: number;
}

/** 比分資料 */
export interface Point {
	responsePlayerNo?: number;
	result: ACTION | VALIDATION;
	score: boolean;
	/** 得分位置 */
	order?: number;
}

export interface Player extends SystemInfo {
	name: string;
	no: number;
	position: POSITION;
}

export interface Team extends SystemInfo {
	name: string;
	players: Player[];
}

export interface SystemInfo {
	id: number;
	createdAt?: Date;
	updatedAt?: Date;
}
