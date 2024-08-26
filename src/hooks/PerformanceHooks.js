import { useEffect, useState} from "react";
import { useNavigate } from "react-router";
import { getNowPerformanceApi, getPopularPerformanceApi } from "../api/performanceApi";

export const usePerformance = () => {
  const navigate = useNavigate();
  const [nowPerformances, setNowPerformances] = useState([]);
  const [popularPerformances, setPopularPerformances] = useState([]);

  const fetchNowPerformances = async () => {
    try {
      const response = await getNowPerformanceApi();
      setNowPerformances(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  const fetchPopularPerformances = async () => {
    try {
      const response = await getPopularPerformanceApi();
      setPopularPerformances(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  const handleGoDetail = (performanceId) => {
    navigate(`/detail`, { state: { performanceId }});
  }


  useEffect(() => {
    fetchNowPerformances();
    fetchPopularPerformances();
  }, []);

  return {
    handleGoDetail,
    nowPerformances,
    popularPerformances
  }
}