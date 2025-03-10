import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import OverviewHeader from '../components/OverviewHeader'
import OverviewAbout from '../components/OverviewAbout'
import ImpactfulBrands from '../components/ImpactfulBrands'
import GlobalRating from '../components/GlobalRating'
import GlobalReviews from '../components/GlobalReviews'
import SalarySlider from '../components/SalarySlider'
import { kpngData } from '../Data/kpngData'

const KpngOverview = () => {
  return (
    <div>
      <Navbar />

      <div className="font-figtree bg-[#FFFFFF] min-h-screen">
        <OverviewHeader dataset= {kpngData} />
        <OverviewAbout dataset= {kpngData} />
        <ImpactfulBrands />
        <GlobalRating dataset= {kpngData} />
        <GlobalReviews dataset= {kpngData} />
        <SalarySlider data= 'siecorp' />
      </div>

      <Footer />
    </div>
  )
}

export default KpngOverview
