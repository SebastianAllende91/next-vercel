import Head from "next/head";
import Navbar from "../Navbar";
import { Inter } from "next/font/google";
import styles from "@/components/layouts/MainLayout.module.css";

const inter = Inter({ subsets: ["latin"] });

const MainLayout = ({ children }: any) => {
  return (
    <>
      <Head>
        <title>About - Sebastian</title>
        <meta name="description" content="About Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={`${styles.main} ${inter.className}`}>{children}</main>
    </>
  );
};

export default MainLayout;
