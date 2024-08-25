import React, { useState } from "react";
import TicketBookHeader from "../components/pages/ticketBook/TicketBookHeader";
import TicketBookList from "../components/pages/ticketBook/TicketBookList";
import Navigation from "../components/common/Navigation";
import Toggle from "../components/pages/ticketBook/Toggle";
import Calendar from "../components/pages/ticketBook/Calendar";
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
        <TicketBookList />
        // <EmptyTicketBookList />
      ) : (
        <>
        <Calendar />
        </>
      )}
      <Navigation />
    </>
  )
}

export default TicketBook;