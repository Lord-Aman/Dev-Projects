import React from "react";

import "rc-drawer/assets/index.css";
import "assets/css/react-slick.css";
import "typeface-bree-serif";
import "typeface-dm-sans";
import { StickyProvider } from "contexts/app/app.provider";
import Layout from "components/layout";
import Features from "sections/Features/features";
import Carousel from "components/carousel/corousel";
import Services from "sections/OurServices/services";

export default function IndexPage() {
  return (
    <StickyProvider>
      <Layout>
        <Carousel />
        {/* How We Work */}
        <Features />
        {/* How We Work Ends Here  */}
        <Services />
      </Layout>
    </StickyProvider>
  );
}
