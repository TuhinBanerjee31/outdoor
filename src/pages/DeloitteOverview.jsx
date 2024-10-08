import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import OverviewHeader from '../components/OverviewHeader'
import OverviewAbout from '../components/OverviewAbout'
import ImpactfulBrands from '../components/ImpactfulBrands'
import GlobalRating from '../components/GlobalRating'
import GlobalReviews from '../components/GlobalReviews'
import SalarySlider from '../components/SalarySlider'
import { deloitteData } from '../Data/deloitteData'

const DeloitteOverview = () => {
  return (
    <div>
      <Navbar />

      <div className="font-figtree bg-[#FFFFFF] min-h-screen">
        <OverviewHeader dataset= {deloitteData} />
        <OverviewAbout dataset= {deloitteData} />
        <ImpactfulBrands />
        <GlobalRating dataset= {deloitteData} />
        <GlobalReviews dataset= {deloitteData} />
        <SalarySlider />
      </div>

      <Footer />
    </div>
  )
}

export default DeloitteOverview