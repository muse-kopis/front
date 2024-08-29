import { useEffect, useState } from "react";
import styled from 'styled-components';
import { format } from 'date-fns';
import { getTicketBooksApi, getMonthTicketBooksApi, postShareApi } from "../api/ticketBookApi";
import { getPosterApi } from "../api/performanceApi";
import { useNavigate } from "react-router-dom";
import { ToastMessage } from "../components/common/Toast";

const CalendarPoster = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 5px;
`;

export const useTicketBook = () => {
  const thisMonth = format(new Date(), 'yyyy-MM');
  const [yearMonth, setYearMonth] = useState(thisMonth);
  const navigate = useNavigate();
  const [datas, setDatas] = useState([]);
  const [calendarDatas, setCalendarDatas] = useState({});

  const fetchTicketBooks = async () => {
    const response = await getTicketBooksApi();
    setDatas(response.data);
  }

  const fetchPosterImage = async (performanceId) => {
    try {
      const response = await getPosterApi(performanceId);
      if (response.status === 200) {
        const blob = response.data;
        const imageUrl = URL.createObjectURL(blob);
        return imageUrl;
      } else {
        console.error("Failed to fetch image:", response.statusText);
        return null;
      }
    } catch (error) {
      console.error("Error fetching image:", error);
      return null;
    }
  };

  const goTicketBookDetail = (id) => {
    navigate(`/book-detail/${id}`);
  };

  const handleChangeYearMonth = (newYearMonth) => {
    setYearMonth(newYearMonth);
  };

  const handleActiveStartDateChange = ({ activeStartDate }) => {
    handleChangeYearMonth(format(activeStartDate, 'yyyy-MM'));
  };

  const fetchMonthTicketBooks = async () => {
    const [year, month] = yearMonth.split('-');
    const response = await getMonthTicketBooksApi(year, month);
    setCalendarDatas(response.data);
  };

  const getTilePoster = (dateTime) => {
    const date = format(dateTime, 'yyyy-MM-dd');
    const target = calendarDatas[date];
    if (target) {
      return (
        <CalendarPoster 
          src={target[0].poster} 
          onClick={() => goTicketBookDetail(target[0].ticketBookId)}
        />
      )
    }
  };

  const handleShare = async () => {
    try {
      const res = await postShareApi();
      const url = res.data;
      await navigator.clipboard.writeText(url);
      ToastMessage.info("티켓북을 공유할 수 있는 링크를 복사했어요!");
    } catch (error) {
      console.error(error);
    }
  };
  
  useEffect(() => {
    fetchTicketBooks();
  }, []);

  useEffect(() => {
    fetchMonthTicketBooks();
    // eslint-disable-next-line
  }, [yearMonth]);

  return {
    datas,
    yearMonth,
    calendarDatas,
    handleShare,
    getTilePoster,
    goTicketBookDetail,
    fetchPosterImage,
    handleActiveStartDateChange,
  }
}