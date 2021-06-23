import React from "react";

import "rc-drawer/assets/index.css";
import "assets/css/react-slick.css";
import "react-modal-video/css/modal-video.min.css";
import "typeface-bree-serif";
import "typeface-dm-sans";
import Testimonial from "components/testimonials/TwoColumnWithImageAndProfilePictureReview.js";
import { StickyProvider } from "contexts/app/app.provider";
import SEO from "components/seo";
import Layout from "components/layout";
import Banner from "sections/banner";
import Features from "sections/features";
// import Pricing from 'sections/pricing';
import Services from "sections/services";
import ProductFeature from "sections/product-feature";
import CustomerSupport from "sections/customer-support";

export default function IndexPage() {
  return (
    <StickyProvider>
      <Layout>
        <Banner />
        {/* How We Work */}
        <Features />
        {/* How We Work Ends Here  */}
        {/* <ProductFeature /> */}
        <Services />
        <Testimonial />
        <CustomerSupport />
      </Layout>
    </StickyProvider>
  );
}
