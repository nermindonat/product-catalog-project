import "../styles/globals.css";
import type { AppProps } from "next/app";
import axios from "axios";

// axios.defaults.baseURL = process.env.apiUrl;

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
