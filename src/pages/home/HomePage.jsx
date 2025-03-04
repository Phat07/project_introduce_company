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
import Lens from '../../components/ui/lens'; // Import Lens component

// Client Logos
import AdidasLogo from '../../assets/adidas.png';
import AeonLogo from '../../assets/aeon.png';
import BestLogo from '../../assets/best.png';
import CoachLogo from '../../assets/coach.jpg';
import DamCamauLogo from '../../assets/damcamau.jpg';
import DXCLogo from '../../assets/dxc.png';
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
import HPELogo from '../../assets/HPE.png';
import HuaweiLogo from '../../assets/Huawei.jpg';
import UbiquitiLogo from '../../assets/UBIQUITI.png';
import ArubLogo from '../../assets/aruba-networks.png';
import AvayaLogo from '../../assets/avaya.jpg';
import CiscoLogo from '../../assets/cisco.jpg';
import DahuaLogo from '../../assets/dahua.jpg';
import DellLogo from '../../assets/dell.jpg';
import FortinetLogo from '../../assets/fortinet.jpg';
import HikLogo from '../../assets/hik.jpg';
import JuniperLogo from '../../assets/juniper.jpg';
import LenovoLogo from '../../assets/lenovo.jpg';
import MerakiLogo from '../../assets/meraki-logo-brand.png';
import MikroTikLogo from '../../assets/MikroTik_Logo.png';
import PaloAltoLogo from '../../assets/PaloAltoNetworks.png';
import PolyLogo from '../../assets/poly.jpg';
import SophosLogo from '../../assets/Sophos-Logo.wine.png';
import SuperLogo from '../../assets/super.jpg';
import ViettelLogo from '../../assets/viettel.png';
import VNPTLogo from '../../assets/vnpt.png';

import MobileLogo from '../../assets/mobile.jpg';
import ViettelIDCLogo from '../../assets/viettelidc.jpg';
import ViettelMoneyLogo from '../../assets/viettelMoney.png';
import VinaphoneLogo from '../../assets/vinaphone.jpg';
import AWSLogo from '../../assets/aws.png';

import { Link } from 'react-router-dom';
import NewsHighlightSection from './NewsHighlightSection';
import { Modal } from 'antd';
import { Pointer } from '../../components/ui/pointer';
import SparklesText from '../../components/ui/sparklestext';

const Section = ({ children, className = '' }) => (
  <section className={`section-container ${className}`}>
    <div className="section-content">
      {children}
    </div>
  </section>
);

const ScrollAnimation = () => {
  const { scrollYProgress } = useScroll();
  const { camera } = useThree();
  const cameraRef = useRef();
  const lastScrollY = useRef(0);
  const rafId = useRef();

  const updateCamera = React.useCallback(() => {
    if (!cameraRef.current) return;

    const currentScrollY = scrollYProgress.get();
    const scrollDiff = Math.abs(currentScrollY - lastScrollY.current);

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

  React.useFrame(() => {
    if (!rafId.current) {
      rafId.current = requestAnimationFrame(updateCamera);
    }
  });

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
  const [isVisible, setIsVisible] = useState(true);
  const [isModelReady, setIsModelReady] = useState(false);
  const containerRef = useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else if (Math.abs(entry.intersectionRatio) < 0.1) {
          setIsVisible(false);
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
    setTimeout(() => {
      setIsModelReady(true);
    }, 100);
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
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          background: 'rgba(0, 11, 26, 0.8)',
          zIndex: 10,
          opacity: isModelLoading ? 1 : 0,
          transition: 'opacity 0.5s ease-in-out',
          pointerEvents: isModelLoading ? 'auto' : 'none'
        }}
      >
        <ModelLoader />
      </div>
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          opacity: isModelReady ? 1 : 0,
          transition: 'opacity 0.5s ease-in-out'
        }}
      >
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
              rotation={[0, isMain ? Math.PI / 4 : 0, 0]}
            />
            <Environment preset="city" />
          </Suspense>
          <OrbitControls
            enablePan={false}
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 3}
          />
        </Canvas>
      </div>
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

  const [selectedClient, setSelectedClient] = useState(null);

  const handleClientClick = React.useCallback((client) => {
    setSelectedClient(client);
  }, []);

  const handleCloseClientModal = React.useCallback(() => {
    const modalContent = document.querySelector('.client-modal .ant-modal-content');
    if (modalContent) {
      modalContent.style.transition = 'all 0.3s ease-in-out';
      modalContent.style.transform = 'scale(0.95)';
      modalContent.style.opacity = '0';
    }
    setTimeout(() => {
      setSelectedClient(null);
    }, 200);
  }, []);

  return (
    <Section className="clients-section">
      <h2 className="section-title">{t('clients.title')}</h2>
      <Marquee className="clients-marquee" pauseOnHover gradient={false}>
        {clients.map((client, index) => (
          <Lens key={index} zoomFactor={1.2} lensSize={200}>
            <motion.div
              key={index}
              className="client-logo relative cursor-pointer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.stopPropagation();
                handleClientClick(client.name.toLowerCase());
              }}
            >
              <img
                src={client.logo}
                alt={client.name}
                className="h-12 w-auto mx-8 pointer-events-none"
              />
            </motion.div>
          </Lens>
        ))}
      </Marquee>

      <AnimatePresence>
        {selectedClient && (
          <Modal
            open={!!selectedClient}
            onCancel={handleCloseClientModal}
            footer={null}
            centered
            width={800}
            className="client-modal"
            maskClosable={true}
            destroyOnClose
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="p-6 bg-white rounded-lg shadow-xl"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <motion.img
                    src={clients.find(c => c.name.toLowerCase() === selectedClient)?.logo}
                    alt={t(`clients.details.${selectedClient}.name`)}
                    className="w-16 h-16 object-contain"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  />
                  <motion.h2
                    className="text-2xl font-bold text-gray-900"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                  >
                    {t(`clients.details.${selectedClient}.name`)}
                  </motion.h2>
                </div>
                {/* <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  onClick={handleCloseClientModal}
                  className="text-gray-400 hover:text-gray-500 focus:outline-none"
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </motion.button> */}
              </div>

              <motion.div
                className="space-y-4"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <motion.p
                  className="text-gray-600"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {t(`clients.details.${selectedClient}.description`)}
                </motion.p>
                <motion.div
                  className="grid grid-cols-2 gap-4"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <motion.div
                    className="bg-gray-50 p-4 rounded-lg"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <h3 className="font-semibold text-gray-700">Industry</h3>
                    <p className="text-gray-600">
                      {t(`clients.details.${selectedClient}.industry`)}
                    </p>
                  </motion.div>
                  <motion.div
                    className="bg-gray-50 p-4 rounded-lg"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <h3 className="font-semibold text-gray-700">Partnership</h3>
                    <p className="text-gray-600">
                      {t(`clients.details.${selectedClient}.partnership`)}
                    </p>
                  </motion.div>
                </motion.div>
                <motion.a
                  href={t(`clients.details.${selectedClient}.website`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  whileHover={{ scale: 1.05, backgroundColor: "#2563EB" }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  Visit Website
                </motion.a>
              </motion.div>
            </motion.div>
          </Modal>
        )}
      </AnimatePresence>
    </Section>
  );
};

const PartnersSection = () => {
  const { t } = useTranslation();
  const partners = [
    { name: 'HPE', logo: HPELogo },
    { name: 'Huawei', logo: HuaweiLogo },
    { name: 'UBIQUITI', logo: UbiquitiLogo },
    { name: 'Aruba Networks', logo: ArubLogo },
    { name: 'Avaya', logo: AvayaLogo },
    { name: 'Cisco', logo: CiscoLogo },
    { name: 'Dahua', logo: DahuaLogo },
    { name: 'Dell', logo: DellLogo },
    { name: 'Fortinet', logo: FortinetLogo },
    { name: 'Hikvision', logo: HikLogo },
    { name: 'Juniper', logo: JuniperLogo },
    { name: 'Lenovo', logo: LenovoLogo },
    { name: 'Meraki', logo: MerakiLogo },
    { name: 'MikroTik', logo: MikroTikLogo },
    { name: 'Palo Alto Networks', logo: PaloAltoLogo },
    { name: 'Poly', logo: PolyLogo },
    { name: 'Sophos', logo: SophosLogo },
    { name: 'Super Micro', logo: SuperLogo },
    { name: 'Viettel', logo: ViettelLogo },
    { name: 'VNPT', logo: VNPTLogo },
    { name: 'Mobile', logo: MobileLogo },
    { name: 'ViettelIDC', logo: ViettelIDCLogo },
    { name: 'ViettelMoney', logo: ViettelMoneyLogo },
    { name: 'Vinaphone', logo: VinaphoneLogo },
    { name: 'AWS', logo: AWSLogo },
  ];

  const [selectedPartner, setSelectedPartner] = useState(null);

  const handlePartnerClick = React.useCallback((partner) => {
    setSelectedPartner(partner);
  }, []);

  const handleClosePartnerModal = React.useCallback(() => {
    const modalContent = document.querySelector('.partner-modal .ant-modal-content');
    if (modalContent) {
      modalContent.style.transition = 'all 0.3s ease-in-out';
      modalContent.style.transform = 'scale(0.95)';
      modalContent.style.opacity = '0';
    }
    setTimeout(() => {
      setSelectedPartner(null);
    }, 200);
  }, []);

  return (
    <Section className="partners-section">
      <h2 className="section-title">{t('partners.title')}</h2>
      <Marquee className="partners-marquee" pauseOnHover gradient={false} speed={50}>
        {partners.map((partner, index) => (
          <Lens key={index} zoomFactor={1.2} lensSize={200}>
            <motion.div
              key={index}
              className="partner-logo relative cursor-pointer touch-manipulation"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                handlePartnerClick(partner.name.toLowerCase());
              }}
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-12 w-auto mx-8 pointer-events-none select-none"
                draggable="false"
              />
            </motion.div>
          </Lens>
        ))}
      </Marquee>

      <AnimatePresence>
        {selectedPartner && (
          <Modal
            open={!!selectedPartner}
            onCancel={handleClosePartnerModal}
            footer={null}
            centered
            width={800}
            className="partner-modal"
            maskClosable={true}
            destroyOnClose
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="p-6 bg-white rounded-lg shadow-xl"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <motion.img
                    src={partners.find(p => p.name.toLowerCase() === selectedPartner)?.logo}
                    alt={t(`partners.details.${selectedPartner}.name`)}
                    className="w-16 h-16 object-contain"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  />
                  <motion.h2
                    className="text-2xl font-bold text-gray-900"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                  >
                    {t(`partners.details.${selectedPartner}.name`)}
                  </motion.h2>
                </div>
              </div>

              <motion.div
                className="space-y-4"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <motion.p
                  className="text-gray-600"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {t(`partners.details.${selectedPartner}.description`)}
                </motion.p>
                <motion.div
                  className="bg-gray-50 p-4 rounded-lg"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <h3 className="font-semibold text-gray-700 mb-2">Partnership Level</h3>
                  <p className="text-gray-600">
                    {t(`partners.details.${selectedPartner}.partnershipLevel`)}
                  </p>
                </motion.div>
                <motion.a
                  href={t(`partners.details.${selectedPartner}.website`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  whileHover={{ scale: 1.05, backgroundColor: "#2563EB" }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  Visit Website
                </motion.a>
              </motion.div>
            </motion.div>
          </Modal>
        )}
      </AnimatePresence>
    </Section>
  );
};

const HomePage = () => {
  const { t } = useTranslation();
  const isMobile = window.innerWidth <= 768;
  const [isLoading, setIsLoading] = useState(true);
  const mainRef = useRef(null);
  const [activeNewsIndex, setActiveNewsIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false); // State để điều khiển modal
  const [selectedNews, setSelectedNews] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);


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

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveNewsIndex((current) => (current + 1) % t('news.items', { returnObjects: true }).length);
    }, 6000);

    return () => clearInterval(interval);
  }, [t]);

  const mainTitleTexts = [
    "THANHCONG SOLUTIONS",
    "DIGITAL TRANSFORMATION",
    "数字化转型",
    "디지털 트랜스포메이션"
  ];

  const subTitleTexts = [
    "Đối tác tin cậy chuyển đổi số",
    "COMPREHENSIVE",
    "全面的",
    "포괄적인"
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', e.target);
  };

  // Lấy newsItems từ file translation
  const newsItems = t('news.items', { returnObjects: true }) || [];
  const showModal = (news) => {
    setSelectedNews(news);
    setIsModalOpen(true);
  };

  // Hàm đóng modal
  const handleCancel = () => {
    const modalContent = document.querySelector('.custom-modal .ant-modal-content');
    if (modalContent) {
      modalContent.style.transition = 'all 0.3s ease-in-out';
      modalContent.style.transform = 'scale(0.95)';
      modalContent.style.opacity = '0';
    }

    // Delay the actual closing
    setTimeout(() => {
      setIsModalOpen(false);
      setSelectedNews(null);
    }, 200);
  };
  const services = [
    {
      title: t('services.digitalTransformation.title'),
      description: t('services.digitalTransformation.description'),
      icon: <i className="fas fa-chart-line"></i>
    },
    {
      title: t('services.softwareDevelopment.title'),
      description: t('services.softwareDevelopment.description'),
      icon: <i className="fas fa-code"></i>
    },
    {
      title: t('services.security.title'),
      description: t('services.security.description'),
      icon: <i className="fas fa-lock"></i>
    }
  ];
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
                className="hero-title mb-12"
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
                <SparklesText
                  text={t('hero.description')}
                  colors={{ first: "#FF6D00", second: "#FE8BBB" }} // Optional: customize colors
                  sparklesCount={15} // Optional: customize number of sparkles
                />
                {/* {t('hero.description')} */}
              </motion.p>
              <motion.button
                className="cta-button"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: isLoading ? 0 : 1, scale: isLoading ? 0.9 : 1 }}
                transition={{ delay: 1, duration: 0.4 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/solutions" className='text-white hover:text-black'>{t('hero.cta')}</Link>
              </motion.button>
              <motion.div
                className="tech-icons cursor-pointer"
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

          {/* News Highlight Section */}
          <Section className="news-highlight-section">
            <Lens zoomFactor={1.2} lensSize={200}>
              <div className="news-highlight-container">
                <div className="news-title">
                  <h2>{t('news.title')}</h2>
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
                        className="news-image cursor-pointer"
                        initial={{ scale: 0.9 }}
                        animate={{ scale: isLoading ? 0.9 : 1 }}
                        onClick={() => showModal(newsItems[activeNewsIndex])}
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
                          {(newsItems[activeNewsIndex].description).slice(0, 300) + '...'}
                        </motion.p>
                        <motion.div
                          className="news-meta"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: isLoading ? 0 : 1 }}
                          transition={{ delay: 0.4 }}
                        >
                          <span className="news-date">{newsItems[activeNewsIndex].date}</span>
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
            </Lens>
          </Section>
          {/* <NewsHighlightSection isLoading={isLoading} /> */}
          {/* <Pointer /> */}

          {/* Services Section */}
          <Section className="services-section" id="services">
            <div className="services-content">
              <div className="services-header">
                <div className="model-container main-model">
                  <ServiceModelCanvas isMain={true} />
                </div>
              </div>
              <div className="services-grid">
                {services.map((service, index) => (
                  <Lens key={index} zoomFactor={1.2} lensSize={200}>
                    <div className="service-card">
                      <div className="service-icon">{service.icon}</div>
                      <h3>{service.title}</h3>
                      <p>{service.description}</p>
                    </div>
                  </Lens>
                ))}
              </div>
            </div>
          </Section>
          <Pointer>
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transform rotate-[-5deg]"
            >
              <circle cx="11" cy="11" r="7" stroke="#FF6D00" strokeWidth="2" />
              <path
                d="M20 20L16 16"
                stroke="#FF6D00"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </Pointer>

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
        <AnimatePresence>
          {isModalOpen && selectedNews && (
            <Modal
              open={isModalOpen}
              onCancel={handleCancel}
              footer={null} // Không hiển thị footer mặc định của Modal
              centered
              width={800} // Đặt chiều rộng modal
              className="custom-modal" // Class để tùy chỉnh Tailwind
              destroyOnClose // Xóa dữ liệu khi đóng modal
              maskTransitionName="fade"
              transitionName="custom-modal"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className="p-6" // Padding từ Tailwind
              >
                <img
                  src={selectedNews.image}
                  alt={selectedNews.title}
                  className="w-full h-64 object-cover rounded-lg mb-4" // Styling Tailwind cho ảnh
                />
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  {selectedNews.title}
                </h2>
                <p className="text-gray-700 mb-4">{selectedNews.description}</p>
                <div className="text-sm text-gray-500">
                  <span>{selectedNews.date}</span>
                </div>
                {/* Nội dung thêm nếu cần */}
                <p className="text-gray-600 mt-4">
                  {/* Đây là nơi bạn có thể thêm nội dung chi tiết hơn nếu muốn */}
                  {t('news.extraContentPlaceholder', {
                    defaultValue: 'This is additional content for the news item.',
                  })}
                </p>
              </motion.div>
            </Modal>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default HomePage;