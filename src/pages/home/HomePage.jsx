import React, { useRef, useCallback, useState, useEffect, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useScroll, ScrollControls, Scroll, Environment, OrbitControls } from '@react-three/drei';
import { useTranslation } from 'react-i18next';
import gsap from 'gsap';
import MorphingText from '../../components/ui/morphing-text';
import LoadingScreen from '../../components/ui/loading-screen';
import './HomePage.css';
import { ServiceModel } from '../../components/3d/ServiceModel';

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

const ServiceModelCanvas = ({ isMain = false }) => (
  <div style={{ width: '100%', height: '100%', position: 'relative', zIndex: 1 }}>
    <Canvas
      camera={{ 
        position: isMain ? [0, 1.5, 3] : [0, 2, 5], 
        fov: isMain ? 60 : 45,
        near: 0.1,
        far: 1000
      }}
      style={{ width: '100%', height: '100%' }}
    >
      <ambientLight intensity={0.7} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} />
      <Suspense fallback={null}>
        <ServiceModel 
          modelPath="/models/procedurally_made_cyberpunk_building.glb"
          scale={isMain ? 0.09 : 0.015}
          position={[0, isMain ? -0.2 : -1, 0]}
          rotation={[0, Math.PI / 4, 0]}
        />
        <Environment preset="city" />
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 2.5}
          maxPolarAngle={Math.PI / 2.5}
          autoRotate={isMain}
          autoRotateSpeed={0.5}
        />
      </Suspense>
    </Canvas>
  </div>
);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement form submission logic here
    console.log('Form submitted:', e.target);
  };

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
                <div className="section-content">
                  <div className="services-header">
                    <div className="model-container main-model">
                      <ServiceModelCanvas isMain={true} />
                    </div>
                    <h2 className="section-title">{t('services.title')}</h2>
                  </div>
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
              <Section className="contact-section" id="contact">
                <div className="contact-content">
                  <h2 className="contact-title">{t('contact.title')}</h2>
                  <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="name">{t('contact.form.name')}</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        placeholder={t('contact.form.namePlaceholder')}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">{t('contact.form.email')}</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        placeholder={t('contact.form.emailPlaceholder')}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="message">{t('contact.form.message')}</label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        placeholder={t('contact.form.messagePlaceholder')}
                      />
                    </div>
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
