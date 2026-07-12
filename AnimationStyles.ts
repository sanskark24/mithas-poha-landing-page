import { useRef } from 'react';
import { Helmet } from "react-helmet";
import './App.css';
import Contact from './components/Contact';
import Features from './components/Features';
import Footer from './components/Footer';
import Header, { NavItem } from './components/Header';
import Hero from './components/Hero';
import OurCommitment from './components/OurCommitment';
import OurHeritage from './components/OurHeritage';
import Products from './components/Products';
import Testimonials from './components/Testimonials';
import Whatsapp from './components/Whatsapp';

function App() {
  const homeRef = useRef(null);
  const productsRef = useRef(null);
  const commitmentRef = useRef(null);
  const testimonialRef = useRef(null);
  const contactRef = useRef(null);
  const NAV_ITEMS: Array<NavItem> = [
    {
      label: 'Home',
      ref: homeRef
    },

    {
      label: 'Products',
      ref: productsRef
    },
    {
      label: 'Quality',
      ref: commitmentRef
    },
    {
      label: 'Testimonials',
      ref: testimonialRef
    },
    {
      label: 'Contact',
      ref: contactRef
    },

  ]
  return (
    <>
    <Helmet>
  <title>Premium Poha Manufacturer | Mithas Poha by Khandelwal Industries</title>
  <meta name="description" content="Mithas Poha – India's finest premium quality poha, directly from Khandelwal Industries. Fresh, nutritious, and naturally processed." />
  <meta name="keywords" content="Poha manufacturer, premium poha, Khandelwal Industries, Indian poha, flattened rice" />
  <link rel="canonical" href="https://mithaspoha.in" />
</Helmet>
      <Header items={NAV_ITEMS}></Header>
      <section ref={homeRef}>
        <Hero productRef={productsRef}></Hero>
        <Features></Features>
      </section>
      <section ref={productsRef}>
        <Products></Products>
      </section>
      <section ref={commitmentRef}>
        <OurCommitment></OurCommitment>
      </section>
      <section ref={testimonialRef}>
        <Testimonials></Testimonials>
        <OurHeritage></OurHeritage>
      </section>
      <section ref={contactRef}>
        <Contact></Contact>
      </section>
      <Footer></Footer>
      <Whatsapp></Whatsapp>
    </>
  );
}

export default App;
