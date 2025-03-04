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
  ArrowDownOutlined,
  FireOutlined,
  CalendarOutlined,
  TagOutlined,
  UserOutlined,
  MessageOutlined,
  CloudOutlined,
  DatabaseOutlined,
  LeftOutlined, // Thêm icon cho nút "<"
  RightOutlined as RightArrowOutlined // Thêm icon cho nút ">"
} from '@ant-design/icons';
import LoadingScreen from '../../components/ui/loading-screen';
import DynamicImage from '../../components/ui/dynamic-image';
import Lens from '../../components/ui/lens';

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
const fadeInRight = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 50 }
};

const imageAnimation = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.6, ease: "easeOut" }
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
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [currentPage, setCurrentPage] = useState(0); // Trang hiện tại (0, 1)

  const mainRef = useRef(null);
  const imageRef = useRef(null);
  const featuresRef = useRef(null);
  const benefitsRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const items = t('solutions.items', { returnObjects: true });
    const foundKey = Object.keys(items).find(key => items[key].id === parseInt(id));
    console.log('Found solution key:', foundKey);
    setSolutionKey(foundKey);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [id, t]);

  useEffect(() => {
    if (!loading && solutionKey) {
      gsap.from(mainRef.current, {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: "power3.out"
      });

      // const imageWrapper = imageRef.current;
      // gsap.to(imageWrapper, {
      //   scrollTrigger: {
      //     trigger: imageWrapper,
      //     start: "top center",
      //     end: "bottom top",
      //     scrub: 1
      //   },
      //   y: 50,
      //   ease: "none"
      // });

      // imageWrapper.addEventListener('mouseenter', () => {
      //   gsap.to(imageWrapper.querySelector('img'), {
      //     scale: 1.1,
      //     duration: 0.4,
      //     ease: "power2.out"
      //   });
      // });

      // imageWrapper.addEventListener('mouseleave', () => {
      //   gsap.to(imageWrapper.querySelector('img'), {
      //     scale: 1,
      //     duration: 0.4,
      //     ease: "power2.out"
      //   });
      // });

      const featureCards = featuresRef?.current?.querySelectorAll('.feature-card');
      gsap.from(featureCards, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        delay: 0.5
      });

      featureCards?.forEach(card => {
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

      const advantageCards = document?.querySelectorAll('.advantage-card');
      gsap.from(advantageCards, {
        opacity: 0,
        x: -100,
        rotateY: -45,
        duration: 1,
        stagger: 0.15,
        ease: "back.out(1.7)",
        delay: 0.3
      });

      advantageCards?.forEach(card => {
        card.addEventListener('mouseenter', () => {
          gsap.to(card, {
            scale: 1.05,
            x: 15,
            backgroundColor: '#fff8f3',
            boxShadow: '0 4px 15px rgba(255, 109, 0, 0.1)',
            duration: 0.4,
            ease: "power2.out"
          });
          gsap.to(card.querySelector('.anticon'), {
            scale: 1.3,
            rotate: 360,
            color: '#ff6d00',
            duration: 0.4
          });
        });

        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            scale: 1,
            x: 0,
            backgroundColor: 'transparent',
            boxShadow: 'none',
            duration: 0.4,
            ease: "power2.out"
          });
          gsap.to(card.querySelector('.anticon'), {
            scale: 1,
            rotate: 0,
            color: '#ff6d00',
            duration: 0.4
          });
        });
      });

      const benefitCards = benefitsRef?.current?.querySelectorAll('.benefit-card');
      gsap.from(benefitCards, {
        opacity: 0,
        x: -50,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        delay: 0.8
      });

      benefitCards?.forEach(card => {
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

      const hotlineBox = contactSection?.querySelector('.hotline-box');
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

      return () => {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        // if (imageWrapper) {
        //   imageWrapper.replaceWith(imageWrapper.cloneNode(true));
        // }
        featureCards?.forEach(card => {
          card.replaceWith(card.cloneNode(true));
        });
        benefitCards?.forEach(card => {
          card.replaceWith(card.cloneNode(true));
        });
        if (hotlineBox) {
          hotlineBox.replaceWith(hotlineBox.cloneNode(true));
        }
      };
    }
  }, [loading, solutionKey]);

  if (loading) {
    return <LoadingScreen />;
  }



  if (!solutionKey) {
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
          <Button onClick={() => navigate('/solutions')} type="primary">
            {t('common.backToSolutions')}
          </Button>
        </motion.div>
      </ConfigProvider>
    );
  }

  const solutionData = t(`solutions.items.${solutionKey}`, { returnObjects: true });
  // Dữ liệu bổ sung giả lập (có thể lấy từ translation hoặc API)
  const additionalInfo = {
    updatedDate: t('solution.updated', { date: '28/02/2025' }), // Ngày cập nhật (dịch từ translation)
    category: t(`solutions.categories.${solutionData.category}`), // Danh mục
    users: t('solution.users', { count: 1000000 }), // Số lượng người dùng (giả lập)
    contactEmail: 'support@thanhcongsolutions.com', // Email liên hệ
  };
  const similarSolutions = Object.entries(t('solutions.items', { returnObjects: true }))
    .filter(([key, data]) => key !== solutionKey && data.category === solutionData.category)
    .slice(0, 6) // Lấy 6 giải pháp tương tự
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
    <ConfigProvider theme={{ token: { colorPrimary: '#ff6d00' } }}>
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-12 md:ml-12 md:mr-12"
        >
          {/* <motion.div
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
              <Breadcrumb.Item>{t(`solutions.items.${solutionKey}.title`)}</Breadcrumb.Item>
            </Breadcrumb>

            <Button
              icon={<ArrowLeftOutlined />}
              onClick={() => navigate('/solutions')}
              className="mt-4"
            >
              {t('common.back')}
            </Button>
          </motion.div> */}
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

              <motion.div
                className="mt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <Button
                  icon={<ArrowLeftOutlined />}
                  onClick={() => navigate('/solutions')}
                  className="back-button bg-white border-[#ff6d00] text-[#ff6d00] hover:bg-[#ff6d00] hover:text-white transition-all duration-300"
                >
                  {t('common.back')}
                </Button>
              </motion.div>
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
                <span>{additionalInfo.updatedDate}</span>
              </div>
              <div className="info-item flex items-center gap-2 text-sm text-gray-600">
                <TagOutlined className="text-[#ff6d00]" />
                <span>{additionalInfo.category}</span>
              </div>
              <div className="info-item flex items-center gap-2 text-sm text-gray-600">
                <UserOutlined className="text-[#ff6d00]" />
                <span>{additionalInfo.users}</span>
              </div>
              <div className="info-item flex items-center gap-2 text-sm text-gray-600">
                <MessageOutlined className="text-[#ff6d00]" />
                <a href={`mailto:${additionalInfo.contactEmail}`} className="hover:text-[#ff6d00] transition-colors">
                  {additionalInfo.contactEmail}
                </a>
              </div>
            </motion.div>
          </div>

          <Row gutter={[32, 32]}>
            <Col xs={24} lg={16}>
              <motion.div
                ref={mainRef}
                variants={staggerChildren}
                initial="initial"
                animate="animate"
              >
                <motion.div variants={fadeInUp}>
                  {/* <Card
                    className="mb-8 overflow-visible"
                  >
                    <Title level={3} className="mb-3">{t(`solutions.items.${solutionKey}.title`)}</Title>
                    {solutionData.image && (
                      <motion.div
                        ref={imageRef}
                        className="mb-4 overflow-hidden rounded-lg shadow-md"
                        variants={imageAnimation}
                        initial="initial"
                        animate="animate"
                        whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                      >
                        <img
                          src={solutionData.image}
                          alt={t(`solutions.items.${solutionKey}.title`)}
                          className="w-full h-auto object-cover"
                          style={{ maxHeight: '300px' }} // Giảm chiều cao từ 400px xuống 300px
                        />
                      </motion.div>
                    )}
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
                            ? t(`solutions.items.${solutionKey}.description`)
                            : t(`solutions.items.${solutionKey}.description`).slice(0, 300) + '...'
                          }
                        </Paragraph>
                      </motion.div>
                    </AnimatePresence>
                    {t(`solutions.items.${solutionKey}.description`).length > 300 && (
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
                            {showFullDescription ? t('common.showLess') : t('common.readMore')}
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
                  </Card> */}
                  <Card className="mb-8 overflow-visible rounded-lg shadow-md">
                    <Title level={3} className="mb-4 text-center text-[#ff6d00]">{t(`solutions.items.${solutionKey}.title`)}</Title>

                    {/* Bố cục với hình ảnh ở giữa và trang trí hai bên */}
                    <div className="relative mb-4">
                      {/* Phần trang trí bên trái */}
                      <div className="absolute left-0 top-0 h-full w-16 bg-gray-100 rounded-l-lg flex items-center justify-center opacity-80">
                        <CloudOutlined className="text-[#ff6d00] text-2xl" />
                        <span className="text-xs text-gray-600 mt-1">Cloud</span>
                      </div>

                      {/* Hình ảnh với chiều rộng giảm */}
                      {solutionData.image && (
                        <motion.div
                          ref={imageRef}
                          className="mx-auto overflow-hidden rounded-lg shadow-md"
                          style={{ width: '80%' }} // Giảm chiều rộng xuống 80% của Card
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
                            style={{ maxHeight: '250px' }} // Giữ nguyên chiều cao 250px
                          />
                          </Lens>
                        </motion.div>
                      )}

                      {/* Phần trang trí bên phải */}
                      <div className="absolute right-0 top-0 h-full w-16 bg-gray-100 rounded-r-lg flex items-center justify-center opacity-80">
                        <DatabaseOutlined className="text-[#ff6d00] text-2xl" />
                        <span className="text-xs text-gray-600 mt-1">Big Data</span>
                      </div>
                    </div>

                    {/* Mô tả ngắn gọn (1-2 dòng) */}
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

                    {/* Nút "Xem thêm" nổi bật, nằm chính giữa */}
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
                  </Card>
                </motion.div>

                {Array.isArray(t(`solutions.items.${solutionKey}.features`, { returnObjects: true })) && t(`solutions.items.${solutionKey}.features`, { returnObjects: true }).length > 0 && (
                  <motion.div variants={fadeInUp}>
                    <Card className="mb-8">
                      <Title level={3} className="text-[#ff6d00] mb-6">{t('solutions.features')}</Title>
                      <Row gutter={[16, 16]} ref={featuresRef}>
                        {t(`solutions.items.${solutionKey}.features`, { returnObjects: true }).map((feature, index) => (
                          <Col xs={24} md={12} key={index}>
                            <div className="flex items-start feature-card">
                              <CheckCircleOutlined className="text-green-500 mr-3 mt-1" />
                              <div>
                                <pre style={{
                                  fontFamily: 'inherit',
                                  fontSize: 'inherit',
                                  fontWeight: 500,
                                  margin: 0,
                                  whiteSpace: 'pre-wrap'
                                }}>{feature}</pre>
                              </div>
                            </div>
                          </Col>
                        ))}
                      </Row>
                    </Card>
                  </motion.div>
                )}

                {Array.isArray(t(`solutions.items.${solutionKey}.advantage`, { returnObjects: true })) && t(`solutions.items.${solutionKey}.advantage`, { returnObjects: true }).length > 0 && (
                  <motion.div variants={fadeInUp}>
                    <Card className="mb-8">
                      <Title level={3} className="text-[#ff6d00] mb-6">{t('solutions.advantages')}</Title>
                      <Row gutter={[16, 16]}>
                        {t(`solutions.items.${solutionKey}.advantage`, { returnObjects: true }).map((advantage, index) => (
                          <Col xs={24} md={12} key={index}>
                            <div className="flex items-start advantage-card">
                              <RightOutlined className="text-[#ff6d00] mr-3 mt-1" />
                              <div>
                                <pre style={{
                                  fontFamily: 'inherit',
                                  fontSize: 'inherit',
                                  fontWeight: 500,
                                  margin: 0,
                                  whiteSpace: 'pre-wrap'
                                }}>{advantage}</pre>
                              </div>
                            </div>
                          </Col>
                        ))}
                      </Row>
                    </Card>
                  </motion.div>
                )}

                {Array.isArray(t(`solutions.items.${solutionKey}.benefits`, { returnObjects: true })) && t(`solutions.items.${solutionKey}.benefits`, { returnObjects: true }).length > 0 && (
                  <motion.div variants={fadeInUp}>
                    <Card className="mb-8">
                      <Title level={3} className="text-[#ff6d00] mb-6">{t('solutions.benefits')}</Title>
                      <Row gutter={[16, 16]} ref={benefitsRef}>
                        {t(`solutions.items.${solutionKey}.benefits`, { returnObjects: true }).map((benefit, index) => (
                          <Col xs={24} md={12} key={index}>
                            <div className="flex items-start benefit-card">
                              <FireOutlined className="text-[#ff6d00] mr-3 mt-1" />
                              <div>
                                <pre style={{
                                  fontFamily: 'inherit',
                                  fontSize: 'inherit',
                                  fontWeight: 500,
                                  margin: 0,
                                  whiteSpace: 'pre-wrap'
                                }}>{benefit}</pre>
                              </div>
                            </div>
                          </Col>
                        ))}
                      </Row>
                    </Card>
                  </motion.div>
                )}

                {/* {Array.isArray(t(`solutions.items.${solutionKey}.pricing`, { returnObjects: true })) && t(`solutions.items.${solutionKey}.pricing`, { returnObjects: true }).length > 0 && (
                  <motion.div
                    className="pricing-section"
                    style={{ marginTop: '4rem' }}
                    variants={fadeInUp}
                  >
                    <Title level={3} style={{ textAlign: 'center', marginBottom: '2rem' }}>{t('solutions.pricing')}</Title>
                    <Row gutter={[24, 24]} justify="center">
                      {t(`solutions.items.${solutionKey}.pricing`, { returnObjects: true }).map((plan, index) => (
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
                                    description={<pre style={{
                                      fontFamily: 'inherit',
                                      fontSize: 'inherit',
                                      margin: 0,
                                      whiteSpace: 'pre-wrap'
                                    }}>{item}</pre>}
                                  />
                                </List.Item>
                              )}
                            />
                          </Card>
                        </Col>
                      ))}
                    </Row>
                  </motion.div>
                )} */}
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
                          icon={<RightArrowOutlined />}
                          onClick={handleNext}
                          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#ff6d00] hover:bg-[#ff8f40] text-white rounded-full p-2"
                          style={{ zIndex: 10 }}
                        />
                      </div>
                    </Card>
                  </motion.div>
                )}
              </motion.div>
            </Col>

            <Col xs={24} lg={8}>
              <motion.div
                ref={contactRef}
                variants={fadeInUp}
                initial="initial"
                animate="animate"
                exit="exit"
                className="sticky top-8"
              >
                <Card className="sticky top-8">
                  <Title level={4} className="text-[#ff6d00] mb-6">{t('common.contact')}</Title>
                  <div className="space-y-4">
                    <motion.div
                      className="p-4 bg-gray-50 rounded-lg hotline-box cursor-pointer"
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <p className="font-medium mb-2">{t('common.hotline')}</p>
                      <p className="text-lg font-bold text-[#ff6d00]">1900 9269</p>
                    </motion.div>

                    <motion.div whileHover={{ scale: 1.02 }}>
                      <Button type="primary" icon={<PhoneOutlined />} size="large" block>
                        {t('common.callUs')}
                      </Button>
                    </motion.div>

                    <motion.div whileHover={{ scale: 1.02 }}>
                      <Button icon={<MailOutlined />} size="large" block>
                        {t('common.emailUs')}
                      </Button>
                    </motion.div>

                    <Divider />

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <h4 className="font-medium mb-2">{t('common.more_info')}</h4>
                      <ul className="list-disc list-inside space-y-2 text-gray-600">
                        <motion.li
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 }}
                        >
                          {t('common.free_consultation')}
                        </motion.li>
                        <motion.li
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4 }}
                        >
                          {t('common.dedicated_support')}
                        </motion.li>
                        <motion.li
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.5 }}
                        >
                          {t('common.quick_deployment')}
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