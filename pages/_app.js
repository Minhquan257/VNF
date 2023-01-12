import { ThemeProvider } from 'next-themes'
import Head from 'next/head';

import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => (
    <ThemeProvider attribute="class">
      <Head>
        <title>SeaFood</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <div className="bg-white dark:bg-prim-dark">
        <Navbar />
        <div className="w-full pt-16">
          <Component {...pageProps} />
        </div>
        <Footer />
      </div>
    </ThemeProvider>
);

export default MyApp;