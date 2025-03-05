import React from 'react';
import { Card } from 'antd';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const CompactNewsCard = ({ image, title, date, link }) => {
  const { t } = useTranslation();

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="mt-12 md:ml-12 md:mr-12"
    >
      <Link to={link} className="block">
        <Card className="w-full h-full bg-[#F2F2F2]" bodyStyle={{ padding: 0 }}>
          <div className="flex flex-col items-center">
            <div className="relative h-[140px] w-[200px] overflow-hidden">
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="p-4 w-full">
              <h3 className="text-base font-bold mb-2 line-clamp-2 min-h-[48px] hover:text-blue-600">
                {title}
              </h3>
              <div className="text-gray-500 text-sm">
                {/* {t('news.publishedOn')} {date} */}
                {date}
              </div>
            </div>
          </div>
        </Card>
      </Link>
    </motion.div>
  );
};

export default CompactNewsCard;
