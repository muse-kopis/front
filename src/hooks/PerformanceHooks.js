import { useEffect, useState} from "react";
import { useNavigate } from "react-router";
import { getNowPerformanceApi, getPopularPerformanceApi, getRecommendPerformanceApi, getRandomPerformanceApi } from "../api/performanceApi";

export const usePerformance = () => {
  const navigate = useNavigate();
  const [nowPerformances, setNowPerformances] = useState([]);
  const [popularPerformances, setPopularPerformances] = useState([]);
  const [recommendPerformances, setRecommendPerformances] = useState([]);
  const [randomPerformances, setRandomPerformances] = useState([]);

  const fetchNowPerformances = async () => {
    try {
      const response = await getNowPerformanceApi();
      setNowPerformances(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  const fetchRecommendPerformances = async () => {
    try {
      const response = await getRecommendPerformanceApi();
      setRecommendPerformances(response.data);
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

  const fetchRandomPerformances = async () => {
    try {
      const response = await getRandomPerformanceApi();
      setRandomPerformances(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  const handleGoDetail = (performanceId) => {
    navigate(`/detail`, { state: { performanceId }});
  }


  useEffect(() => {
    fetchNowPerformances();
    fetchRecommendPerformances();
    fetchRandomPerformances();
    fetchPopularPerformances();
  }, []);

  return {
    handleGoDetail,
    nowPerformances,
    randomPerformances,
    recommendPerformances,
    popularPerformances
  }
}