import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { format } from 'date-fns';
import { vi } from 'date-fns/locale';
import { Breadcrumb, Card, Typography, Space, Button } from 'antd';
import { HomeOutlined, LoadingOutlined, DownOutlined } from '@ant-design/icons';

const { Title, Text, Paragraph } = Typography;

const ITEMS_PER_LOAD = 3;

const NewsDetails = () => {
  const { id } = useParams();
  const { t } = useTranslation();
  const newsData = t('news.items', { returnObjects: true });
  const currentNews = newsData.find(news => news.id === parseInt(id));
  
  // Filter out current news from most viewed list
  const otherNews = newsData.filter(news => news.id !== parseInt(id));
  const [visibleItems, setVisibleItems] = useState(ITEMS_PER_LOAD);
  const [loading, setLoading] = useState(false);

  const handleLoadMore = () => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setVisibleItems(prev => prev + ITEMS_PER_LOAD);
      setLoading(false);
    }, 500);
  };

  if (!currentNews) {
    return (
      <div className="text-center py-10">
        <Text>Tin tức không tồn tại</Text>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-8 py-8 mt-16 max-w-7xl">
      {/* Breadcrumb */}
      <Breadcrumb className="mb-8">
        <Breadcrumb.Item>
          <Link to="/" className="flex items-center gap-2">
            <HomeOutlined />
            <span>Trang chủ</span>
          </Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to="/news">Tin tức</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>{currentNews.title}</Breadcrumb.Item>
      </Breadcrumb>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main Content */}
        <div className="lg:w-2/3">
          <Card>
            <Title level={2}>{currentNews.title}</Title>
            <Text type="secondary" className="block mb-6">{currentNews.date}</Text>
            <div className="mb-6">
              <img 
                src={currentNews.image} 
                alt={currentNews.title}
                className="w-full h-[400px] object-cover rounded"
              />
            </div>
            <Paragraph className="text-lg">
              {currentNews.description}
            </Paragraph>
          </Card>
        </div>

        {/* Sidebar - Most Viewed News */}
        <div className="lg:w-1/3">
          <Card 
            title={t('news.mostViewed')}
            actions={[
              otherNews.length > visibleItems && (
                <Button 
                  type="link" 
                  onClick={handleLoadMore}
                  loading={loading}
                  block
                  className="hover:border hover:border-white transition-all duration-300"
                  style={{ 
                    color: '#FF6D00',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px'
                  }}
                  icon={<DownOutlined />}
                >
                  {t('news.loadMore')}
                </Button>
              )
            ]}
          >
            <Space direction="vertical" size="large" style={{ width: '100%' }}>
              {otherNews.slice(0, visibleItems).map((news) => (
                <Link 
                  key={news.id} 
                  to={`/news/${news.id}`}
                  className="block hover:bg-gray-50 transition-colors"
                >
                  <Card bordered={false} bodyStyle={{ padding: 0 }}>
                    <div className="flex gap-4">
                      <img 
                        src={news.image} 
                        alt={news.title}
                        className="w-24 h-24 object-cover rounded"
                      />
                      <div>
                        <Text strong className="hover:text-blue-600 transition-colors line-clamp-2">
                          {news.title}
                        </Text>
                        <Text type="secondary" className="text-sm mt-1">
                          {news.date}
                        </Text>
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </Space>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
