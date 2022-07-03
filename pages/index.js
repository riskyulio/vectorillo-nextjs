import Head from "next/head";
import Hero from "../sections/Hero/Hero";
import Promo from "../sections/Promo/Promo";
import CanvasPromo from "../sections/Promo/CanvasPromo";
import Reviews from "../sections/Reviews/Reviews";
import Subscribe from "../sections/Subscribe/Subscribe";
import { Fragment } from "react";

function Home() {
  return (
    <Fragment>
      <Head>
        <link
          href="https://fonts.google.com/specimen/Poppins?query=poppins"
          rel="stylesheet"
        />
      </Head>
      <Hero />
      <Promo color="dark" />
      <CanvasPromo />
      <Reviews />
      <Promo color="light" />
      <Subscribe />
    </Fragment>
  );
}

export default Home;
