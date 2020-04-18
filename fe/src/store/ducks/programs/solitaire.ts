import cards from 'resources/cards/index';
import shuffle from 'utils/shuffle';
import createPiles from 'utils/createPiles';

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

interface Action {
  type: string;
  payload: any;
}

interface State {
  games: {
    [id: string]: {
      piles: [any];
      deal: [any];
      foundation: [[any]];
    };
  };
}
