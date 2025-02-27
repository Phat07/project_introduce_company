import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Radio, Pagination, Card, ConfigProvider, Tabs } from 'antd';
import { Link } from 'react-router-dom';
import { 
  GlobalOutlined, 
  DesktopOutlined, 
  CloudServerOutlined,
  AppstoreOutlined,
  CheckCircleOutlined,
  RightOutlined,
  ArrowRightOutlined
} from '@ant-design/icons';
import LoadingScreen from '../../components/ui/loading-screen';
import { ModelLoader } from '../../components/ui/model-loader';
import { solutions, categories } from './data.jsx';

const ITEMS_PER_PAGE = 6;

const SolutionCard = ({ solution, onClick }) => (
  <Card
    hoverable
    cover={
      <div className="h-36 overflow-hidden">
        <img
          alt={solution.title}
          src={solution.image}
          className="w-full h-full object-cover"
        />
      </div>
    }
    className="h-full flex flex-col"
  >
    <Card.Meta
      title={solution.title}
      description={solution.description.slice(0, 100) + '...'}
    />
    {/* <div className="mt-3 space-y-1.5">
      <h4 className="font-semibold text-[#ff6d00] text-sm">Đặc điểm nổi bật:</h4>
      <ul className="space-y-0.5">
        {solution.features.slice(0, 3).map((feature, index) => (
          <li key={index} className="flex items-center text-xs text-gray-600">
            <CheckCircleOutlined className="text-green-500 mr-1.5 text-xs" />
            {feature}
          </li>
        ))}
      </ul>
    </div> */}
    <div className="mt-3">
      <Link 
        to={`/solutions/${solution.id}`}
        className="text-[#ff6d00] text-xs hover:text-orange-500"
      >
        Xem chi tiết <ArrowRightOutlined className="ml-1" />
      </Link>
    </div>
  </Card>
);

const SolutionsPage = () => {
  const { t } = useTranslation();
  const [currentCategory, setCurrentCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [pageLoading, setPageLoading] = useState(false);

  // Giả lập loading data
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Loading 2 giây

    return () => clearTimeout(timer);
  }, []);

  // Lọc solutions theo category
  const filteredSolutions = currentCategory === 'all'
    ? solutions
    : solutions.filter(solution => solution.category === currentCategory);

  // Tính toán phân trang
  const totalItems = filteredSolutions.length;
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentSolutions = filteredSolutions.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handleCategoryChange = (value) => {
    setCurrentCategory(value);
    setCurrentPage(1);
    setPageLoading(true);
    // setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Simulate page loading
    setTimeout(() => {
      setPageLoading(false);
    }, 800);
  };

  const handlePageChange = (page) => {
    setPageLoading(true);
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Simulate page loading
    setTimeout(() => {
      setPageLoading(false);
    }, 800);
  };

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#ff6d00',
        },
      }}
    >
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ marginTop: '4rem' }}
        >
          {/* Filter */}
          <div className="mb-8 mr-8 ml-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
              {categories.map(category => (
                <motion.div
                  key={category.value}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Card
                    hoverable
                    className={`h-full transition-all duration-300 ${
                      currentCategory === category.value 
                        ? 'border-[#ff6d00] border-2 shadow-lg bg-orange-50' 
                        : 'border hover:border-[#ff6d00]'
                    }`}
                    onClick={() => handleCategoryChange(category.value)}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`
                        text-xl p-2.5 rounded-full 
                        ${currentCategory === category.value 
                          ? 'bg-[#ff6d00] text-white' 
                          : 'bg-gray-100 text-gray-600'
                        }
                      `}>
                        {category.icon}
                      </div>
                      <div>
                        <h3 className={`text-base font-medium mb-1 ${
                          currentCategory === category.value 
                            ? 'text-[#ff6d00]' 
                            : 'text-gray-800'
                        }`}>
                          {category.label}
                        </h3>
                        <p className="text-xs text-gray-500 line-clamp-2">
                          {category.description} 
                        </p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Solutions Grid */}
          {pageLoading ? (
            <div className="flex justify-center items-center min-h-[200px]">
              <ModelLoader />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              {currentSolutions.map(solution => (
                <motion.div
                  key={solution.id}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex"
                >
                  <SolutionCard solution={solution} />
                </motion.div>
              ))}
            </div>
          )}

          {/* Pagination */}
          <div className="flex justify-center">
            <Pagination
              current={currentPage}
              total={totalItems}
              pageSize={ITEMS_PER_PAGE}
              onChange={handlePageChange}
              showSizeChanger={false}
            />
          </div>
        </motion.div>
      </div>
    </ConfigProvider>
  );
};

export default SolutionsPage;
