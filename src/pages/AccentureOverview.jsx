import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import OverviewHeader from '../components/OverviewHeader'
import OverviewAbout from '../components/OverviewAbout'
import ImpactfulBrands from '../components/ImpactfulBrands'
import GlobalRating from '../components/GlobalRating'
import GlobalReviews from '../components/GlobalReviews'
import SalarySlider from '../components/SalarySlider'
import { accentureData } from '../Data/accentureData'

const AccentureOverview = () => {
  return (
    <div>
      <Navbar />

      <div className="font-figtree bg-[#FFFFFF] min-h-screen">
        <OverviewHeader dataset= {accentureData} />
        <OverviewAbout dataset= {accentureData} />
        <ImpactfulBrands />
        <GlobalRating dataset= {accentureData} />
        <GlobalReviews dataset= {accentureData} />
        <SalarySlider />
      </div>

      <Footer />
    </div>
  )
}

export default AccentureOverview