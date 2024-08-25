import React, { useEffect } from "react";
import styled from "styled-components";
import EmptyTicketBookList from "./EmptyTicketBookList";
import { Div, Text } from "../../common/div";
import useColorThief from 'use-color-thief';
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