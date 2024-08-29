import { useEffect, useState } from "react";
import { getShareApi } from "../api/ticketBookApi";
import { getPosterApi } from "../api/performanceApi";
import { useNavigate, useParams } from "react-router-dom";

export const useShare = () => {
  const identifier = useParams().id;
  const navigate = useNavigate();
  const [datas, setDatas] = useState([]);
  const [user, setUser] = useState('');

  const fetchTicketBooks = async () => {
    const response = await getShareApi(identifier);
    setDatas(response.data.ticketBooks);
    setUser(response.data.username);
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
    navigate(`/shared-book-detail/${id}`);
  };

  useEffect(() => {
    fetchTicketBooks();
    // eslint-disable-next-line
  }, []);

  return {
    user,
    datas,
    goTicketBookDetail,
    fetchPosterImage,
  }
}