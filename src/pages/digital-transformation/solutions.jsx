import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Radio, Pagination, Card, ConfigProvider, Tabs } from 'antd';
import { Link } from 'react-router-dom';
import { 
  GlobalOutlined, 
  DesktopOutlined, 
  CloudServerOutlined,
  AppstoreOutlined
} from '@ant-design/icons';
import LoadingScreen from '../../components/ui/loading-screen';

const ITEMS_PER_PAGE = 6;

const solutions = [
  // Viễn thông
  {
    id: 1,
    title: 'Giải pháp Tổng đài IP',
    category: 'telecom',
    image: '/images/solutions/ip-pbx.jpg',
    description: 'Hệ thống tổng đài IP hiện đại, tích hợp đầy đủ tính năng cho doanh nghiệp',
    features: [
      'Tích hợp nhiều nền tảng giao tiếp',
      'Quản lý cuộc gọi thông minh',
      'Báo cáo chi tiết'
    ]
  },
  {
    id: 2,
    title: 'Hệ thống Camera AI',
    category: 'telecom',
    image: '/images/solutions/ai-camera.jpg',
    description: 'Camera thông minh tích hợp AI cho bảo mật và phân tích hành vi',
    features: [
      'Nhận diện khuôn mặt',
      'Phân tích hành vi',
      'Cảnh báo thông minh'
    ]
  },
  // CNTT
  {
    id: 3,
    title: 'Phần mềm ERP',
    category: 'it',
    image: '/images/solutions/erp.jpg',
    description: 'Giải pháp quản lý doanh nghiệp toàn diện',
    features: [
      'Quản lý tài chính',
      'Quản lý nhân sự',
      'Quản lý kho vận'
    ]
  },
  {
    id: 4,
    title: 'Nền tảng IoT',
    category: 'it',
    image: '/images/solutions/iot.jpg',
    description: 'Nền tảng IoT cho smart city và nhà máy thông minh',
    features: [
      'Thu thập dữ liệu realtime',
      'Phân tích dữ liệu',
      'Dashboard trực quan'
    ]
  },
  // Hạ tầng số
  {
    id: 5,
    title: 'Trung tâm dữ liệu',
    category: 'infrastructure',
    image: '/images/solutions/datacenter.jpg',
    description: 'Giải pháp trung tâm dữ liệu hiện đại',
    features: [
      'Bảo mật cao cấp',
      'Hiệu suất tối ưu',
      'Khả năng mở rộng'
    ]
  },
  {
    id: 6,
    title: 'Cloud Platform',
    category: 'infrastructure',
    image: '/images/solutions/cloud.jpg',
    description: 'Nền tảng điện toán đám mây doanh nghiệp',
    features: [
      'Đa nền tảng',
      'Tự động hóa',
      'Bảo mật đa lớp'
    ]
  }
];

const categories = [
  { 
    value: 'all', 
    label: 'Tất cả giải pháp',
    icon: <AppstoreOutlined />,
    description: 'Xem tất cả các giải pháp của chúng tôi'
  },
  { 
    value: 'telecom', 
    label: 'Viễn thông', 
    icon: <GlobalOutlined />,
    description: 'Các giải pháp về hệ thống viễn thông và truyền thông'
  },
  { 
    value: 'it', 
    label: 'Công nghệ thông tin',
    icon: <DesktopOutlined />,
    description: 'Giải pháp phần mềm và công nghệ thông tin'
  },
  { 
    value: 'infrastructure', 
    label: 'Hạ tầng số',
    icon: <CloudServerOutlined />,
    description: 'Giải pháp về hạ tầng và nền tảng số'
  }
];

const SolutionCard = ({ solution }) => {
  const { t } = useTranslation();
  
  return (
    <Card
      hoverable
      cover={<img alt={solution.title} src={solution.image} />}
      className="h-full"
    >
      <Card.Meta
        title={solution.title}
        description={solution.description}
      />
      <div className="mt-4">
        <Link 
          to={`/solutions/${solution.id}`}
          className="text-[#ff6d00] hover:text-[#ff8f40]"
        >
          {t('common.viewDetails')}
        </Link>
      </div>
    </Card>
  );
};

const SolutionsPage = () => {
  const { t } = useTranslation();
  const [currentCategory, setCurrentCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

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
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
          {/* <h1 className="text-3xl font-bold mb-8 text-center">
            {t('solutions.title')}
          </h1> */}

          {/* Filter */}
          <div className="mb-12 mr-12 ml-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
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
                    <div className="flex items-center gap-4">
                      <div className={`
                        text-2xl p-3 rounded-full 
                        ${currentCategory === category.value 
                          ? 'bg-[#ff6d00] text-white' 
                          : 'bg-gray-100 text-gray-600'
                        }
                      `}>
                        {category.icon}
                      </div>
                      <div>
                        <h3 className={`text-lg font-medium mb-1 ${
                          currentCategory === category.value 
                            ? 'text-[#ff6d00]' 
                            : 'text-gray-800'
                        }`}>
                          {category.label}
                        </h3>
                        <p className="text-sm text-gray-500 line-clamp-2">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {currentSolutions.map(solution => (
              <motion.div
                key={solution.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <SolutionCard solution={solution} />
              </motion.div>
            ))}
          </div>

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
