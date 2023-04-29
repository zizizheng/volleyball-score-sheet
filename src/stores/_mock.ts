import { ACTION, POSITION, VALIDATION } from '@/types/enum';
import { Game, Player } from '@/types/model';
import { dayjs } from 'element-plus';
export const cMockGames: Game[] = [
	{
		id: 1,
		homeTeam: 'Toss',
		awayTeam: 'A',
		createdAt: new Date(),
		isWin: false,
		matchedAt: dayjs('2023-04-09 15:00').toDate(),
		registerPlayers: [
			{ no: 1 },
			{ no: 2, isAid: true },
			{ no: 3, isAid: true },
			{ no: 8 },
			{ no: 9, isAid: true },
			{ no: 13, isAid: true },
			{ no: 17 },
			{ no: 18 },
			{ no: 20 },
		],
		sets: [
			{
				no: 1,
				homeScore: 19,
				awayScore: 25,
				order: [18, 9, 17, 2, 3, 1, 20],
				points: [
					{ result: ACTION.KILL, score: false, order: 2 },
					{ result: ACTION.KILL, score: false, order: 4 },
					{ result: ACTION.SERVICE_NOT_IN, score: true },
					{ result: ACTION.TOUCH_OUT, score: false, order: 3 },
					{ result: ACTION.KILL, score: false, order: 3, responsePlayerNo: 2 },
					{ result: ACTION.TIP, score: false },
					{ result: VALIDATION.FOUR_HITS, score: true, order: 2 },
					{ result: ACTION.SERVICE_NOT_IN, score: false, responsePlayerNo: 2 },
					{ result: ACTION.KILL, score: true, responsePlayerNo: 1 },
				],
			},
		],
	},
];

export const cMockPlayers: Player[] = [
	{
		id: 1,
		name: '任鋒韜',
		no: 8,
		position: POSITION.OH,
	},
	{
		id: 2,
		name: '鄭宗霖',
		no: 13,
		position: POSITION.OP,
	},
	{
		id: 3,
		name: '李爵任',
		no: 18,
		position: POSITION.MB,
	},
];
