import { useEffect, useState} from "react";
import { useNavigate } from "react-router";
import { getNowPerformanceApi, getPopularPerformanceApi, getRecommendPerformanceApi, getRandomPerformanceApi, getSearchPerformanceApi } from "../api/performanceApi";

export const usePerformance = () => {
  const navigate = useNavigate();
  const [nowPerformances, setNowPerformances] = useState([]);
  const [popularPerformances, setPopularPerformances] = useState([]);
  const [recommendPerformances, setRecommendPerformances] = useState([]);
  const [randomPerformances, setRandomPerformances] = useState([]);
  const [searchVal, setSearchVal] = useState('');
  const [searchResult, setSearchResult] = useState([]);

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

  const handleSearch = async () => {
    try {
      const response = await getSearchPerformanceApi(searchVal);
      setSearchResult(response.data);
    } catch(error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchNowPerformances();
    fetchRecommendPerformances();
    fetchRandomPerformances();
    fetchPopularPerformances();
  }, []);

  useEffect(() => {
    if (searchVal === '') {
      setSearchResult([]);
    }
  }, [searchVal])

  return {
    searchResult,
    searchVal,
    nowPerformances,
    randomPerformances,
    recommendPerformances,
    popularPerformances,
    setSearchVal,
    handleGoDetail,
    handleSearch,
  }
}