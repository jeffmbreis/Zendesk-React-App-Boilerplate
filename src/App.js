import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getTicketRequester } from "./redux/actions/ticketRequester";

const App = () => {
  const ticketRequester = useSelector(state => state.ticketRequester);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTicketRequester())
  }, [])

  return (
    <div>
      <p>Ticket requester name: {ticketRequester.name}</p>
    </div>
  );
}

export default App;
