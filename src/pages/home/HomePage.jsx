import React, { useEffect, useRef, useState, useCallback, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useScroll, ScrollControls, Scroll, Environment, OrbitControls } from '@react-three/drei';
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';
import MorphingText from '../../components/ui/morphing-text';
import LoadingScreen from '../../components/ui/loading-screen';
import { ModelLoader } from '../../components/ui/model-loader'; 
import { Marquee } from '../../components/ui/marquee';
import { ServiceModel } from '../../components/3d/ServiceModel';
import './HomePage.css';

// Client Logos
import AdidasLogo from '../../assets/adidas.jpg';
import AeonLogo from '../../assets/aeon.jpg';
import BestLogo from '../../assets/best.jpg';
import CoachLogo from '../../assets/coach.jpg';
import DamCamauLogo from '../../assets/damcamau.jpg';
import DXCLogo from '../../assets/dxc.jpg';
import GoldLogo from '../../assets/gold.jpg';
import LXLogo from '../../assets/lx.jpg';
import LYBLogo from '../../assets/lyb.jpg';
import NikeLogo from '../../assets/nike.jpg';
import ProwtechLogo from '../../assets/prowtech.jpg';
import SMGLogo from '../../assets/smg.jpg';
import SmileLogo from '../../assets/smile.jpg';
import SwaroLogo from '../../assets/swaro.jpg';
import TrustLogo from '../../assets/trust.jpg';
import VNGLogo from '../../assets/vng.jpg';

// Partner Logos
import HPELogo from '../../assets/HPE.jpg';
import HuaweiLogo from '../../assets/Huawei.jpg';
import UbiquitiLogo from '../../assets/UBIQUITI.png';
import AvayaLogo from '../../assets/avaya.jpg';
import CiscoLogo from '../../assets/cisco.jpg';
import DahuaLogo from '../../assets/dahua.jpg';
import DellLogo from '../../assets/dell.jpg';
import FortinetLogo from '../../assets/fortinet.jpg';
import HikLogo from '../../assets/hik.jpg';
import JuniperLogo from '../../assets/juniper.jpg';
import LenovoLogo from '../../assets/lenovo.jpg';
import PolyLogo from '../../assets/poly.jpg';
import SuperLogo from '../../assets/super.jpg';
import ViettelLogo from '../../assets/viettel.jpg';
import VNPTLogo from '../../assets/vnpt.jpg';

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

const ServiceModelCanvas = ({ isMain = false }) => {
  const [isModelLoading, setIsModelLoading] = useState(true);

  return (
    <div 
      style={{ 
        width: '100%', 
        height: '100%', 
        position: 'relative', 
        zIndex: 1,
        maxHeight: isMain ? '600px' : '300px'
      }}
    >
      {isModelLoading && <ModelLoader />}
      <Canvas
        camera={{ 
          position: isMain ? [0, 1.5, 3] : [0, 2, 5], 
          fov: isMain ? 60 : 45,
          near: 0.1,
          far: 1000
        }}
        style={{ width: '100%', height: '100%' }}
        dpr={[1, 2]}
        performance={{ min: 0.5 }}
        frameloop={isMain ? "always" : "demand"}
      >
        <ambientLight intensity={0.7} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} />
        <Suspense fallback={null}>
          <ServiceModel 
            modelPath="/models/procedurally_made_cyberpunk_building.glb"
            onLoad={() => setIsModelLoading(false)}
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
            autoRotate={false}
            autoRotateSpeed={0.5}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

const ClientsSection = () => {
  const { t } = useTranslation();
  const clients = [
    { name: 'Adidas', logo: AdidasLogo },
    { name: 'AEON', logo: AeonLogo },
    { name: 'Best', logo: BestLogo },
    { name: 'Coach', logo: CoachLogo },
    { name: 'Dam Ca Mau', logo: DamCamauLogo },
    { name: 'DXC', logo: DXCLogo },
    { name: 'Gold', logo: GoldLogo },
    { name: 'LX', logo: LXLogo },
    { name: 'LYB', logo: LYBLogo },
    { name: 'Nike', logo: NikeLogo },
    { name: 'Prowtech', logo: ProwtechLogo },
    { name: 'SMG', logo: SMGLogo },
    { name: 'Smile', logo: SmileLogo },
    { name: 'Swarovski', logo: SwaroLogo },
    { name: 'Trust', logo: TrustLogo },
    { name: 'VNG', logo: VNGLogo },
  ];

  return (
    <Section className="clients-section">
      <h2 className="section-title">{t('clients.title')}</h2>
      <Marquee className="clients-marquee" pauseOnHover>
        {clients.map((client, index) => (
          <div key={index} className="client-logo">
            <img src={client.logo} alt={client.name} className="h-12 w-auto mx-8" />
          </div>
        ))}
      </Marquee>
    </Section>
  );
};

const PartnersSection = () => {
  const { t } = useTranslation();
  const partners = [
    { name: 'HPE', logo: HPELogo },
    { name: 'Huawei', logo: HuaweiLogo },
    { name: 'UBIQUITI', logo: UbiquitiLogo },
    { name: 'Avaya', logo: AvayaLogo },
    { name: 'Cisco', logo: CiscoLogo },
    { name: 'Dahua', logo: DahuaLogo },
    { name: 'Dell', logo: DellLogo },
    { name: 'Fortinet', logo: FortinetLogo },
    { name: 'Hikvision', logo: HikLogo },
    { name: 'Juniper', logo: JuniperLogo },
    { name: 'Lenovo', logo: LenovoLogo },
    { name: 'Poly', logo: PolyLogo },
    { name: 'Super Micro', logo: SuperLogo },
    { name: 'Viettel', logo: ViettelLogo },
    { name: 'VNPT', logo: VNPTLogo },
  ];

  return (
    <Section className="partners-section">
      <h2 className="section-title">{t('partners.title')}</h2>
      <Marquee className="partners-marquee" pauseOnHover reverse>
        {partners.map((partner, index) => (
          <div key={index} className="partner-logo">
            <img src={partner.logo} alt={partner.name} className="h-12 w-auto mx-8" />
          </div>
        ))}
      </Marquee>
    </Section>
  );
};

const HomePage = () => {
  const { t } = useTranslation();
  const isMobile = window.innerWidth <= 768;
  const [isLoading, setIsLoading] = useState(true);
  const mainRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Optimize scroll performance
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
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
    <div className="home-page-container" ref={mainRef}>
      {isLoading && <LoadingScreen />}
      <main>
        <div className="content-wrapper">
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
          <Section className="services-section" id="services">
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

          {/* Clients Section */}
          <ClientsSection />

          {/* Partners Section */}
          <PartnersSection />

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
        </div>
      </main>
    </div>
  );
};

export default HomePage;
