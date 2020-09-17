import zafClient from '../../api/zafClient';

const GET_TICKET_REQUESTER_SUCCESS = "GET_TICKET_REQUESTER_SUCCESS"

export function getTicketRequesterSuccess(ticketRequester) {
  return {
    type: GET_TICKET_REQUESTER_SUCCESS,
    payload: ticketRequester,
  };
}

export const getTicketRequester = () => dispatch => {
  zafClient.get('ticket.requester').then(function(data) {
    const requester = data['ticket.requester'];

    dispatch(getTicketRequesterSuccess(requester));
  });
};
