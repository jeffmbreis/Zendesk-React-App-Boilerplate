import { GET_TICKET_REQUESTER_SUCCESS } from "../actions/ticketRequester";

const INITIAL_STATE = {};

export default function users(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_TICKET_REQUESTER_SUCCESS:
      return { ...state, requester: action.payload };
    default:
      return state;
  }
}
