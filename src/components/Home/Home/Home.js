import React from 'react'
import ConnectUs from '../ConnectUs/ConnectUs'
import FeatureCauses from '../FeatureCauses/FeatureCauses'
import Header from '../Header/Header'
import LatestCauses from '../LatestCauses/LatestCauses'
import LatestNews from '../LatestNews/LatestNews'
import OurProgress from '../OurProgress/OurProgress'

function Home() {
    return (
        <div>
            <Header></Header>
            <ConnectUs></ConnectUs>
            <FeatureCauses></FeatureCauses>
            <LatestCauses></LatestCauses>
            <OurProgress></OurProgress>
            <LatestNews></LatestNews>
        </div>
    )
}

export default Home
