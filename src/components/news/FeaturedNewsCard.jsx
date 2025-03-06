import React from 'react';
import { Card } from 'antd';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { CalendarOutlined } from '@ant-design/icons';

const FeaturedNewsCard = ({ image, title, date, description, link }) => {
  const { t } = useTranslation();
  
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="mt-12 md:ml-12 md:mr-12"
    >
      <Link to={`/news/${link}`} className="block">
        <Card className="w-full">
          <div className="flex flex-col md:flex-row md:items-center md:space-x-6">
            <div className="flex-1 order-2 md:order-1">
              <h2 className="text-xl font-bold mb-3 line-clamp-2 hover:text-blue-600">
                {title}
              </h2>
              <div className="text-gray-500 mb-3 flex items-center text-sm">
                <CalendarOutlined className="mr-2" />
                {date}
              </div>
              <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                {description}
              </p>
              <motion.div
                whileHover={{ x: 5 }}
                className="text-blue-600 text-sm font-medium"
              >
                {t('news.readMore')} →
              </motion.div>
            </div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="order-1 md:order-2 w-full md:w-[280px] h-[200px] md:h-[180px] mb-4 md:mb-0"
            >
              <img
                alt={title}
                src={image}
                className="w-full h-full object-cover rounded-lg"
              />
            </motion.div>
          </div>
        </Card>
      </Link>
    </motion.div>
  );
};

export default FeaturedNewsCard;
