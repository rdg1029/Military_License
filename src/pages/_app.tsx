import "@/styles/globals.css";
import type { AppProps } from "next/app";
import NavBar from "./NavBar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <NavBar />
    </>
  );
}
