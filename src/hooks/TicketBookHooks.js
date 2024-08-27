import { useEffect, useState } from "react";
import { getTicketBooksApi } from "../api/ticketBookApi";
import { getPosterApi } from "../api/performanceApi";
import { useNavigate } from "react-router-dom";

export const useTicketBook = () => {
  const navigate = useNavigate();
  const [datas, setDatas] = useState([]);

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
  
  useEffect(() => {
    fetchTicketBooks();
  }, []);

  return {
    datas,
    goTicketBookDetail,
    fetchPosterImage,
  }
}