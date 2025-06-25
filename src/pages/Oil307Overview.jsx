import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import OverviewHeader from '../components/OverviewHeader'
import OverviewAbout from '../components/OverviewAbout'
import ImpactfulBrands from '../components/ImpactfulBrands'
import GlobalRating from '../components/GlobalRating'
import GlobalReviews from '../components/GlobalReviews'
import SalarySlider from '../components/SalarySlider'
import { oil307Data } from '../Data/oil307Data'

const Oil307Overview = () => {
  return (
        <div>
      <Navbar />

      <div className="font-figtree bg-[#FFFFFF] min-h-screen">
        <OverviewHeader dataset= {oil307Data} />
        <OverviewAbout dataset= {oil307Data} />
        <ImpactfulBrands />
        <GlobalRating dataset= {oil307Data} />
        <GlobalReviews dataset= {oil307Data} />
        <SalarySlider />
      </div>

      <Footer />
    </div>
  )
}

export default Oil307Overview
