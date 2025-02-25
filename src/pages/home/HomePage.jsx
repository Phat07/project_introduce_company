import React, { useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useScroll, ScrollControls, Scroll, Environment } from '@react-three/drei';
import { useTranslation } from 'react-i18next';
import gsap from 'gsap';
import MorphingText from '../../components/ui/morphing-text';
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

  useFrame(() => {
    if (cameraRef.current) {
      const progress = scrollYProgress.get();
      gsap.to(camera.position, {
        y: -progress * 10,
        duration: 0.5,
        ease: 'power2.out'
      });
    }
  });

  return null;
};

const HomePage = () => {
  const { t } = useTranslation();

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
    <div className="home-container">
      <Canvas
        className="canvas-container"
        camera={{ position: [0, 0, 5], fov: 75 }}
      >
        <Environment preset="city" />
        <ScrollControls pages={4} damping={0.25}>
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
  );
};

export default HomePage;
