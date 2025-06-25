import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import OverviewHeader from '../components/OverviewHeader'
import OverviewAbout from '../components/OverviewAbout'
import ImpactfulBrands from '../components/ImpactfulBrands'
import GlobalRating from '../components/GlobalRating'
import GlobalReviews from '../components/GlobalReviews'
import SalarySlider from '../components/SalarySlider'
import { tuckerData } from '../Data/tuckerData'

const TuckerOverview = () => {
  return (
    <div>
      <Navbar />

      <div className="font-figtree bg-[#FFFFFF] min-h-screen">
        <OverviewHeader dataset= {tuckerData} />
        <OverviewAbout dataset= {tuckerData} />
        <ImpactfulBrands />
        <GlobalRating dataset= {tuckerData} />
        <GlobalReviews dataset= {tuckerData} />
        <SalarySlider />
      </div>

      <Footer />
    </div>
  )
}

export default TuckerOverview