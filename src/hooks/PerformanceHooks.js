import { useEffect, useState} from "react";
import { useNavigate } from "react-router";
import { getNowPerformanceApi, getPopularPerformanceApi } from "../api/performanceApi";

export const usePerformance = () => {
  const navigate = useNavigate();
  const [nowPerformances, setNowPerformances] = useState([]);
  const [popularPerformances, setPopularPerformances] = useState([]);

  const fetchNowPerformances = async () => {
    const response = await getNowPerformanceApi();
    setNowPerformances(response.data);
  }

  const fetchPopularPerformances = async () => {
    const response = await getPopularPerformanceApi();
    setPopularPerformances(response.data);
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