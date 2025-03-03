import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Modal } from 'antd'; // Import Modal từ Ant Design
import './highlight.css';
import './HomePage.css'

const NewsHighlightSection = ({ isLoading }) => {
    const { t } = useTranslation();
    const [activeNewsIndex, setActiveNewsIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false); // State để điều khiển modal
    const [selectedNews, setSelectedNews] = useState(null); // State để lưu tin tức được chọn

    // Lấy newsItems từ file translation
    const newsItems = t('news.items', { returnObjects: true }) || [];

    // Hàm mở modal khi nhấn vào hình ảnh
    const showModal = (news) => {
        setSelectedNews(news);
        setIsModalOpen(true);
    };

    // Hàm đóng modal
    const handleCancel = () => {
        setIsModalOpen(false);
        setSelectedNews(null);
    };
    const Section = ({ children, className = '' }) => (
        <section className={`section-container ${className}`}>
          <div className="section-content">
            {children}
          </div>
        </section>
      );

    return (
        <section>
            <Section className="news-highlight-section">
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

            {/* Modal sử dụng Ant Design kết hợp Framer Motion */}
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
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 50 }}
                            transition={{ duration: 0.5 }}
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
        </section>
    );
};

// Export component để sử dụng trong HomePage
export default NewsHighlightSection;