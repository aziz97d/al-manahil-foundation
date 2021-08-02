import React from "react";
import ConnectUs from "../ConnectUs/ConnectUs";
import FeatureCauses from "../FeatureCauses/FeatureCauses";
import Header from "../Header/Header";
import LatestCauses from "../LatestCauses/LatestCauses";
import LatestNews from "../LatestNews/LatestNews";
import OurProgress from "../OurProgress/OurProgress";
import OurPartner from "../OurPartner/OurPartner";
import Footer from "../../Footer/Footer";

function Home() {
  return (
    <div>
      <Header></Header>
      <ConnectUs></ConnectUs>
      <FeatureCauses></FeatureCauses>
      <LatestCauses></LatestCauses>
      <OurProgress></OurProgress>
      <LatestNews></LatestNews>
      <OurPartner></OurPartner>
      <Footer></Footer>
    </div>
  );
}

export default Home;
