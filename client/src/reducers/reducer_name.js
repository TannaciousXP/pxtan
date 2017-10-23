import { FETCH_NAME } from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
  case FETCH_NAME:
    return action.payload;
  default:
    return state;
  }
}
