import { useEffect, useState } from "react";
import styled from 'styled-components';
import { format } from 'date-fns';
import { getTicketBooksApi, getMonthTicketBooksApi, postShareApi } from "../api/ticketBookApi";
import { getPosterApi } from "../api/performanceApi";
import { useNavigate } from "react-router-dom";
import { ToastMessage } from "../components/common/Toast";
// import useColorThief from 'use-color-thief';
import ColorThief from 'colorthief';  // ColorThief 직접 import

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
  const [shareLink, setShareLink] = useState('');
  const [posterColors, setPosterColors] = useState({});  // 포스터별 색상 저장

  // 이미지 로드 및 색상 추출 함수
  const loadImageAndExtractColor = async (imageUrl, performanceId) => {
    return new Promise((resolve) => {
      const img = new Image();
      img.crossOrigin = "Anonymous";
      img.src = imageUrl;
      
      img.onload = () => {
        try {
          const colorThief = new ColorThief();
          const color = colorThief.getColor(img);
          // RGB를 HEX로 변환
          const hexColor = `#${color.map(x => {
            const hex = x.toString(16);
            return hex.length === 1 ? '0' + hex : hex;
          }).join('')}`;
          
          setPosterColors(prev => ({
            ...prev,
            [performanceId]: hexColor
          }));
          resolve(hexColor);
        } catch (error) {
          console.error('Color extraction failed:', error);
          resolve('#111');
        }
      };
    });
  };
  

  const fetchTicketBooks = async () => {
    const response = await getTicketBooksApi();
    setDatas(response.data);

    // 각 포스터의 색상 추출
    response.data.forEach(ticket => {
      if (ticket.poster && !posterColors[ticket.performanceId]) {
        loadImageAndExtractColor(ticket.poster, ticket.performanceId);
      }
    });
  }

   // 특정 티켓의 포스터 색상 가져오기
   const getPosterColor = (performanceId) => {
    return posterColors[performanceId] || '#111';
  };

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

  const fetchShareLink = async () => {
    try {
      const res = await postShareApi();
      const url = res.data;
      setShareLink(url);
    } catch (error) {
      console.error(error);
    }
  }

  const handleShare = async () => {
    ToastMessage.info("티켓북을 공유할 수 있는 링크를 복사했어요!");
  };
  
  useEffect(() => {
    fetchShareLink();
    fetchTicketBooks();
  }, []);

  useEffect(() => {
    fetchMonthTicketBooks();
    // eslint-disable-next-line
  }, [yearMonth]);

  return {
    shareLink,
    datas,
    yearMonth,
    calendarDatas,
    handleShare,
    getTilePoster,
    goTicketBookDetail,
    fetchPosterImage,
    handleActiveStartDateChange,
    getPosterColor,
  }
}