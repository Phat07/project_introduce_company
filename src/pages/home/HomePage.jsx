import React, { useRef, useCallback, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useScroll, ScrollControls, Scroll, Environment } from '@react-three/drei';
import { useTranslation } from 'react-i18next';
import gsap from 'gsap';
import MorphingText from '../../components/ui/morphing-text';
import LoadingScreen from '../../components/ui/loading-screen';
import './HomePage.css';

const Section = ({ children, className = '' }) => {
  return (
    <section className={`section-container ${className}`}>
      <div className="section-content">
        {children}
      </div>
    </section>
  );
};

const ScrollAnimation = () => {
  const { scrollYProgress } = useScroll();
  const { camera } = useThree();
  const cameraRef = useRef();
  const lastScrollY = useRef(0);
  const rafId = useRef();
  
  // Throttle scroll updates
  const updateCamera = useCallback(() => {
    if (!cameraRef.current) return;
    
    const currentScrollY = scrollYProgress.get();
    const scrollDiff = Math.abs(currentScrollY - lastScrollY.current);
    
    // Only update if scroll difference is significant
    if (scrollDiff > 0.001) {
      gsap.to(camera.position, {
        y: -currentScrollY * 10,
        duration: 0.3,
        ease: 'power2.out',
        overwrite: true
      });
      lastScrollY.current = currentScrollY;
    }
    
    rafId.current = requestAnimationFrame(updateCamera);
  }, [camera.position, scrollYProgress]);

  useFrame(() => {
    if (!rafId.current) {
      rafId.current = requestAnimationFrame(updateCamera);
    }
  });

  // Cleanup
  React.useEffect(() => {
    return () => {
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, []);

  return null;
};

const HomePage = () => {
  const { t } = useTranslation();
  const isMobile = window.innerWidth <= 768;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time and resources loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust time as needed

    return () => clearTimeout(timer);
  }, []);

  const mainTitleTexts = [
    t('hero.title'),
    "DIGITAL TRANSFORMATION",
    "数字化转型",
  ];

  const subTitleTexts = [
    t('hero.subtitle'),
    "COMPREHENSIVE",
    "全面的",
  ];

  return (
    <>
      {isLoading && <LoadingScreen />}
      <div className="home-container">
        <Canvas
          className="canvas-container"
          camera={{ position: [0, 0, 5], fov: isMobile ? 85 : 75 }}
          dpr={[1, 2]}
          performance={{ min: 0.5 }}
        >
          <Environment preset="city" />
          <ScrollControls 
            pages={4} 
            damping={isMobile ? 0.4 : 0.25}
            distance={isMobile ? 0.5 : 1}
          >
            <ScrollAnimation />
            <Scroll>
              {/* Add any 3D elements here */}
            </Scroll>
            <Scroll html style={{ width: '100%' }}>
              {/* Hero Section */}
              <Section className="hero-section">
                <div className="hero-content">
                  <div className="hero-title">
                    <MorphingText texts={mainTitleTexts} className="main-title" />
                    <MorphingText texts={subTitleTexts} className="highlight" />
                  </div>
                  <p className="hero-subtitle">
                    {t('hero.description')}
                  </p>
                  <button className="cta-button">{t('hero.cta')}</button>
                </div>
              </Section>

              {/* Services Section */}
              <Section className="services-section">
                <h2 className="section-title">{t('services.title')}</h2>
                <div className="services-grid">
                  <div className="service-card">
                    <h3>{t('services.digitalTransformation.title')}</h3>
                    <p>{t('services.digitalTransformation.description')}</p>
                  </div>
                  <div className="service-card">
                    <h3>{t('services.softwareDevelopment.title')}</h3>
                    <p>{t('services.softwareDevelopment.description')}</p>
                  </div>
                  <div className="service-card">
                    <h3>{t('services.security.title')}</h3>
                    <p>{t('services.security.description')}</p>
                  </div>
                </div>
              </Section>

              {/* About Section */}
              <Section className="about-section">
                <div className="about-content">
                  <h2 className="section-title">{t('about.title')}</h2>
                  <p className="about-text">
                    {t('about.description')}
                  </p>
                  <div className="stats-grid">
                    <div className="stat-item">
                      <h3>{t('about.stats.projects.number')}</h3>
                      <p>{t('about.stats.projects.label')}</p>
                    </div>
                    <div className="stat-item">
                      <h3>{t('about.stats.clients.number')}</h3>
                      <p>{t('about.stats.clients.label')}</p>
                    </div>
                    <div className="stat-item">
                      <h3>{t('about.stats.experts.number')}</h3>
                      <p>{t('about.stats.experts.label')}</p>
                    </div>
                  </div>
                </div>
              </Section>

              {/* Contact Section */}
              <Section className="contact-section">
                <h2 className="section-title">{t('contact.title')}</h2>
                <div className="contact-content">
                  <form className="contact-form">
                    <input type="text" placeholder={t('contact.form.name')} />
                    <input type="email" placeholder={t('contact.form.email')} />
                    <textarea placeholder={t('contact.form.message')}></textarea>
                    <button type="submit" className="submit-button">
                      {t('contact.form.submit')}
                    </button>
                  </form>
                </div>
              </Section>
            </Scroll>
          </ScrollControls>
        </Canvas>
      </div>
    </>
  );
};

export default HomePage;
