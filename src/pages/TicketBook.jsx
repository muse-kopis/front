import React, { useState } from "react";
import TicketBookHeader from "../components/pages/ticketBook/TicketBookHeader";
import TicketBookList from "../components/pages/ticketBook/TicketBookList";
import Navigation from "../components/common/Navigation";
import Toggle from "../components/pages/ticketBook/Toggle";
import Calendar from "../components/pages/ticketBook/Calendar";
import { Div } from "../components/common/div";
import { useTicketBook } from "../hooks/TicketBookHooks";
import { ToastMessage } from "../components/common/Toast";

const TicketBook = () => {
  const {
    yearMonth,
    datas,
    calendarDatas,
    handleShare,
    getTilePoster,
    fetchPosterImage,
    goTicketBookDetail,
    handleActiveStartDateChange,
  } = useTicketBook();

  const [isBook, setIsBook] = useState(true);
  
  return (
    <>
      <TicketBookHeader handleShare={handleShare} />
      <Div $flex={true} $padding='0 18px' $margin='47px 0 0'>
        <Toggle
          isBook={isBook}
          setIsBook={setIsBook}         
        />
      </Div>
      {isBook ? (
        <TicketBookList
          datas={datas}
          getPoster={fetchPosterImage}
          goDetail={goTicketBookDetail}
        />
      ) : (
        <>
        <Calendar 
          getTilePoster={getTilePoster}
          yearMonth={yearMonth}
          activeStartDateChange={handleActiveStartDateChange}
          datas={calendarDatas}
        />
        </>
      )}
      <Navigation />
    </>
  )
}

export default TicketBook;