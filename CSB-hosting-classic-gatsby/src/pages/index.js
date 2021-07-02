import "assets/css/react-slick.css";
import Carousel from "components/carousel/corousel";
import Layout from "components/layout";
import { StickyProvider } from "contexts/app/app.provider";
import "rc-drawer/assets/index.css";
import React from "react";
import Blogs from "sections/blog";
import Features from "sections/Features/features";
import Services from "sections/OurServices/services";
import "typeface-bree-serif";
import "typeface-dm-sans";
import Clients from "../sections/OurClients/Clients";
import Testimonials from "../sections/Testimonials/testimonials";
import BackgroundAnimation from "components/Animations/backgroundAnimation"

export default function IndexPage() {
  return (
    <StickyProvider>
        <BackgroundAnimation/>
      <Layout>
        <Carousel />
        {/* How We Work */}
        <Features />
        {/* How We Work Ends Here  */}
        <Services />
        <Clients />
        <Testimonials />
        <Blogs />
      </Layout>
    </StickyProvider>
  );
}
