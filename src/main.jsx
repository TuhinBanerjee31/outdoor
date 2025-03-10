import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "@material-tailwind/react";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import GoogleOverview from "./pages/GoogleOverview.jsx";
import UberOverview from "./pages/UberOverview.jsx";
import TataMotorsOverview from "./pages/TataMotorsOverview.jsx";
import DellOverview from "./pages/DellOverview.jsx";
import AsianPaintsOverview from "./pages/AsianPaintsOverview.jsx";
import BlackBuckOverview from "./pages/BlackBuckOverview.jsx";
import AccentureOverview from "./pages/AccentureOverview.jsx";
import UdaanOverview from "./pages/UdaanOverview.jsx";
import DeloitteOverview from "./pages/DeloitteOverview.jsx";
import Companies from "./pages/Companies.jsx";
import Reviews from "./pages/Reviews.jsx";
import Community from "./pages/Community.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import Policy from "./pages/Policy.jsx";
import Salaries from "./pages/Salaries.jsx";
import SiecorpOverview from "./pages/SiecorpOverview.jsx";
import KiewitOverview from "./pages/KiewitOverview.jsx";
import LandtOverview from "./pages/LandtOverview.jsx";
import TcsOverview from "./pages/TcsOverview.jsx";
import HdfcBankOverview from "./pages/HdfcBankOverview.jsx";
import TeleperformanceOverview from "./pages/TeleperformanceOverview.jsx";
import AxisBankOverview from "./pages/AxisBankOverview.jsx";
import VinciOverview from "./pages/VinciOverview.jsx";
import IbmOverview from "./pages/IbmOverview.jsx";
import RelianceRetailOverview from "./pages/RelianceRetailOverview.jsx";
import CognizantOverview from "./pages/CognizantData.jsx";
import IenergizerOverview from "./pages/IenergizerOverview.jsx";
import IciciBankOverview from "./pages/IciciBankOverview.jsx";
import WiproOverview from "./pages/WiproOverview.jsx";
import JioOverview from "./pages/JioOverview.jsx";
import KinexaOverview from "./pages/KinexaOverview.jsx";
import TechMahindraOverview from "./pages/TechMahindraOverview.jsx";
import AmazonOverview from "./pages/AmazonOverview.jsx";
import ByjusOverview from "./pages/ByjusOverview.jsx";
import ViOverview from "./pages/ViOverview.jsx";
import WnsOverview from "./pages/WnsOverview.jsx";
import InfosysOverview from "./pages/InfosysOverview.jsx";
import KpngOverview from "./pages/KpngOverview.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<App />} />{" "}
      {/* Use 'index' for the default route */}
      <Route path="google-overview" element={<GoogleOverview />} />
      <Route path="uber-overview" element={<UberOverview />} />
      <Route path="tata-motors-overview" element={<TataMotorsOverview />} />
      <Route path="dell-overview" element={<DellOverview />} />
      <Route path="asian-paints-overview" element={<AsianPaintsOverview />} />
      <Route path="blackbuck-overview" element={<BlackBuckOverview />} />
      <Route path="accenture-overview" element={<AccentureOverview />} />
      <Route path="udaan-overview" element={<UdaanOverview />} />
      <Route path="deloitte-overview" element={<DeloitteOverview />} />
      <Route path="companies" element={<Companies />} />
      <Route path="reviews" element={<Reviews />} />
      <Route path="community" element={<Community />} />
      <Route path="contact-us" element={<ContactUs />} />
      <Route path="privacy-policy" element={<Policy />} />
      <Route path="salaries" element={<Salaries />} />
      <Route path="siecorp-overview" element={<SiecorpOverview />} />
      <Route path="kiewit-overview" element={<KiewitOverview />} />
      <Route path="l-and-t-overview" element={<LandtOverview />} />
      <Route path="tcs-overview" element={<TcsOverview />} />
      <Route path="hdfc-bank-overview" element={<HdfcBankOverview />} />
      <Route path="teleperformance-overview" element={<TeleperformanceOverview />} />
      <Route path="axis-bank-overview" element={<AxisBankOverview />} />
      <Route path="vinci-overview" element={<VinciOverview />} />
      <Route path="ibm-overview" element={<IbmOverview />} />
      <Route path="reliance-retail-overview" element={<RelianceRetailOverview />} />
      <Route path="cognizant-overview" element={<CognizantOverview />} />
      <Route path="ienergizer-overview" element={<IenergizerOverview />} />
      <Route path="icici-bank-overview" element={<IciciBankOverview />} />
      <Route path="wipro-overview" element={<WiproOverview />} />
      <Route path="jio-overview" element={<JioOverview />} />
      <Route path="kinexa-solutions-overview" element={<KinexaOverview />} />
      <Route path="tech-mahindra-overview" element={<TechMahindraOverview />} />
      <Route path="amazon-overview" element={<AmazonOverview />} />
      <Route path="byjus-overview" element={<ByjusOverview />} />
      <Route path="vodafone-idea-overview" element={<ViOverview />} />
      <Route path="wns-overview" element={<WnsOverview />} />
      <Route path="infosys-overview" element={<InfosysOverview />} />
      <Route path="kpng-overview" element={<KpngOverview />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
);
