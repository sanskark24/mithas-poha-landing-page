import { useRef } from 'react';
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
  const scrollToSection = (ref: any) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };
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
