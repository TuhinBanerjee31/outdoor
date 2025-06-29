import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import OverviewHeader from '../components/OverviewHeader'
import OverviewAbout from '../components/OverviewAbout'
import ImpactfulBrands from '../components/ImpactfulBrands'
import GlobalRating from '../components/GlobalRating'
import GlobalReviews from '../components/GlobalReviews'
import SalarySlider from '../components/SalarySlider'
import { pmiusData } from '../Data/pmiusData'

const PmiusOverview = () => {
  return (
    <div>
      <Navbar />

      <div className="font-figtree bg-[#FFFFFF] min-h-screen">
        <OverviewHeader dataset= {pmiusData} />
        <OverviewAbout dataset= {pmiusData} />
        <ImpactfulBrands />
        <GlobalRating dataset= {pmiusData} />
        <GlobalReviews dataset= {pmiusData} />
        <SalarySlider />
      </div>

      <Footer />
    </div>
  )
}

export default PmiusOverview