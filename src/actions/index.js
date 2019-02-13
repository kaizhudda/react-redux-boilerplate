import { 
  GET_PLAYER_DETAILS 
} from './types'

export const fetchPlayer = (player) => dispatch => {
  console.log('fetching player..');
  dispatch({ type: GET_PLAYER_DETAILS, payload: 'JJ Redick'});
}

