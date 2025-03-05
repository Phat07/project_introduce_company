import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const NewsCard = ({ image, title, date, link, variant = 'sidebar' }) => {
  if (variant === 'sidebar') {
    return (
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="w-full"
      >
        <Link to={link} className="flex items-start space-x-4 p-3 hover:bg-gray-50">
          <div className="relative h-[70px] w-[100px] flex-shrink-0">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover rounded"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-sm font-medium line-clamp-2 mb-1">
              {title}
            </h3>
            <div className="text-xs text-gray-500">
              {date}
            </div>
          </div>
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="w-full h-full"
    >
      <Link to={link} className="block h-full">
        <div className="flex flex-col h-full">
          <div className="relative h-[200px] overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover rounded-t-lg"
            />
          </div>
          <div className="p-4 flex flex-col flex-1">
            <h3 className="text-base font-bold line-clamp-2 mb-2 hover:text-blue-600">
              {title}
            </h3>
            <div className="text-sm text-gray-500 mt-auto">
              {date}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default NewsCard;
