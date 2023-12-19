import Layout from "@/layouts/layOut";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "react-multi-carousel/lib/styles.css";
import "@/styles/globals.css";
import TransitionEffect from "@/component/Section/TransitionEffect";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <TransitionEffect>
        <Component {...pageProps} />
      </TransitionEffect>
    </Layout>
  );
}
