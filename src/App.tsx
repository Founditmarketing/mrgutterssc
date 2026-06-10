/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import FAB from './components/layout/FAB';
import Home from './pages/Home';
import ServicePage from './pages/ServicePage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import ServiceAreaPage from './pages/ServiceAreaPage';
import ServicesIndexPage from './pages/ServicesIndexPage';
import ServiceAreasIndexPage from './pages/ServiceAreasIndexPage';
import GalleryPage from './pages/GalleryPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import ReviewsPage from './pages/ReviewsPage';
import LoadingScreen from './components/layout/LoadingScreen';
import { useState, useCallback, useEffect } from 'react';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export default function App() {
  const [loadingMounted, setLoadingMounted] = useState(true);
  const [appVisible, setAppVisible] = useState(false);

  const handleLoadDone = useCallback(() => {
    setLoadingMounted(false);
    setAppVisible(true);
  }, []);

  return (
    <>
      {loadingMounted && <LoadingScreen onDone={handleLoadDone} />}

      <BrowserRouter>
        <ScrollToTop />
        <div
          className="flex flex-col min-h-screen bg-slate-50 font-sans selection:bg-accent selection:text-primary md:pb-0 pb-20"
          style={{
            transition: 'opacity 0.8s ease-out',
            opacity: appVisible ? 1 : 0,
            pointerEvents: appVisible ? 'auto' : 'none',
          }}
        >
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<ServicesIndexPage />} />
              <Route path="/services/:id" element={<ServicePage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/service-areas" element={<ServiceAreasIndexPage />} />
              <Route path="/service-areas/:city" element={<ServiceAreaPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/:slug" element={<BlogPostPage />} />
              <Route path="/reviews" element={<ReviewsPage />} />
            </Routes>
          </main>
          <Footer />
          <FAB />
        </div>
      </BrowserRouter>
    </>
  );
}
