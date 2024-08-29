import React from 'react';
import BookDetailHeader from '../components/pages/bookDetail/BookDetailHeader';
import TicketBook from '../components/pages/bookDetail/TicketBook';
import { Div } from '../components/common/div';
import { GRAY1 } from '../constants/color';
import { useTicketBookDetail } from '../hooks/TicketBookDetailHooks';
import TicketBookDeleteModal from '../components/modal/TicketBookDeleteModal';

const SharedTicketBookDetail = () => {
  const {
    id,
    data,
    color,
    modal,
    setModal,
    goTicketBookEdit,
    deleteTicketBook,
  } = useTicketBookDetail();
  
  return (
    <Div $backgroundColor={GRAY1} $height='100vh'>
      <BookDetailHeader 
        isShared={true}
        id={id}
        data={data}
        goEdit={goTicketBookEdit}
        modal={modal}
        setModal={setModal}
      />
      <Div $flex={true}>
        <TicketBook
          data={data}
          setModal={setModal}
          modal={modal}
          color={color}
        />
      </Div>
      <TicketBookDeleteModal 
        isOpen={modal.delete}
        closeModal={() => setModal({ ...modal, delete: false })}
        handleDelete={deleteTicketBook}
      />
    </Div>
  )
}

export default SharedTicketBookDetail;