import { useEffect, useState } from "react";
import { getOnboardingPerformanceApi } from "../api/performanceApi";
import { useNavigate } from "react-router";

export const useOnboarding = () => {
  const [step, setStep] = useState(6);
  const [username, setUsername] = useState('');
  const [rankType, setRankType] = useState(0);
  const [datas, setDatas] = useState([]);
  const [selectedDatas, setSelectedDatas] = useState([]);
  const navigate = useNavigate();

  const carouselSettings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0.5,
    autoplay: true,
    autoplaySpeed: 500,
  };

  const fetchOnboarding = async () => {
    try {
      const res = await getOnboardingPerformanceApi();
      setDatas(res.data);
    } catch (error) {
      console.error(error);
    }
  }

  const selectPerformance = (performanceId) => {
    if (selectedDatas.includes(performanceId)) {
      setSelectedDatas(selectedDatas.filter((id) => id !== performanceId));
    } else if (selectedDatas.length < 4 * (step - 2)) {
      setSelectedDatas([...selectedDatas, performanceId]);
    }
  }

  const handleGoMain = () => {
    navigate('/');
  }

  useEffect(() => {
    fetchOnboarding();
  }, [])

  return {
    datas,
    selectedDatas,
    rankType,
    username,
    step,
    carouselSettings,
    handleGoMain,
    selectPerformance,
    setRankType,
    setStep,
    setUsername,
  }
}