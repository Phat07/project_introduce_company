import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, Button, Typography, Breadcrumb, Row, Col } from 'antd';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { ArrowDownOutlined, ArrowUpOutlined, CalendarOutlined, LeftOutlined, RightOutlined } from '@ant-design/icons';
import LoadingScreen from '../../components/ui/loading-screen';
import DynamicImage from '../../components/ui/dynamic-image';
import Lens from '../../components/ui/lens';
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const { Title, Paragraph } = Typography;

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const imageAnimation = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const similarSolutionAnimation = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut", staggerChildren: 0.1 }
};

const SolutionDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [loading, setLoading] = useState(true);
  const [solutionKey, setSolutionKey] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const mainRef = useRef(null);
  const imageRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(0); // Trang hiện tại (0, 1)
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [advantageGroup, setAdvantageGroup] = useState(0); // For rotating through groups of 3 advantages
  const [featureGroup, setFeatureGroup] = useState(0); // For rotating through groups of 3 features
  const [benefitGroup, setBenefitGroup] = useState(0); // For rotating through groups of 3 benefits
  const fadeInRight = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 50 }
  };

  // Data for sliding characteristics and features
  const characteristics = [
    {
      title: t('solutions.characteristics.tuyBienTheoNhuCau.title'),
      description: t('solutions.characteristics.tuyBienTheoNhuCau.description'),
      icon: '📝',
    },
    {
      title: t('solutions.characteristics.hoTroVaXuLySuCoNhan.title'),
      description: t('solutions.characteristics.hoTroVaXuLySuCoNhan.description'),
      icon: '🔧',
    },
    {
      title: t('solutions.characteristics.chatLuongTotNhat.title'),
      description: t('solutions.characteristics.chatLuongTotNhat.description'),
      icon: '⭐',
    },
  ];

  const features = [
    {
      title: t('solutions.features.kienThueRieng.title'),
      description: t('solutions.features.kienThueRieng.description'),
      image: 'https://example.com/city-network.jpg', // Replace with actual image URL
    },
  ];

  useEffect(() => {
    const items = t('solutions.items', { returnObjects: true });
    const foundKey = Object.keys(items).find(key => items[key].id === parseInt(id));
    setSolutionKey(foundKey);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Auto-slide every 10 seconds for tab change
    const slideInterval = setInterval(() => {
      // We don't auto-change tabs anymore
      // setCurrentSlide((prev) => (prev + 1) % 3);
    }, 3000);

    // Auto-rotate item groups every 5 seconds
    const itemGroupInterval = setInterval(() => {
      if (currentSlide === 0) {
        // Rotate advantages
        setAdvantageGroup(prev => {
          const advantages = t(`solutions.items.${solutionKey}.advantage`, { returnObjects: true }) || [];
          const totalGroups = Math.ceil(advantages.length / 3);
          return totalGroups > 0 ? (prev + 1) % totalGroups : 0;
        });
      } else if (currentSlide === 1) {
        // Rotate features
        setFeatureGroup(prev => {
          const features = t(`solutions.items.${solutionKey}.features`, { returnObjects: true }) || [];
          const totalGroups = Math.ceil(features.length / 3);
          return totalGroups > 0 ? (prev + 1) % totalGroups : 0;
        });
      } else if (currentSlide === 2) {
        // Rotate benefits
        setBenefitGroup(prev => {
          const benefits = t(`solutions.items.${solutionKey}.benefits`, { returnObjects: true }) || [];
          const totalGroups = Math.ceil(benefits.length / 3);
          return totalGroups > 0 ? (prev + 1) % totalGroups : 0;
        });
      }
    }, 3000);

    return () => {
      clearTimeout(timer);
      clearInterval(slideInterval);
      clearInterval(itemGroupInterval);
    };
  }, [id, t, currentSlide, solutionKey]);

  useEffect(() => {
    if (!loading && solutionKey) {
      gsap.from(mainRef.current, {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: "power3.out",
      });

      const imageWrapper = imageRef.current;
      gsap.from(imageWrapper, {
        scrollTrigger: {
          trigger: imageWrapper,
          start: "top center",
          end: "bottom top",
          scrub: 1,
        },
        y: 50,
        ease: "none",
      });
    }
  }, [loading, solutionKey]);

  if (loading) {
    return <LoadingScreen />;
  }

  if (!solutionKey) {
    return (
      <div className="text-center py-16" style={{ marginTop: "3rem" }}>
        <h1 className="text-2xl font-bold mb-4">{t('common.notFound')}</h1>
        <Button onClick={() => navigate('/solutions')} type="primary">
          {t('common.backToSolutions')}
        </Button>
      </div>
    );
  }

  const solutionData = t(`solutions.items.${solutionKey}`, { returnObjects: true });

  const similarSolutions = Object.entries(t('solutions.items', { returnObjects: true }))
    .filter(([key, data]) => key !== solutionKey && data.category === solutionData.category)
    .slice(0, 100) // Lấy 6 giải pháp tương tự
    .map(([key, data]) => ({ key, ...data }));
  const itemsPerPage = 3;
  const totalPages = Math.ceil(similarSolutions.length / itemsPerPage);
  const paginatedSolutions = similarSolutions.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const handlePrev = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="mt-12"
      >
        {/* Breadcrumb */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          {/* Breadcrumb và Button */}
          <motion.div
            className="w-full md:w-auto"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <Breadcrumb className="breadcrumb-custom">
              <Breadcrumb.Item>
                <a onClick={() => navigate('/')} className="text-gray-700 hover:text-[#ff6d00] transition-colors">
                  {t('home.title')}
                </a>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <a onClick={() => navigate('/solutions')} className="text-gray-700 hover:text-[#ff6d00] transition-colors">
                  {t('solutions.title')}
                </a>
              </Breadcrumb.Item>
              <Breadcrumb.Item className="text-gray-800 font-medium">
                {t(`solutions.items.${solutionKey}.title`)}
              </Breadcrumb.Item>
            </Breadcrumb>
          </motion.div>

          {/* Info Bar (ngang bên phải) */}
          <motion.div
            className="w-full md:w-auto flex flex-col md:flex-row gap-4 bg-gray-50 p-4 rounded-lg shadow-md info-bar"
            variants={fadeInRight}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <div className="info-item flex items-center gap-2 text-sm text-gray-600">
              <CalendarOutlined className="text-[#ff6d00]" />
              <span>Quan tâm - Liên hệ ngay</span>
            </div>
          </motion.div>
        </div>

        {/* Title */}
        <motion.div variants={fadeInUp} initial="initial" animate="animate" className="mb-8 bg-gray-100 p-6 rounded-lg">
          <Title level={2} className="text-center text-[#ff6d00]">
            {t(`solutions.items.${solutionKey}.title`)}
          </Title>
        </motion.div>

        {/* Tab Navigation */}
        <div className="mb-8 bg-white p-2 rounded-lg shadow-sm">
          <div className="flex justify-center border-b">
            {Array.isArray(t(`solutions.items.${solutionKey}.advantage`, { returnObjects: true })) && 
             t(`solutions.items.${solutionKey}.advantage`, { returnObjects: true }).length > 0 && (
              <div 
                className={`px-6 py-3 cursor-pointer ${currentSlide === 0 ? 'border-b-2 border-[#ff6d00] text-[#ff6d00]' : 'text-gray-600'}`}
                onClick={() => setCurrentSlide(0)}
              >
                {t('solutions.advantages')}
              </div>
            )}
            {Array.isArray(t(`solutions.items.${solutionKey}.features`, { returnObjects: true })) && 
             t(`solutions.items.${solutionKey}.features`, { returnObjects: true }).length > 0 && (
              <div 
                className={`px-6 py-3 cursor-pointer ${currentSlide === 1 ? 'border-b-2 border-[#ff6d00] text-[#ff6d00]' : 'text-gray-600'}`}
                onClick={() => setCurrentSlide(1)}
              >
                {t('solutions.features')}
              </div>
            )}
            {Array.isArray(t(`solutions.items.${solutionKey}.benefits`, { returnObjects: true })) && 
             t(`solutions.items.${solutionKey}.benefits`, { returnObjects: true }).length > 0 && (
              <div 
                className={`px-6 py-3 cursor-pointer ${currentSlide === 2 ? 'border-b-2 border-[#ff6d00] text-[#ff6d00]' : 'text-gray-600'}`}
                onClick={() => setCurrentSlide(2)}
              >
                {t('solutions.benefits')}
              </div>
            )}
          </div>
        </div>

        {/* Characteristics and Features Section */}
        {(
          (currentSlide === 0 && Array.isArray(t(`solutions.items.${solutionKey}.advantage`, { returnObjects: true })) && t(`solutions.items.${solutionKey}.advantage`, { returnObjects: true }).length > 0) ||
          (currentSlide === 1 && Array.isArray(t(`solutions.items.${solutionKey}.features`, { returnObjects: true })) && t(`solutions.items.${solutionKey}.features`, { returnObjects: true }).length > 0) ||
          (currentSlide === 2 && Array.isArray(t(`solutions.items.${solutionKey}.benefits`, { returnObjects: true })) && t(`solutions.items.${solutionKey}.benefits`, { returnObjects: true }).length > 0)
        ) && (
          <motion.div ref={mainRef} className="mb-8 bg-blue-50 p-6 rounded-lg" variants={fadeInUp} initial="initial" animate="animate">
            <Title level={3} className="text-[#ff6d00] mb-6 text-center">
              {currentSlide === 0 && t('solutions.advantages')}
              {currentSlide === 1 && t('solutions.features')}
              {currentSlide === 2 && t('solutions.benefits')}
            </Title>
            <div className="relative overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${currentSlide}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  {currentSlide === 0 && (
                    <div className="relative">
                      <div className="flex flex-wrap justify-center gap-4">
                        {Array.isArray(t(`solutions.items.${solutionKey}.advantage`, { returnObjects: true })) && 
                         (() => {
                           const advantages = t(`solutions.items.${solutionKey}.advantage`, { returnObjects: true });
                           if (!advantages || advantages.length === 0) return null;
                           
                           const totalGroups = Math.ceil(advantages.length / 3);
                           const normalizedGroup = advantageGroup % totalGroups;
                           const startIdx = normalizedGroup * 3;
                           const currentAdvantages = advantages.slice(startIdx, startIdx + 3);
                           
                           return currentAdvantages.map((advantage, index) => (
                             <div key={`advantage-${startIdx + index}`} className="w-full sm:w-[30%]">
                               <Card className="h-full bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                                 <div className="flex items-start">
                                   <span className="text-[#ff6d00] mr-3 text-xl">❖</span>
                                   <div>
                                     <p className="font-medium">{advantage}</p>
                                   </div>
                                 </div>
                               </Card>
                             </div>
                           ));
                         })()
                        }
                      </div>
                      
                      {/* Navigation buttons for advantages */}
                      {Array.isArray(t(`solutions.items.${solutionKey}.advantage`, { returnObjects: true })) && 
                       t(`solutions.items.${solutionKey}.advantage`, { returnObjects: true }).length > 3 && (
                        <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-2 pointer-events-none">
                          <button 
                            onClick={(e) => {
                              e.preventDefault();
                              const advantages = t(`solutions.items.${solutionKey}.advantage`, { returnObjects: true });
                              const totalGroups = Math.ceil(advantages.length / 3);
                              setAdvantageGroup(prev => (prev - 1 + totalGroups) % totalGroups);
                            }}
                            className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-[#ff6d00] hover:bg-gray-100 pointer-events-auto"
                          >
                            <span className="text-xl">&lt;</span>
                          </button>
                          <button 
                            onClick={(e) => {
                              e.preventDefault();
                              const advantages = t(`solutions.items.${solutionKey}.advantage`, { returnObjects: true });
                              const totalGroups = Math.ceil(advantages.length / 3);
                              setAdvantageGroup(prev => (prev + 1) % totalGroups);
                            }}
                            className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-[#ff6d00] hover:bg-gray-100 pointer-events-auto"
                          >
                            <span className="text-xl">&gt;</span>
                          </button>
                        </div>
                      )}
                    </div>
                  )}
                  
                  {currentSlide === 1 && (
                    <div className="relative">
                      <div className="flex flex-wrap justify-center gap-4">
                        {Array.isArray(t(`solutions.items.${solutionKey}.features`, { returnObjects: true })) && 
                         (() => {
                           const features = t(`solutions.items.${solutionKey}.features`, { returnObjects: true });
                           if (!features || features.length === 0) return null;
                           
                           const totalGroups = Math.ceil(features.length / 3);
                           const normalizedGroup = featureGroup % totalGroups;
                           const startIdx = normalizedGroup * 3;
                           const currentFeatures = features.slice(startIdx, startIdx + 3);
                           
                           return currentFeatures.map((feature, index) => (
                             <div key={`feature-${startIdx + index}`} className="w-full sm:w-[30%]">
                               <Card className="h-full bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                                 <div className="flex items-start">
                                   <span className="text-[#ff6d00] mr-3 text-xl">❖</span>
                                   <div>
                                     <p className="font-medium">{feature}</p>
                                   </div>
                                 </div>
                               </Card>
                             </div>
                           ));
                         })()
                        }
                      </div>
                      
                      {/* Navigation buttons for features */}
                      {Array.isArray(t(`solutions.items.${solutionKey}.features`, { returnObjects: true })) && 
                       t(`solutions.items.${solutionKey}.features`, { returnObjects: true }).length > 3 && (
                        <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-2 pointer-events-none">
                          <button 
                            onClick={(e) => {
                              e.preventDefault();
                              const features = t(`solutions.items.${solutionKey}.features`, { returnObjects: true });
                              const totalGroups = Math.ceil(features.length / 3);
                              setFeatureGroup(prev => (prev - 1 + totalGroups) % totalGroups);
                            }}
                            className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-[#ff6d00] hover:bg-gray-100 pointer-events-auto"
                          >
                            <span className="text-xl">&lt;</span>
                          </button>
                          <button 
                            onClick={(e) => {
                              e.preventDefault();
                              const features = t(`solutions.items.${solutionKey}.features`, { returnObjects: true });
                              const totalGroups = Math.ceil(features.length / 3);
                              setFeatureGroup(prev => (prev + 1) % totalGroups);
                            }}
                            className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-[#ff6d00] hover:bg-gray-100 pointer-events-auto"
                          >
                            <span className="text-xl">&gt;</span>
                          </button>
                        </div>
                      )}
                    </div>
                  )}
                  
                  {currentSlide === 2 && (
                    <div className="relative">
                      <div className="flex flex-wrap justify-center gap-4">
                        {Array.isArray(t(`solutions.items.${solutionKey}.benefits`, { returnObjects: true })) && 
                         (() => {
                           const benefits = t(`solutions.items.${solutionKey}.benefits`, { returnObjects: true });
                           if (!benefits || benefits.length === 0) return null;
                           
                           const totalGroups = Math.ceil(benefits.length / 3);
                           const normalizedGroup = benefitGroup % totalGroups;
                           const startIdx = normalizedGroup * 3;
                           const currentBenefits = benefits.slice(startIdx, startIdx + 3);
                           
                           return currentBenefits.map((benefit, index) => (
                             <div key={`benefit-${startIdx + index}`} className="w-full sm:w-[30%]">
                               <Card className="h-full bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                                 <div className="flex items-start">
                                   <span className="text-[#ff6d00] mr-3 text-xl">❖</span>
                                   <div>
                                     <p className="font-medium">{benefit}</p>
                                   </div>
                                 </div>
                               </Card>
                             </div>
                           ));
                         })()
                        }
                      </div>
                      
                      {/* Navigation buttons for benefits */}
                      {Array.isArray(t(`solutions.items.${solutionKey}.benefits`, { returnObjects: true })) && 
                       t(`solutions.items.${solutionKey}.benefits`, { returnObjects: true }).length > 3 && (
                        <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-2 pointer-events-none">
                          <button 
                            onClick={(e) => {
                              e.preventDefault();
                              const benefits = t(`solutions.items.${solutionKey}.benefits`, { returnObjects: true });
                              const totalGroups = Math.ceil(benefits.length / 3);
                              setBenefitGroup(prev => (prev - 1 + totalGroups) % totalGroups);
                            }}
                            className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-[#ff6d00] hover:bg-gray-100 pointer-events-auto"
                          >
                            <span className="text-xl">&lt;</span>
                          </button>
                          <button 
                            onClick={(e) => {
                              e.preventDefault();
                              const benefits = t(`solutions.items.${solutionKey}.benefits`, { returnObjects: true });
                              const totalGroups = Math.ceil(benefits.length / 3);
                              setBenefitGroup(prev => (prev + 1) % totalGroups);
                            }}
                            className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-[#ff6d00] hover:bg-gray-100 pointer-events-auto"
                          >
                            <span className="text-xl">&gt;</span>
                          </button>
                        </div>
                      )}
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
            
            {/* Pagination Indicators */}
            {/* <div className="flex justify-center mt-6">
              <div className="flex gap-2">
                {Array.isArray(t(`solutions.items.${solutionKey}.advantage`, { returnObjects: true })) && 
                 t(`solutions.items.${solutionKey}.advantage`, { returnObjects: true }).length > 0 && (
                  <div 
                    className={`w-3 h-3 rounded-full cursor-pointer ${currentSlide === 0 ? 'bg-[#ff6d00]' : 'bg-gray-300'}`}
                    onClick={() => setCurrentSlide(0)}
                  ></div>
                )}
                {Array.isArray(t(`solutions.items.${solutionKey}.features`, { returnObjects: true })) && 
                 t(`solutions.items.${solutionKey}.features`, { returnObjects: true }).length > 0 && (
                  <div 
                    className={`w-3 h-3 rounded-full cursor-pointer ${currentSlide === 1 ? 'bg-[#ff6d00]' : 'bg-gray-300'}`}
                    onClick={() => setCurrentSlide(1)}
                  ></div>
                )}
                {Array.isArray(t(`solutions.items.${solutionKey}.benefits`, { returnObjects: true })) && 
                 t(`solutions.items.${solutionKey}.benefits`, { returnObjects: true }).length > 0 && (
                  <div 
                    className={`w-3 h-3 rounded-full cursor-pointer ${currentSlide === 2 ? 'bg-[#ff6d00]' : 'bg-gray-300'}`}
                    onClick={() => setCurrentSlide(2)}
                  ></div>
                )}
              </div>
            </div> */}
          </motion.div>
        )}

        {/* Main Content with Image */}
        <motion.div ref={imageRef} className="mb-8 bg-green-50 p-6 rounded-lg" variants={fadeInUp} initial="initial" animate="animate">
          <Title level={3} className="text-[#ff6d00] mb-6">
            {t('solutions.mainContent')}
          </Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} md={16}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={showFullDescription ? 'full' : 'truncated'}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mb-6 text-center"
                >
                  <Paragraph className="text-gray-600 text-sm">
                    {showFullDescription
                      ? t(`solutions.items.${solutionKey}.description`)
                      : t(`solutions.items.${solutionKey}.description`).slice(0, 120) + '...' // Giữ 120 ký tự
                    }
                  </Paragraph>
                </motion.div>
              </AnimatePresence>
              {/* <Button type="primary" onClick={() => navigate(`/solutions/${solutionKey}/full`)}>
                {showFullDescription ? t('common.readLess') : t('common.readMore')}
              </Button> */}
              <motion.div variants={fadeInUp}>
                {t(`solutions.items.${solutionKey}.description`).length > 120 && (
                  <div className="flex justify-center mb-4">
                    <motion.button
                      whileHover={{ scale: 1.05, boxShadow: "0 4px 15px rgba(255, 109, 0, 0.2)" }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setShowFullDescription(!showFullDescription)}
                      className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-[#ff6d00] text-white hover:bg-[#ff8f40] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ff6d00] transition-all duration-300 ease-out"
                    >
                      <span className="font-medium text-sm">
                        {showFullDescription ? t('common.showLess') : t('common.readMore')}
                      </span>
                      <AnimatePresence mode="wait">
                        <motion.span
                          key={showFullDescription ? 'up' : 'down'}
                          initial={{ opacity: 0, y: showFullDescription ? 10 : -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: showFullDescription ? -10 : 10 }}
                          transition={{ duration: 0.2 }}
                        >
                          {showFullDescription ? (
                            <ArrowUpOutlined className="text-xs" />
                          ) : (
                            <ArrowDownOutlined className="text-xs" />
                          )}
                        </motion.span>
                      </AnimatePresence>
                    </motion.button>
                  </div>
                )}
              </motion.div>
            </Col>
            <Col xs={24} md={8}>
              {solutionData.image && (
                <motion.div
                  className="overflow-hidden rounded-lg shadow-md"
                  variants={imageAnimation}
                  initial="initial"
                  animate="animate"
                  whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                >
                  <Lens zoomFactor={1.2} lensSize={200}>
                    <img
                      src={solutionData.image}
                      alt={t(`solutions.items.${solutionKey}.title`)}
                      className="w-full h-auto object-cover"
                      style={{ maxHeight: '250px' }}
                    />
                  </Lens>
                </motion.div>
              )}
            </Col>
          </Row>
        </motion.div>

        {/* Related Products */}
        <motion.div className="mb-8 bg-yellow-50 p-6 rounded-lg" variants={fadeInUp} initial="initial" animate="animate">
          {/* <Title level={3} className="text-[#ff6d00] mb-6 text-center">
            {t('common.similarSolutions')}
          </Title> */}
          {/* <div className="relative">
            <Row gutter={[16, 16]} justify="center">
              {similarSolutions.slice(0, 3).map((solution, index) => (
                <Col xs={24} sm={8} key={index}>
                  <motion.div
                    whileHover={{ scale: 1.05, boxShadow: "0 8px 20px rgba(255, 109, 0, 0.2)" }}
                    className="p-4 bg-white rounded-lg shadow-md hover:bg-gray-50 transition-all duration-300"
                  >
                    {solution.image && (
                      <img
                        src={solution.image}
                        alt={t(`solutions.items.${solution.key}.title`)}
                        className="w-full h-40 object-cover rounded-md mb-2"
                      />
                    )}
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">
                      {t(`solutions.items.${solution.key}.title`)}
                    </h4>
                    <Button
                      type="primary"
                      size="small"
                      onClick={() => navigate(`/solutions/${solution.id}`)}
                      className="bg-[#ff6d00] hover:bg-[#ff8f40] text-white"
                    >
                      {t('common.viewDetails')}
                    </Button>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </div> */}
          {similarSolutions.length > 0 && (
            <motion.div
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              className="mt-8"
            >
              <Card className="mb-8 rounded-lg shadow-md">
                <Title level={3} className="text-[#ff6d00] mb-6 text-center">
                  {t('common.similarSolutions')}
                </Title>
                <div className="relative">
                  <Button
                    icon={<LeftOutlined />}
                    onClick={handlePrev}
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#ff6d00] hover:bg-[#ff8f40] text-white rounded-full p-2"
                    style={{ zIndex: 10 }}
                  />
                  <Row gutter={[16, 16]} justify="center" className="flex flex-row">
                    <AnimatePresence mode="wait">
                      {paginatedSolutions.map((solution, index) => (
                        <Col xs={12} sm={12} md={8} key={solution.key} className="flex justify-center">
                          <motion.div
                            variants={similarSolutionAnimation}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            whileHover={{
                              scale: 1.05,
                              boxShadow: "0 8px 20px rgba(255, 109, 0, 0.2)"
                            }}
                            className="p-4 bg-white rounded-lg shadow-md hover:bg-gray-50 transition-all duration-300 w-full max-w-xs"
                          >
                            <div className="relative overflow-hidden rounded-md mb-2">
                              {solution.image && (
                                <motion.img
                                  src={solution.image}
                                  alt={t(`solutions.items.${solution.key}.title`)}
                                  className="w-full h-40 object-cover"
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  exit={{ opacity: 0 }}
                                  transition={{ delay: 0.2 * index }}
                                  whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
                                />
                              )}
                            </div>
                            <h4 className="text-lg font-semibold text-gray-800 mb-2 truncate">
                              {t(`solutions.items.${solution.key}.title`)}
                            </h4>
                            <Button
                              type="primary"
                              size="small"
                              onClick={() => navigate(`/solutions/${solution.id}`)}
                              className="mt-2 bg-[#ff6d00] hover:bg-[#ff8f40] text-white"
                            >
                              {t('common.viewDetails')}
                            </Button>
                          </motion.div>
                        </Col>
                      ))}
                    </AnimatePresence>
                  </Row>
                  <Button
                    icon={<RightOutlined />}
                    onClick={handleNext}
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#ff6d00] hover:bg-[#ff8f40] hover:text-black text-white rounded-full p-2"
                    style={{ zIndex: 10 }}
                  />
                </div>
              </Card>
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SolutionDetail;