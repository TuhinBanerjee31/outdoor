import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import OverviewHeader from '../components/OverviewHeader'
import OverviewAbout from '../components/OverviewAbout'

const GoogleOverview = () => {
  return (
    <div>
      <Navbar />

      <div className="font-figtree bg-[#FFFFFF] min-h-screen">
        <OverviewHeader />
        <OverviewAbout />
      </div>

      <Footer />
    </div>
  )
}

export default GoogleOverview
