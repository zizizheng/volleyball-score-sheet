import { Game as _Game, Set as _Set, History } from '@prisma/client';
export type { RegisteredPlayer, POSITION, ACTION, History } from '@prisma/client';

export interface SingleSet extends Omit<_Set, 'gameId'> {
	histories: History[];
}

export interface Game extends _Game {
	sets: SingleSet[];
}

export type NewHistory = Pick<History, 'score' | 'responsePlayer' | 'action'>;
