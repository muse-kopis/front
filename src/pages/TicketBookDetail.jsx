import React from 'react';
import BookDetailHeader from '../components/pages/bookDetail/BookDetailHeader';
import TicketBook from '../components/pages/bookDetail/TicketBook';
import { Div } from '../components/common/div';
import { GRAY1 } from '../constants/color';

const TicketBookDetail = () => {
  return (
    <Div $backgroundColor={GRAY1} $height='100vh'>
      <BookDetailHeader />
      <Div $flex={true}>
        <TicketBook />
      </Div>
    </Div>
  )
}

export default TicketBookDetail;