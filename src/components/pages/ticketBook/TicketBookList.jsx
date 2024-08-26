import React from "react";
import EmptyTicketBookList from "./EmptyTicketBookList";
import { Div } from "../../common/div";
import TicketBookItem from "./TicketBookItem";

const TicketBookList = () => {

  return (
    <Div $padding='17px 32px'>
      <Div $flex={true} $justify='start' $gap='32px 16px' $wrap={true}>
        <TicketBookItem /> 
        <TicketBookItem /> 
        <TicketBookItem /> 
      </Div>
      {/* <EmptyTicketBookList /> */}
    </Div>
  )
}

export default TicketBookList;