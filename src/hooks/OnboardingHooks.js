import { useEffect, useState } from "react";
import { getOnboardingPerformanceApi, postOnboardingPerformanceApi } from "../api/performanceApi";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { setName } from "../store/slices/userSlice";

export const useOnboarding = () => {
  const [step, setStep] = useState(1);
  const [username, setUsername] = useState('');
  const [rankType, setRankType] = useState(0);
  const [datas, setDatas] = useState([]);
  const [selectedDatas, setSelectedDatas] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

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

  const handleOnboarding = async () => {
    try {
      const res = await postOnboardingPerformanceApi({ username, performanceId: selectedDatas }); 
      dispatch(setName(res.data));
      setTimeout(() => {
        setStep(6);
    }, 1000);
    } catch (error) {
      console.error(error);
    }
  }

  const handleGoMain = () => {
    navigate('/');
  }

  useEffect(() => {
    fetchOnboarding();
  }, []);

  useEffect(() => {
    if (step === 5) {
      handleOnboarding();
    }
    // eslint-disable-next-line
  }, [step]);

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