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
