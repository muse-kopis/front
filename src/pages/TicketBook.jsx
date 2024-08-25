import React, { useState } from "react";
import TicketBookHeader from "../components/pages/ticketBook/TicketBookHeader";
import EmptyTicketBookList from "../components/pages/ticketBook/EmptyTicketBookList";
import Navigation from "../components/common/Navigation";
import Toggle from "../components/pages/ticketBook/Toggle";
import { Div } from "../components/common/div";

const TicketBook = () => {
  const [isBook, setIsBook] = useState(true);
  return (
    <>
      <TicketBookHeader />
      <Div $flex={true} $padding='0 18px'>
        <Toggle
          isBook={isBook}
          setIsBook={setIsBook}         
        />
      </Div>
      {isBook ? (
        <EmptyTicketBookList />
      ) : (
        <></>
      )}
      <Navigation />
    </>
  )
}

export default TicketBook;