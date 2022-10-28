import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import styles from "../styles/Home.module.css";
import Login from "./Login";
import ProductList from "../components/ProductList";
import RegisterInput from "../components/RegisterInput";
import Register from "./Register";
import Link from 'next/link'


export default function Home() {
  return (
   <div className="">
    <Header />
    {/* <Register /> */}
    <Login />
    <Link href="/home">

</Link>
   </div>
  );
}
