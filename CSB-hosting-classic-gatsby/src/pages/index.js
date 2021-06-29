import React from "react";

import "rc-drawer/assets/index.css";
import "assets/css/react-slick.css";
import "react-modal-video/css/modal-video.min.css";
import "typeface-bree-serif";
import "typeface-dm-sans";
import { StickyProvider } from "contexts/app/app.provider";
import Layout from "components/layout";
import Features from "sections/features";
import Carousel from "components/carousel/corousel";
import Services from "sections/services";
import Testimonials from "../components/Testimonials/Testimonials";

export default function IndexPage() {
  return (
    <StickyProvider>
      <Layout>
        <Carousel />
        {/* How We Work */}
        <Features />
        {/* How We Work Ends Here  */}
        <Services />
        <Testimonials />
      </Layout>
    </StickyProvider>
  );
}
