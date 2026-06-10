/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import FAB from './components/layout/FAB';
import Home from './pages/Home';
import ServicePage from './pages/ServicePage';
import LoadingScreen from './components/layout/LoadingScreen';
import { useState, useCallback } from 'react';

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
              <Route path="/services/:id" element={<ServicePage />} />
            </Routes>
          </main>
          <Footer />
          <FAB />
        </div>
      </BrowserRouter>
    </>
  );
}
