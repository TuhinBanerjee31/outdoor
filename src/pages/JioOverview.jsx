import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import OverviewHeader from '../components/OverviewHeader'
import OverviewAbout from '../components/OverviewAbout'
import ImpactfulBrands from '../components/ImpactfulBrands'
import GlobalRating from '../components/GlobalRating'
import GlobalReviews from '../components/GlobalReviews'
import SalarySlider from '../components/SalarySlider'
import { jioData } from '../Data/jioData'

const JioOverview = () => {
  return (
    <div>
      <Navbar />

      <div className="font-figtree bg-[#FFFFFF] min-h-screen">
        <OverviewHeader dataset= {jioData} />
        <OverviewAbout dataset= {jioData} />
        <ImpactfulBrands />
        <GlobalRating dataset= {jioData} />
        <GlobalReviews dataset= {jioData} />
        <SalarySlider />
      </div>

      <Footer />
    </div>
  )
}

export default JioOverview