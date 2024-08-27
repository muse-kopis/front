import React from 'react';
import BookDetailHeader from '../components/pages/bookDetail/BookDetailHeader';
import TicketBook from '../components/pages/bookDetail/TicketBook';
import { Div } from '../components/common/div';
import { GRAY1 } from '../constants/color';
import { useTicketBookDetail } from '../hooks/TicketBookDetailHooks';

const TicketBookDetail = () => {
  const {
    id,
    data,
    color,
    modal,
    setModal,
  } = useTicketBookDetail();

  return (
    <Div $backgroundColor={GRAY1} $height='100vh'>
      <BookDetailHeader id={id} />
      <Div $flex={true}>
        <TicketBook
          data={data}
          setModal={setModal}
          modal={modal}
          color={color}
        />
      </Div>
    </Div>
  )
}

export default TicketBookDetail;