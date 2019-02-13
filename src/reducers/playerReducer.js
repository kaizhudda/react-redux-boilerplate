import { GET_PLAYER_DETAILS } from '../actions/types'

export default (state = {}, action) => {
  switch(action.type) {
    case GET_PLAYER_DETAILS:
      return { ...state, player: action.payload };
    default:
      return state;
  }
};
