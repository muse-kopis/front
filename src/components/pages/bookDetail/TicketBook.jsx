import React from 'react';
import styled from 'styled-components';
import { Div } from '../../common/div';
import { TicketBookCover } from '../../../assets/ticketbook';
import Ticket from './Ticket';
import Polaroid from './Polaroid';
import Receipt from './Receipt';
import TicketModal from '../../modal/TicketModal';
import ImageModal from '../../modal/ImageModal';
import ReceiptModal from '../../modal/ReceiptModal';

const Book = styled(Div)`
  background-image: url(${TicketBookCover});
  background-size: cover;
  background-position: center;
  flex-grow: 0;
  width: 312px;
  height: 420px;
  margin: 67px 0;
  position: relative;
`;

const TicketBook = () => {
  return (
    <>
      <Book>
        <Polaroid />
        <Receipt />
        <Ticket />
      </Book>
      {/* <ImageModal /> */}
      {/* <TicketModal /> */}
      {/* <ReceiptModal /> */}
    </>
  )
}

export default TicketBook;