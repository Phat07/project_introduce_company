import React, { useState, useEffect, Suspense, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import { ServiceModel } from '../../components/3d/ServiceModel';
import StarField from '../../components/3d/StarField';
import { motion, AnimatePresence } from 'framer-motion';
import LoadingScreen from '../../components/ui/loading-screen';
import { ModelLoader } from '../../components/ui/model-loader';
import { Marquee } from '../../components/ui/marquee';
import MorphingText from '../../components/ui/morphing-text';
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

const ServiceModelCanvas = ({ isMain = false }) => {
  const [isModelLoading, setIsModelLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(true);
  const [isModelReady, setIsModelReady] = useState(false);
  const containerRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Khi component sắp vào viewport, bắt đầu load model
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          // Khi scroll ra khỏi viewport một khoảng xa mới unmount
          if (Math.abs(entry.intersectionRatio) < 0.1) {
            setIsVisible(false);
          }
        }
      },
      {
        rootMargin: '100px',
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5]
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const modelPath = process.env.NODE_ENV === 'production'
    ? 'https://project-introduce-company.vercel.app/models/procedurally_made_cyberpunk_building.glb'
    : '/models/procedurally_made_cyberpunk_building.glb';

  const handleModelLoad = () => {
    setIsModelLoading(false);
    setIsModelReady(true);
  };

  return (
    <div
      ref={containerRef}
      style={{
        width: '100%',
        height: '100%',
        position: 'relative',
        zIndex: 1,
        maxHeight: isMain ? '600px' : '300px',
        willChange: 'transform',
        background: '#000B1A',
        transition: 'opacity 0.3s ease-in-out',
        opacity: isModelReady ? 1 : 0
      }}
    >
      {isModelLoading && (
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          background: 'rgba(0, 11, 26, 0.8)',
          zIndex: 10
        }}>
          <ModelLoader />
        </div>
      )}
      <Canvas
        camera={{
          position: isMain ? [0, 1.5, 3] : [0, 2, 5],
          fov: isMain ? 60 : 45,
          near: 0.1,
          far: 1000
        }}
        style={{ 
          width: '100%', 
          height: '100%',
          willChange: 'transform',
          visibility: isVisible ? 'visible' : 'hidden'
        }}
        dpr={[1, 2]}
        performance={{ 
          min: 0.8,
          max: 1
        }}
        frameloop={isVisible ? "always" : "never"}
        gl={{
          alpha: false,
          antialias: true,
          powerPreference: "high-performance",
          failIfMajorPerformanceCaveat: true,
          preserveDrawingBuffer: true
        }}
      >
        <color attach="background" args={['#000B1A']} />
        <fog attach="fog" args={['#000B1A', 5, 20]} />

        <ambientLight intensity={0.2} />
        <directionalLight
          position={[10, 10, 5]}
          intensity={0.8}
          color="#4cc9ff"
        />

        <pointLight
          position={[-5, 2, -5]}
          intensity={0.6}
          color="#00ffff"
          distance={15}
          decay={2}
        />
        <pointLight
          position={[5, -2, 5]}
          intensity={0.4}
          color="#0066cc"
          distance={15}
          decay={2}
        />

        <Suspense fallback={null}>
          <StarField count={isMain ? 1500 : 800} />
          <ServiceModel
            modelPath={modelPath}
            onLoad={handleModelLoad}
            scale={isMain ? 0.09 : 0.015}
            position={[0, isMain ? -0.2 : -1, 0]}
            rotation={[0, Math.PI / 4, 0]}
          />
          <Environment preset="night" />
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

  const [activeNewsIndex, setActiveNewsIndex] = useState(0);

  const newsItems = [
    {
      image: '/images/news/smart-city.jpg',
      title: 'ThanhCong Solutions tổ chức hội thảo "Giao thông thông minh: Tương lai của thành phố hiện đại"',
      description: 'Hội thảo tập trung vào các giải pháp công nghệ tiên tiến cho hệ thống giao thông thông minh...',
      date: '26/02/2025'
    },
    {
      image: '/images/news/digital-transformation.jpg',
      title: 'Chuyển đổi số toàn diện: Giải pháp cho doanh nghiệp thời đại 4.0',
      description: 'ThanhCong Solutions giới thiệu các giải pháp chuyển đổi số toàn diện cho doanh nghiệp...',
      date: '25/02/2025'
    },
    {
      image: '/images/news/cybersecurity.jpg',
      title: 'Bảo mật thông tin: Thách thức và giải pháp trong kỷ nguyên số',
      description: 'Các chuyên gia hàng đầu thảo luận về các giải pháp bảo mật trong thời đại số...',
      date: '24/02/2025'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveNewsIndex((current) => (current + 1) % newsItems.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-page-container" ref={mainRef}>
      {isLoading && <LoadingScreen />}
      <motion.div 
        className="content-wrapper"
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.8 }}
      >
        <main>
          {/* Hero Section */}
          <Section className="hero-section">
            <motion.div 
              className="hero-content"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: isLoading ? 0 : 1, y: isLoading ? 50 : 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <motion.div 
                className="hero-title"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isLoading ? 0 : 1, y: isLoading ? 20 : 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                <MorphingText texts={mainTitleTexts} className="main-title" />
                <MorphingText texts={subTitleTexts} className="highlight" />
              </motion.div>
              <motion.p 
                className="hero-subtitle text-black"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isLoading ? 0 : 1, y: isLoading ? 20 : 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                {t('hero.description')}
              </motion.p>
              <motion.button 
                className="cta-button"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: isLoading ? 0 : 1, scale: isLoading ? 0.9 : 1 }}
                transition={{ delay: 1, duration: 0.4 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t('hero.cta')}
              </motion.button>
              <motion.div 
                className="tech-icons"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isLoading ? 0 : 1, y: isLoading ? 20 : 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
              >
                {[
                  { fill: "#1877F2", path: "M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" },
                  { fill: "#FF0000", path: "M21.582,6.186c-0.23-0.86-0.908-1.538-1.768-1.768C18.254,4,12,4,12,4S5.746,4,4.186,4.418 c-0.86,0.23-1.538,0.908-1.768,1.768C2,7.746,2,12,2,12s0,4.254,0.418,5.814c0.23,0.86,0.908,1.538,1.768,1.768 C5.746,20,12,20,12,20s6.254,0,7.814-0.418c0.861-0.23,1.538-0.908,1.768-1.768C22,16.254,22,12,22,12S22,7.746,21.582,6.186z M10,15.464V8.536L16,12L10,15.464z" },
                  { fill: "#0A66C2", path: "M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.68 1.68 0 0 0-1.68 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" }
                ].map((icon, index) => (
                  <motion.div 
                    key={index}
                    className="icon-container"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: isLoading ? 0 : 1, scale: isLoading ? 0 : 1 }}
                    transition={{ delay: 1.4 + index * 0.2, duration: 0.4 }}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <svg viewBox="0 0 24 24" width="24" height="24">
                      <path fill={icon.fill} d={icon.path} />
                    </svg>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </Section>
          <Section className="news-highlight-section">
            <div className="news-highlight-container">
              <div className="news-title">
                <h2>TIN NỔI BẬT</h2>
              </div>
              <motion.div className="news-content">
                <AnimatePresence mode="wait">
                  <motion.div 
                    key={activeNewsIndex}
                    className="news-item"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: isLoading ? 0 : 1, y: isLoading ? 50 : 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 0.5 }}
                  >
                    <motion.img 
                      src={newsItems[activeNewsIndex].image} 
                      alt={newsItems[activeNewsIndex].title} 
                      className="news-image"
                      initial={{ scale: 0.9 }}
                      animate={{ scale: isLoading ? 0.9 : 1 }}
                      transition={{ duration: 0.5 }}
                    />
                    <div className="news-text">
                      <motion.h3
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: isLoading ? 0 : 1, x: isLoading ? -20 : 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        {newsItems[activeNewsIndex].title}
                      </motion.h3>
                      <motion.p 
                        className="news-description"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: isLoading ? 0 : 1, x: isLoading ? -20 : 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        {newsItems[activeNewsIndex].description}
                      </motion.p>
                      <motion.div 
                        className="news-meta"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isLoading ? 0 : 1 }}
                        transition={{ delay: 0.4 }}
                      >
                        <span className="news-date">{newsItems[activeNewsIndex].date}</span>
                        {/* <button className="read-more-btn">Xem thêm</button> */}
                      </motion.div>
                    </div>
                  </motion.div>
                </AnimatePresence>
                <div className="news-dots">
                  {newsItems.map((_, index) => (
                    <motion.div
                      key={index}
                      className={`news-dot ${index === activeNewsIndex ? 'active' : ''}`}
                      onClick={() => setActiveNewsIndex(index)}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    />
                  ))}
                </div>
              </motion.div>
            </div>
          </Section>

          {/* Services Section */}
          <Section className="services-section" id="services">
            <div className="section-content">
              <div className="services-header">
                <div className="model-container main-model">
                  <ServiceModelCanvas isMain={true} />
                </div>
                {/* <h2 className="section-title">{t('services.title')}</h2> */}
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

          {/* News Highlight Section */}

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
          {/* <Section className="contact-section" id="contact">
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
          </Section> */}
        </main>
      </motion.div>
    </div>
  );
};

export default HomePage;
