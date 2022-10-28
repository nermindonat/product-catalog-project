import Link from 'next/link';
import React from 'react';
import Navbar from '../components/Navbar';
import ProductList from '../components/ProductList';

function Home() {
    return (
        <>
            <Navbar />
            <ProductList />
            <Link href="/home/navbar">

</Link>
        </>
    );
}

export default Home;