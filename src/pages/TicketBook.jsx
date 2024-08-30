import React, { useState } from "react";
import TicketBookHeader from "../components/pages/ticketBook/TicketBookHeader";
import TicketBookList from "../components/pages/ticketBook/TicketBookList";
import Navigation from "../components/common/Navigation";
import Calendar from "../components/pages/ticketBook/Calendar";
import { useTicketBook } from "../hooks/TicketBookHooks";

const TicketBook = () => {
  const {
    shareLink,
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
      <TicketBookHeader 
        shareLink={shareLink}
        isBook={isBook}
        setIsBook={setIsBook}
        handleShare={handleShare} 
      />
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