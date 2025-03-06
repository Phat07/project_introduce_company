import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import FeaturedNewsCard from '../../components/news/FeaturedNewsCard';
import CompactNewsCard from '../../components/news/CompactNewsCard';
import NewsCard from '../../components/news/NewsCard';

const NewsPage = () => {
  const { t } = useTranslation();
  const newsData = t('news.items', { returnObjects: true });
  const [activeTab, setActiveTab] = useState('viettelDX');

  const tabs = [
    { 
      id: 'viettelDX', 
      label: t('news.tabs.viettelDX'), 
      color: 'text-red-600 border-red-600',
      category: 'viettelDX'
    },
    { 
      id: 'press', 
      label: t('news.tabs.press'), 
      color: 'text-red-600 border-red-600',
      category: 'press'
    },
    { 
      id: 'events', 
      label: t('news.tabs.events'), 
      color: 'text-red-600 border-red-600',
      category: 'events'
    },
  ];

  const renderNewsCard = (news) => {
    const newsProps = {
      image: news.image,
      title: news.title,
      description: news.description,
      date: news.date,
      link: news.link,
    };

    if (news.type === 'featured') {
      return <FeaturedNewsCard key={news.title} {...newsProps} link={news.id}/>;
    }
    if (news.type === 'compact') {
      return <CompactNewsCard key={news.title} {...newsProps} />;
    }
    return <NewsCard key={news.title} {...newsProps} />;
  };

  const featuredNews = newsData.filter(news => news.type === 'featured');
  const compactNews = newsData.filter(news => news.type === 'compact');
  const regularNews = newsData.filter(news => !news.type || news.type === 'regular');

  // Filter news based on active tab
  const filteredNews = regularNews.filter(news => {
    const currentTab = tabs.find(tab => tab.id === activeTab);
    return news.category === currentTab?.category;
  });

  return (
    <div className="container mx-auto px-4 pb-16">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold mb-2 text-center mt-24"
      >
        {t('news.title')}
      </motion.h1>
      
      <div className="flex flex-col lg:flex-row lg:space-x-8">
        {/* Main Content - Left Column */}
        <div className="lg:w-2/3">
          <div className="space-y-8">
            {/* Featured News */}
            {featuredNews.map(renderNewsCard)}
            
            {/* Compact News Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {compactNews.map(renderNewsCard)}
            </div>

            {/* News Tabs */}
            <div className="border-b border-gray-200">
              <div className="flex space-x-8">
                {tabs.map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`pb-2 -mb-px text-sm font-medium transition-colors duration-200 ${
                      activeTab === tab.id
                        ? `${tab.color} border-b-2`
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Main News List with Animation */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {filteredNews.map(news => (
                  <motion.div
                    key={news.title}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="bg-white rounded-lg shadow"
                  >
                    {renderNewsCard(news)}
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Most Viewed News - Right Column */}
        <div className="lg:w-1/3 mt-8 lg:mt-0">
          <div className="bg-white rounded-lg">
            <h2 className="text-lg font-bold p-4 border-b border-gray-200">
              {t('news.mostViewed')}
            </h2>
            <div className="divide-y divide-gray-100">
              {regularNews.slice(0, 5).map(renderNewsCard)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;