import React from "react";
import { Div } from "../components/common/div";
import Header from "../components/common/header";
import Banner from "../components/pages/main/Banner";
import Carousel from "../components/pages/main/Carousel";
import Navigation from "../components/common/Navigation";

const Main = () => {
  return (
    <>
      <Header />
      <Banner />
      <Div $flex={true} $padding='25px 18px' $direction='column' $align='start' $width='100%' $gap='40px'>
        <Carousel type='curation1' />
        <Carousel type='curation2' />
        <Carousel type='curation3' />
      </Div>
      <Navigation />
    </>
  ) 
}

export default Main;