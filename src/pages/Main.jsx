import React from "react";
import { Div } from "../components/common/div";
import Header from "../components/common/Header";
import Banner from "../components/pages/main/Banner";
import Carousel from "../components/pages/main/Carousel";
import Navigation from "../components/common/Navigation";
import { usePerformance } from "../hooks/PerformanceHooks";

const Main = () => {
  const { 
    nowPerformances,
    handleGoDetail,
  } = usePerformance();

  return (
    <>
      <Header />
      <Banner />
      <Div $flex={true} $padding='25px 18px' $direction='column' $align='start' $width='100%' $gap='40px'>
        <Carousel type='curation1' />
        <Carousel 
          type='curation2' 
          data={nowPerformances}
          goDetail={handleGoDetail}
        />
        <Carousel 
          type='curation3'
        />
      </Div>
      <Navigation />
    </>
  ) 
}

export default Main;