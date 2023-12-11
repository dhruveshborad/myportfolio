import Footer from "@/component/Footer";
import Header from "@/component/Header";
import { NextSeo } from "next-seo";
import React from "react";
const Layout = (props) => {
  const { children } = props;
  return (
    <React.Fragment>
      <NextSeo
        twitter={{
          cardType: "summary_large_image",
          handle: "ME",
          site: "MY SITE",
        }}
        openGraph={{
          book: { authors: ["DEV"] },
        }}
        canonical={"url"}
        additionalMetaTags={[]}
        title={"front end developer"}
        description={"My portfolio"}
      />
      <Header block={"header"} />
      {children ?? "look"}
      <Footer block={"footer"} />
    </React.Fragment>
  );
};
export default Layout;
