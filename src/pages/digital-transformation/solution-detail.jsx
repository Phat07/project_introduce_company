import React, { useState, useEffect, useRef, Suspense } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, Button, List, Typography, Breadcrumb, ConfigProvider, Row, Col, Divider } from 'antd';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import {
  ArrowLeftOutlined,
  CheckCircleOutlined,
  PhoneOutlined,
  MailOutlined,
  RightOutlined,
  ArrowUpOutlined,
  ArrowDownOutlined
} from '@ant-design/icons';
import LoadingScreen from '../../components/ui/loading-screen';
import DynamicImage from '../../components/ui/dynamic-image';
import { solutions } from './data.jsx';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const { Title, Paragraph } = Typography;

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const SolutionDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [loading, setLoading] = useState(true);
  const [solution, setSolution] = useState(null);
  const [showFullDescription, setShowFullDescription] = useState(false);

  // Refs for GSAP animations
  const mainRef = useRef(null);
  const imageRef = useRef(null);
  const featuresRef = useRef(null);
  const benefitsRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const foundSolution = solutions.find(s => s.id === parseInt(id));
    setSolution(foundSolution);
    setShowFullDescription(false);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [id]);

  useEffect(() => {
    if (!loading && solution) {
      // Main content fade in
      gsap.from(mainRef.current, {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: "power3.out"
      });

      // Image parallax and hover effect
      const imageWrapper = imageRef.current;
      gsap.to(imageWrapper, {
        scrollTrigger: {
          trigger: imageWrapper,
          start: "top center",
          end: "bottom top",
          scrub: 1
        },
        y: 50,
        ease: "none"
      });

      // Image hover animation
      imageWrapper.addEventListener('mouseenter', () => {
        gsap.to(imageWrapper.querySelector('img'), {
          scale: 1.1,
          duration: 0.4,
          ease: "power2.out"
        });
      });

      imageWrapper.addEventListener('mouseleave', () => {
        gsap.to(imageWrapper.querySelector('img'), {
          scale: 1,
          duration: 0.4,
          ease: "power2.out"
        });
      });

      // Features cards animation with hover effect - Auto animate without scroll
      const featureCards = featuresRef.current.querySelectorAll('.feature-card');
      gsap.from(featureCards, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        delay: 0.5 // Small delay after page load
      });

      featureCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
          gsap.to(card, {
            backgroundColor: '#fff8f3',
            scale: 1.02,
            duration: 0.3,
            ease: "power2.out"
          });
          gsap.to(card.querySelector('.anticon'), {
            scale: 1.2,
            color: '#ff6d00',
            duration: 0.3
          });
        });

        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            backgroundColor: 'transparent',
            scale: 1,
            duration: 0.3,
            ease: "power2.out"
          });
          gsap.to(card.querySelector('.anticon'), {
            scale: 1,
            color: '#52c41a',
            duration: 0.3
          });
        });
      });

      // Benefits cards animation with hover effect - Auto animate without scroll
      const benefitCards = benefitsRef.current.querySelectorAll('.benefit-card');
      gsap.from(benefitCards, {
        opacity: 0,
        x: -50,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        delay: 0.8 // Small delay after features
      });

      benefitCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
          gsap.to(card, {
            x: 10,
            backgroundColor: '#fff8f3',
            duration: 0.3,
            ease: "power2.out"
          });
          gsap.to(card.querySelector('.anticon'), {
            rotate: 360,
            color: '#ff8f40',
            duration: 0.4
          });
        });

        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            x: 0,
            backgroundColor: 'transparent',
            duration: 0.3,
            ease: "power2.out"
          });
          gsap.to(card.querySelector('.anticon'), {
            rotate: 0,
            color: '#ff6d00',
            duration: 0.4
          });
        });
      });

      // Contact section float and hover animations
      const contactSection = contactRef.current;
      gsap.to(contactSection, {
        scrollTrigger: {
          trigger: contactSection,
          start: "top center",
          end: "bottom center",
          scrub: 1
        },
        y: 20,
        ease: "none"
      });

      // Hotline hover effect
      const hotlineBox = contactSection.querySelector('.hotline-box');
      if (hotlineBox) {
        hotlineBox.addEventListener('mouseenter', () => {
          gsap.to(hotlineBox, {
            scale: 1.05,
            backgroundColor: '#ff6d00',
            color: 'white',
            duration: 0.3
          });
          gsap.to(hotlineBox.querySelector('p:last-child'), {
            color: 'white',
            duration: 0.3
          });
        });

        hotlineBox.addEventListener('mouseleave', () => {
          gsap.to(hotlineBox, {
            scale: 1,
            backgroundColor: '#f5f5f5',
            color: 'inherit',
            duration: 0.3
          });
          gsap.to(hotlineBox.querySelector('p:last-child'), {
            color: '#ff6d00',
            duration: 0.3
          });
        });
      }

      // Cleanup function
      return () => {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        if (imageWrapper) {
          imageWrapper.replaceWith(imageWrapper.cloneNode(true));
        }
        featureCards.forEach(card => {
          card.replaceWith(card.cloneNode(true));
        });
        benefitCards.forEach(card => {
          card.replaceWith(card.cloneNode(true));
        });
        if (hotlineBox) {
          hotlineBox.replaceWith(hotlineBox.cloneNode(true));
        }
      };
    }
  }, [loading, solution]);

  if (loading) {
    return <LoadingScreen />;
  }

  if (!solution) {
    return (
      <ConfigProvider theme={{ token: { colorPrimary: '#ff6d00' } }}>
        <motion.div
          className="text-center py-16"
          style={{ marginTop: "3rem" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <h1 className="text-2xl font-bold mb-4">{t('common.notFound')}</h1>
          <Button onClick={() => navigate('/digital-transformation/solutions')} type="primary">
            {t('common.backToSolutions')}
          </Button>
        </motion.div>
      </ConfigProvider>
    );
  }

  return (
    <ConfigProvider theme={{ token: { colorPrimary: '#ff6d00' } }}>
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          style={{ marginTop: '3rem' }}
        >
          {/* Navigation */}
          <motion.div
            className="mb-4"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <Breadcrumb>
              <Breadcrumb.Item>
                <a onClick={() => navigate('/solutions')}>
                  {t('solutions.title')}
                </a>
              </Breadcrumb.Item>
              <Breadcrumb.Item>{solution.title}</Breadcrumb.Item>
            </Breadcrumb>

            <Button
              icon={<ArrowLeftOutlined />}
              onClick={() => navigate('/solutions')}
              className="mt-4"
            >
              Quay lại
            </Button>
          </motion.div>

          {/* Main Content */}
          <Row gutter={[32, 32]}>
            {/* Left Column */}
            <Col xs={24} lg={16}>
              <motion.div
                ref={mainRef}
                variants={staggerChildren}
                initial="initial"
                animate="animate"
              >
                {/* Image and Title */}
                <motion.div variants={fadeInUp}>
                  <Card
                    cover={
                      <div className="h-[250px] sm:h-[400px] md:h-[600px] overflow-hidden bg-gradient-to-b from-gray-50 to-white relative">
                        <div ref={imageRef}
                          className="absolute left-1/2 -top-[35%] sm:top-[50%] -translate-x-1/2 translate-y-0 sm:-translate-y-1/2 w-[180%] sm:w-[120%] h-[120%] flex items-center justify-center scale-[0.8] sm:scale-100">
                          <div className="w-full h-full -translate-y-28 sm:-translate-y-8">
                            <Suspense fallback={
                              <div className="w-full h-full bg-gray-100 animate-pulse flex items-center justify-center">
                                <span className="text-gray-400">
                                  <div className="w-12 h-12 md:w-16 md:h-16 border-4 border-gray-300 border-t-gray-400 rounded-full animate-spin">
                                    <img
                                      src={solution.image}
                                      alt="preload"
                                      style={{ display: 'none' }}
                                      onLoad={() => console.log('Image preloaded')}
                                    />
                                  </div>
                                </span>
                              </div>
                            }>
                              <DynamicImage
                                key={solution.image}
                                imageUrl={solution.image}
                                className="w-full h-full"
                              />
                            </Suspense>
                          </div>
                        </div>
                      </div>
                    }
                    className="mb-8 overflow-visible"
                  >
                    <Title level={3} className="mb-3">{solution.title}</Title>
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={showFullDescription ? 'full' : 'truncated'}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Paragraph className="text-gray-600">
                          {showFullDescription
                            ? solution.description
                            : solution.description.slice(0, 300) + '...'
                          }
                        </Paragraph>
                      </motion.div>
                    </AnimatePresence>
                    {solution.description.length > 300 && (
                      <div className="flex items-center mt-4">
                        <motion.button
                          whileHover={{
                            scale: 1.02,
                            boxShadow: "0 4px 15px rgba(255, 109, 0, 0.1)"
                          }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => setShowFullDescription(!showFullDescription)}
                          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg border-2 border-[#ff6d00] text-[#ff6d00] hover:bg-gradient-to-r hover:from-[#fff8f3] hover:to-white hover:border-[#ff8f40] hover:text-[#ff8f40] active:bg-[#fff1e6] transition-all duration-300 ease-out group relative overflow-hidden"
                        >
                          <span className="relative z-10 font-medium text-sm">
                            {showFullDescription ? 'Thu gọn' : 'Xem thêm'}
                          </span>
                          <AnimatePresence mode="wait">
                            <motion.span
                              key={showFullDescription ? 'up' : 'down'}
                              initial={{ opacity: 0, y: showFullDescription ? 10 : -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: showFullDescription ? -10 : 10 }}
                              transition={{ duration: 0.2 }}
                              className="relative z-10"
                            >
                              {showFullDescription ? (
                                <ArrowUpOutlined className="text-xs" />
                              ) : (
                                <ArrowDownOutlined className="text-xs" />
                              )}
                            </motion.span>
                          </AnimatePresence>
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-[#fff8f3] to-white opacity-0"
                            initial={false}
                            animate={{ opacity: 0 }}
                            whileHover={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                          />
                        </motion.button>
                      </div>
                    )}
                  </Card>
                </motion.div>

                {/* Features Section */}
                {solution?.features?.length > 0 && (
                  <motion.div variants={fadeInUp}>
                    <Card className="mb-8">
                      <Title level={3} className="text-[#ff6d00] mb-6">Tính năng</Title>
                      <Row gutter={[16, 16]} ref={featuresRef}>
                        {solution?.features?.map((feature, index) => (
                          <Col xs={24} md={12} key={index}>
                            <div className="flex items-start feature-card">
                              <CheckCircleOutlined className="text-green-500 mr-3 mt-1" />
                              <div>
                                <p className="font-medium">{feature}</p>
                              </div>
                            </div>
                          </Col>
                        ))}
                      </Row>
                    </Card>
                  </motion.div>
                )}

                {/* Đặc điểm nổi bật Section */}
                {solution?.advantage?.length > 0 && (
                  <motion.div variants={fadeInUp}>
                    <Card className="mb-8">
                      <Title level={3} className="text-[#ff6d00] mb-6">Đặc điểm nổi bật</Title>
                      <Row gutter={[16, 16]} ref={benefitsRef}>
                        {solution?.advantage?.map((benefit, index) => (
                          <Col xs={24} md={12} key={index}>
                            <div className="flex items-start benefit-card">
                              <RightOutlined className="text-[#ff6d00] mr-3 mt-1" />
                              <div>
                                <p className="font-medium">{benefit}</p>
                              </div>
                            </div>
                          </Col>
                        ))}
                      </Row>
                    </Card>
                  </motion.div>
                )}

                {/* Lợi ích Section */}
                {solution?.benefits?.length > 0 && (
                  <motion.div variants={fadeInUp}>
                    <Card className="mb-8">
                      <Title level={3} className="text-[#ff6d00] mb-6">Lợi ích</Title>
                      <Row gutter={[16, 16]} ref={benefitsRef}>
                        {solution?.benefits?.map((benefit, index) => (
                          <Col xs={24} md={12} key={index}>
                            <div className="flex items-start benefit-card">
                              <RightOutlined className="text-[#ff6d00] mr-3 mt-1" />
                              <div>
                                <p className="font-medium">{benefit}</p>
                              </div>
                            </div>
                          </Col>
                        ))}
                      </Row>
                    </Card>
                  </motion.div>
                )}

                {/* Pricing Section */}
                {solution?.pricing?.length > 0 && (
                  <motion.div
                    className="pricing-section"
                    style={{ marginTop: '4rem' }}
                    variants={fadeInUp}
                  >
                    <Title level={3} style={{ textAlign: 'center', marginBottom: '2rem' }}>Bảng giá dịch vụ</Title>
                    <Row gutter={[24, 24]} justify="center">
                      {solution?.pricing?.map((plan, index) => (
                        <Col xs={24} md={12} key={index}>
                          <Card
                            title={<span style={{ color: '#55C51E' }}>❖ {plan.name}</span>}
                            className="pricing-card"
                            hoverable
                          >
                            <List
                              itemLayout="horizontal"
                              dataSource={[
                                plan.bandwidth,
                                plan.users,
                                plan.router,
                                plan.setupFee,
                                plan.price,
                                plan.paymentTerm
                              ]}
                              renderItem={(item) => (
                                <List.Item>
                                  <List.Item.Meta
                                    avatar={<CheckCircleOutlined style={{ color: '#55C51E' }} />}
                                    description={item}
                                  />
                                </List.Item>
                              )}
                            />
                          </Card>
                        </Col>
                      ))}
                    </Row>
                  </motion.div>
                )}
              </motion.div>
            </Col>

            {/* Right Column */}
            <Col xs={24} lg={8}>
              <motion.div
                ref={contactRef}
                variants={fadeInUp}
                initial="initial"
                animate="animate"
                exit="exit"
                className="sticky top-8"
              >
                {/* Contact Card */}
                <Card className="sticky top-8">
                  <Title level={4} className="text-[#ff6d00] mb-6">Liên hệ tư vấn</Title>
                  <div className="space-y-4">
                    <motion.div
                      className="p-4 bg-gray-50 rounded-lg hotline-box cursor-pointer"
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <p className="font-medium mb-2">Hotline tư vấn</p>
                      <p className="text-lg font-bold text-[#ff6d00]">1800 xxxx</p>
                    </motion.div>

                    <motion.div whileHover={{ scale: 1.02 }}>
                      <Button type="primary" icon={<PhoneOutlined />} size="large" block>
                        Yêu cầu gọi lại
                      </Button>
                    </motion.div>

                    <motion.div whileHover={{ scale: 1.02 }}>
                      <Button icon={<MailOutlined />} size="large" block>
                        Gửi email
                      </Button>
                    </motion.div>

                    <Divider />

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <h4 className="font-medium mb-2">Thông tin thêm</h4>
                      <ul className="list-disc list-inside space-y-2 text-gray-600">
                        <motion.li
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 }}
                        >
                          Tư vấn miễn phí 24/7
                        </motion.li>
                        <motion.li
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4 }}
                        >
                          Hỗ trợ kỹ thuật tận tình
                        </motion.li>
                        <motion.li
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.5 }}
                        >
                          Triển khai nhanh chóng
                        </motion.li>
                      </ul>
                    </motion.div>
                  </div>
                </Card>
              </motion.div>
            </Col>
          </Row>
        </motion.div>
      </div>
    </ConfigProvider>
  );
};

export default SolutionDetail;