import Footer from "@/component/Footer";
import Header from "@/component/Header";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import React from "react";
const Layout = (props) => {
  const router = useRouter();
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
      {router.pathname !== "/" && <Header block={"header"} />}
      {children ?? "look"}
      {/* {router.pathname !== "/" && <Footer block={"footer"} />} */}
    </React.Fragment>
  );
};
export default Layout;
