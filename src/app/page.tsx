"use client";
import Head from 'next/head';
import Header from '@/components/Header-2';  // Import the Header component
import Editor from './[home]/editor/page';
import Vita from './[home]/vita/page';
import NeuralUniverse from './[home]/neutral/page';
import FeaturedPosts from './[home]/feature/page';
import Footer from './[home]/footer/page';
import FeaturedProductsSection from '@/components/Featured';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Head>
        <title>New Collection</title>
        <meta name="description" content="Summer 2020 Collection" />
      </Head>

      {/* Header Component */}
      <Header />  {/* This will include the Top Bar and Navbar */}

      {/* Main content */}
      <main
        className="min-h-[100vh] flex-1 flex flex-col justify-center items-start text-white bg-cover bg-center lg:pl-40 p-10 w-full"
        style={{
          backgroundImage: "url('/images/bg.png')", 
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h2 className="text-sm font-semibold uppercase">Summer 2020</h2>
        <h1 className="text-5xl font-bold my-8 uppercase">New Collection</h1>
        <p className="mb-6">We know how large objects will act, <br /> but things on a small scale.</p>
        <a
          href="#"
          className="bg-green-500 font-bold text-white py-2 px-4 rounded uppercase hover:bg-green-600"
        >
          Shop Now
        </a>
      </main>
      
      {/* Other Components */}
      <Editor />
      <section className="py-12 px-4 md:px-16 lg:px-24 bg-gray-100">
        <FeaturedProductsSection />
      </section>
      <Vita />
      <NeuralUniverse />
      <FeaturedPosts />
      <Footer />
    </div>
  );
}
