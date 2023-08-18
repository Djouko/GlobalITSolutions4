import "./globals.css";
import { Inter } from "next/font/google";
import Provider from "./(Provider)/Provider";
import Navbar from "./(Nav_components)/Navbar";
import StarsCanvas from "./(StarMode)/Background_Stars";
import Head from 'next/head';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "GLOBAL IT SOLUTIONS",
  description: "GLOBAL IT SOLUTIONS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <Head>
        <link rel="icon" type="image/jpg" href="/IMG-20230712-WA0019.jpg" />
      </Head> */}
      <body
        className={` bg-[#001a00] overflow-y-scroll overflow-x-hidden  transition_ ${inter.className}`}
      >
        <Provider>
          <StarsCanvas />
          <Navbar />
          {children}
        </Provider>
      </body>
    </html>
  );
}
