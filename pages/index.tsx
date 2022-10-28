import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import styles from "../styles/Home.module.css";
import Login from "./Login";
import ProductList from "../components/ProductList";
import RegisterInput from "../components/RegisterInput";
import Register from "./Register";


export default function Home() {
  return (
   <div className="">
    <Header />
    <Register />
   </div>
  );
}
