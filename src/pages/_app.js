import Layout from "@/layouts/layOut";
import "@/styles/globals.css";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  switch (router.pathname) {
    case "/":
      return <Component {...pageProps} />;
    default:
      return (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      );
  }
}
