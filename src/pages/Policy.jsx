import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Policy = () => {
  return (
    <div className="font-figtree bg-[#FAFBFE]">
      <Navbar />
      <div className="min-h-screen py-10">
        <h2 className="text-center mb-5 text-3xl font-semibold">
          Privacy Policy
        </h2>
        <h5 className="text-lg max-w-screen-xl mx-auto mb-20">
          At OutDoor, one of our main priorities is the privacy of our
          visitors. This Privacy Policy document contains types of information
          that is collected and recorded by OutDoor and how we use it.
          If you have additional questions or require more information about our
          Privacy Policy, do not hesitate to contact us by visit our Contact
          Page.
        </h5>

        <h2 className="text-center mb-5 text-3xl font-semibold">Log Files</h2>
        <h5 className="text-lg max-w-screen-xl mx-auto mb-20">
          OutDoor follows a standard procedure of using log files.
          These files log visitors when they visit websites. All hosting
          companies do this and a part of hosting services’ analytics. The
          information collected by log files include internet protocol (IP)
          addresses, browser type, Internet Service Provider (ISP), date and
          time stamp, referring/exit pages, and possibly the number of clicks.
          These are not linked to any information that is personally
          identifiable. The purpose of the information is for analyzing trends,
          administering the site, tracking users’ movement on the website, and
          gathering demographic information.
        </h5>

        <h2 className="text-center mb-5 text-3xl font-semibold">
          Cookies and Web Beacons
        </h2>
        <h5 className="text-lg max-w-screen-xl mx-auto mb-20">
          Like any other website, OutDoor uses ‘cookies’. These cookies
          are used to store information including visitors’ preferences, and the
          pages on the website that the visitor accessed or visited. The
          information is used to optimize the users’ experience by customizing
          our web page content based on visitors’ browser type and/or other
          information.
        </h5>

        <h2 className="text-center mb-5 text-3xl font-semibold">
          Third Party Privacy Policies
        </h2>
        <h5 className="text-lg max-w-screen-xl mx-auto mb-20">
          OutDoor Privacy Policy does not apply to other advertisers or
          websites. Thus, we are advising you to consult the respective Privacy
          Policies of these third-party ad servers for more detailed
          information. It may include their practices and instructions about how
          to opt-out of certain options. You may find a complete list of these
          Privacy Policies and their links here: Privacy Policy Links. You can
          choose to disable cookies through your individual browser options. To
          know more detailed information about cookie management with specific
          web browsers, it can be found at the browsers’ respective websites.
          What Are Cookies?
        </h5>

        <h2 className="text-center mb-5 text-3xl font-semibold">
          Children’s Information
        </h2>
        <h5 className="text-lg max-w-screen-xl mx-auto mb-20">
          Another part of our priority is adding protection for children while
          using the internet. We encourage parents and guardians to observe,
          participate in, and/or monitor and guide their online activity.
          OutDoor does not knowingly collect any Personal Identifiable
          Information from children under the age of 13. If you think that your
          child provided this kind of information on our website, we strongly
          encourage you to contact us immediately and we will do our best
          efforts to promptly remove such information from our records.
        </h5>

        <h2 className="text-center mb-5 text-3xl font-semibold">
          Online Privacy Policy Only
        </h2>
        <h5 className="text-lg max-w-screen-xl mx-auto mb-20">
          This Privacy Policy applies only to our online activities and is valid
          for visitors to our website with regards to the information that they
          shared and/or collect in OutDoor. This policy is not
          applicable to any information collected offline or via channels other
          than this website.
        </h5>

        <h2 className="text-center mb-5 text-3xl font-semibold">Consent</h2>
        <h5 className="text-lg max-w-screen-xl mx-auto">
          By using our website, you hereby consent to our Privacy Policy and
          agree to its Terms and Conditions.
        </h5>
      </div>
      <Footer />
    </div>
  );
};

export default Policy;
