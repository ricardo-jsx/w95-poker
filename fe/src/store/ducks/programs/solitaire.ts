import cards from 'resources/cards/index';
import shuffle from 'utils/shuffle';
import createPiles from 'utils/createPiles';

import type { RootState } from 'store';

const INITIAL_STATE: State = {
  games: {},
};

export default function (state = INITIAL_STATE, action: Action) {
  switch (action.type) {
    case 'NEW_GAME': {
      const shuffledCards = shuffle(cards, Math.random);
      const { piles, length } = createPiles(shuffledCards, 7);

      const newGame = {
        piles,
        deal: shuffledCards.slice(length),
        foundation: [[], [], [], []],
      };

      return { ...state, games: { ...state.games, [action.payload]: newGame } };
    }

    default:
      return state;
  }
}

export const createNewGame = (processId: string): Action => ({ type: 'NEW_GAME', payload: processId });
export const getGameByProcessId = (processId: string) => (state: RootState): Game =>
  state.programs.solitaire.games[processId];

interface Action {
  type: string;
  payload: any;
}

type Game = {
  piles: [any];
  deal: [any];
  foundation: [[any]];
};

interface State {
  games: {
    [id: string]: Game;
  };
}
