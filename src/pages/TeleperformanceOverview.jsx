import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import OverviewHeader from '../components/OverviewHeader'
import OverviewAbout from '../components/OverviewAbout'
import ImpactfulBrands from '../components/ImpactfulBrands'
import GlobalRating from '../components/GlobalRating'
import GlobalReviews from '../components/GlobalReviews'
import SalarySlider from '../components/SalarySlider'
import { teleperformanceData } from '../Data/teleperformanceData'

const TeleperformanceOverview = () => {
  return (
    <div>
      <Navbar />

      <div className="font-figtree bg-[#FFFFFF] min-h-screen">
        <OverviewHeader dataset= {teleperformanceData} />
        <OverviewAbout dataset= {teleperformanceData} />
        <ImpactfulBrands />
        <GlobalRating dataset= {teleperformanceData} />
        <GlobalReviews dataset= {teleperformanceData} />
        <SalarySlider />
      </div>

      <Footer />
    </div>
  )
}

export default TeleperformanceOverview