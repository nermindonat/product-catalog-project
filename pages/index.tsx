import Head from "next/head";
import Image from "next/image";
import Button from "../components/Button";
import Header from "../components/Header";
import styles from "../styles/Home.module.css";
import Login from "./Login";


export default function Home() {
  return (
   <div className="">
    <Header />
    <Login />
   </div>
  );
}
