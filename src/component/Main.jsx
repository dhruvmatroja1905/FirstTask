import React, { lazy, Suspense } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Category from './Category';
import Feature from './Feature';
import About from './About';
import HeroSection from './HeroSection';

// Lazy load Product component
const Product = lazy(() => import('./Product'));

const Main = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>

      <div>
        <HeroSection />
      </div>

      <div>
        <About />
      </div>

      <div>
        <Feature />
      </div>

      <div>
        <Category />
      </div>

      <div>
        {/* Lazy loaded Product component */}
        <Suspense fallback={<div>Loading...</div>}>
          <Product />
        </Suspense>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Main;
