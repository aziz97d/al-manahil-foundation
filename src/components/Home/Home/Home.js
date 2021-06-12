import React from 'react'
import ConnectUs from '../ConnectUs/ConnectUs'
import FeatureCauses from '../FeatureCauses/FeatureCauses'
import Header from '../Header/Header'

function Home() {
    return (
        <div>
            <Header></Header>
            <ConnectUs></ConnectUs>
            <FeatureCauses></FeatureCauses>
        </div>
    )
}

export default Home
