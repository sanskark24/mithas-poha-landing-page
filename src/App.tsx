import { useRef } from 'react';
import { Helmet } from "react-helmet";
import './App.css';
import Contact from './components/Contact';
import DirectorsVision from './components/DirectorsVision';
import Features from './components/Features';
import Footer from './components/Footer';
import Header, { NavItem } from './components/Header';
import Hero from './components/Hero';
import OurCommitment from './components/OurCommitment';
import OurHeritage from './components/OurHeritage';
import OurJourney from './components/OurJourney';
import Products from './components/Products';
import ProductDetails from './components/ProductDetails';
import SplashScreen from './components/SplashScreen';
import Testimonials from './components/Testimonials';
import WhyChooseMithas from './components/WhyChooseMithas';
import Whatsapp from './components/Whatsapp';
import { products } from './data/products';

function App() {
  const homeRef = useRef<HTMLElement | null>(null);
  const productsRef = useRef<HTMLElement | null>(null);
  const commitmentRef = useRef<HTMLElement | null>(null);
  const testimonialRef = useRef<HTMLElement | null>(null);
  const visionRef = useRef<HTMLElement | null>(null);
  const journeyRef = useRef<HTMLElement | null>(null);
  const contactRef = useRef<HTMLElement | null>(null);
  const NAV_ITEMS: Array<NavItem> = [
    {
      label: 'Home',
      id: 'home',
      ref: homeRef
    },
    {
      label: 'Products',
      id: 'products',
      ref: productsRef
    },
    {
      label: 'Quality',
      id: 'quality',
      ref: commitmentRef
    },
    {
      label: 'Testimonials',
      id: 'testimonials',
      ref: testimonialRef
    },
    {
      label: "Director's Vision",
      id: 'directors-vision',
      ref: visionRef
    },
    {
      label: 'Our Journey',
      id: 'our-journey',
      ref: journeyRef
    },
    {
      label: 'Contact',
      id: 'contact',
      ref: contactRef
    },
  ]
  const basePath = import.meta.env.BASE_URL;
  const routePath = window.location.pathname.startsWith(basePath)
    ? window.location.pathname.slice(basePath.length)
    : window.location.pathname.replace(/^\//, '');
  const productSlug = routePath.startsWith('products/')
    ? routePath.slice('products/'.length).replace(/\/$/, '')
    : null;
  const currentProduct = products.find((product) => product.slug === productSlug);

  return (
    <>
    <SplashScreen />
    <Helmet>
  <title>{currentProduct ? `${currentProduct.name} | ${currentProduct.brand} Poha` : productSlug ? 'Poha Product Details | Mithas Poha' : 'Premium Poha Manufacturer | Mithas Poha by Khandelwal Industries'}</title>
  <meta name="description" content="Mithas Poha – India's finest premium quality poha, directly from Khandelwal Industries. Fresh, nutritious, and naturally processed." />
  <meta name="keywords" content="Poha manufacturer, premium poha, Khandelwal Industries, Indian poha, flattened rice" />
  <link rel="canonical" href="https://mithaspoha.in" />
</Helmet>
      <Header items={NAV_ITEMS}></Header>
      {productSlug ? (
        <ProductDetails slug={productSlug} />
      ) : (
        <>
          <section id="home" ref={homeRef}>
            <Hero productRef={productsRef}></Hero>
            <Features></Features>
          </section>
          <section ref={productsRef}>
            <Products></Products>
          </section>
          <WhyChooseMithas />
          <section id="quality" ref={commitmentRef}>
            <OurCommitment></OurCommitment>
          </section>
          <section id="testimonials" ref={testimonialRef}>
            <Testimonials></Testimonials>
            <OurHeritage></OurHeritage>
          </section>
          <section ref={journeyRef}>
            <OurJourney />
          </section>
          <section ref={visionRef}>
            <DirectorsVision />
          </section>
          <section id="contact" ref={contactRef}>
            <Contact></Contact>
          </section>
        </>
      )}
      <Footer></Footer>
      <Whatsapp></Whatsapp>
    </>
  );
}

export default App;
