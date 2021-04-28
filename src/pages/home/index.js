import React from 'react'
import AboutComponent from '../../components/about/AboutComponent'
import LandingPage from '../../components/home-components/LandingPage'
import DesignWork from '../../components/portfolio/DesignWork'
import DevelopmentWork from '../../components/portfolio/DevelopmentWork'
import VideoWork from '../../components/portfolio/VideoWork'
import ServicesComponent from '../../components/service/ServicesComponent'

const HomePage = () => {
    return (
      <div>
        <LandingPage />
        <ServicesComponent />
        <AboutComponent />
        <DevelopmentWork />
        <DesignWork />
        <VideoWork />
      </div>
    )
}

export default HomePage