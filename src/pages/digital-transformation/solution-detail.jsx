import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Card, Button, List, Typography, Breadcrumb, ConfigProvider } from 'antd';
import { ArrowLeftOutlined, CheckCircleOutlined } from '@ant-design/icons';
import LoadingScreen from '../../components/ui/loading-screen';

const { Title, Paragraph } = Typography;

// Giả lập dữ liệu chi tiết (trong thực tế sẽ lấy từ API)
const solutionDetails = {
  1: {
    title: 'Giải pháp Tổng đài IP',
    category: 'telecom',
    image: '/images/solutions/ip-pbx.jpg',
    description: 'Hệ thống tổng đài IP hiện đại, tích hợp đầy đủ tính năng cho doanh nghiệp',
    features: [
      'Tích hợp nhiều nền tảng giao tiếp',
      'Quản lý cuộc gọi thông minh',
      'Báo cáo chi tiết'
    ],
    benefits: [
      'Tiết kiệm chi phí vận hành',
      'Tăng hiệu quả giao tiếp nội bộ',
      'Cải thiện trải nghiệm khách hàng',
      'Dễ dàng mở rộng quy mô'
    ],
    specifications: [
      'Hỗ trợ SIP/H.323/MGCP',
      'Tích hợp WebRTC',
      'Unified Communications',
      'Call Center Features',
      'API Integration'
    ]
  },
  // Thêm chi tiết cho các giải pháp khác...
};

const SolutionDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [loading, setLoading] = useState(true);

  // Giả lập loading data
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Loading 2 giây

    return () => clearTimeout(timer);
  }, []);

  const solution = solutionDetails[id];

  if (loading) {
    return <LoadingScreen />;
  }

  if (!solution) {
    return (
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#ff6d00',
          },
        }}
      >
        <div className="text-center py-16" style={{ marginTop: "3rem" }}>
          <h1 className="text-2xl font-bold mb-4">{t('common.notFound')}</h1>
          <Button onClick={() => navigate('/solutions')} type="primary">
            {t('common.backToSolutions')}
          </Button>
        </div>
      </ConfigProvider>
    );
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
          {/* Breadcrumb */}
          <Breadcrumb className="mb-6">
            <Breadcrumb.Item>
              <a onClick={() => navigate('/solutions')} className="text-[#ff6d00] hover:text-[#ff8f40]">
                {t('solutions.title')}
              </a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>{solution.title}</Breadcrumb.Item>
          </Breadcrumb>

          {/* Back Button */}
          <Button
            icon={<ArrowLeftOutlined />}
            onClick={() => navigate('/solutions')}
            className="mb-6"
          >
            {t('common.back')}
          </Button>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Image */}
            <div className="lg:col-span-1">
              <Card cover={<img alt={solution.title} src={solution.image} />} />
            </div>

            {/* Right Column - Details */}
            <div className="lg:col-span-2">
              <Title level={2}>{solution.title}</Title>
              <Paragraph className="text-lg mb-6">
                {solution.description}
              </Paragraph>

              {/* Features */}
              <Title level={3} className="mb-4">
                {t('solutions.detail.features')}
              </Title>
              <List
                dataSource={solution.features}
                renderItem={item => (
                  <List.Item>
                    <List.Item.Meta
                      avatar={<CheckCircleOutlined className="text-[#ff6d00]" />}
                      title={item}
                    />
                  </List.Item>
                )}
                className="mb-6"
              />

              {/* Benefits */}
              <Title level={3} className="mb-4">
                {t('solutions.detail.benefits')}
              </Title>
              <List
                dataSource={solution.benefits}
                renderItem={item => (
                  <List.Item>
                    <List.Item.Meta
                      avatar={<CheckCircleOutlined className="text-[#ff6d00]" />}
                      title={item}
                    />
                  </List.Item>
                )}
                className="mb-6"
              />

              {/* Technical Specifications */}
              <Title level={3} className="mb-4">
                {t('solutions.detail.specifications')}
              </Title>
              <List
                dataSource={solution.specifications}
                renderItem={item => (
                  <List.Item>
                    <List.Item.Meta
                      avatar={<CheckCircleOutlined className="text-[#ff6d00]" />}
                      title={item}
                    />
                  </List.Item>
                )}
              />

              {/* Contact Button */}
              <div className="mt-8">
                <Button type="primary" size="large">
                  {t('common.contactUs')}
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </ConfigProvider>
  );
};

export default SolutionDetail;
