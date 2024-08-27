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
  margin: 114px 0;
  position: relative;
`;

const TicketBook = ({ data, color, modal, setModal }) => {
  return (
    <>
      <Book>
        <Polaroid
          data={data}
          openModal={() => setModal({ ...modal, image: true })}
        />
        <Receipt
          data={data}
          openModal={() => setModal({ ...modal, receipt: true })}
        />
        <Ticket 
          data={data}
          color={color}
          openModal={() => setModal({ ...modal, ticket: true })}
        />
      </Book>
      <ImageModal 
        isOpen={modal.image && data?.photos.length > 0}
        data={data}
        closeModal={() => setModal({ ...modal, image: false })}
      />
      <TicketModal 
        isOpen={modal.ticket}
        data={data}
        color={color}
        closeModal={() => setModal({ ...modal, ticket: false })}
      />
      <ReceiptModal
        isOpen={modal.receipt}
        data={data}
        closeModal={() => setModal({ ...modal, receipt: false })}
      />
    </>
  )
}

export default TicketBook;