import React from 'react';
import { useTranslation } from 'react-i18next';

const VisionPage = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen pt-16">
      <h1>{t('visionPage.title')}</h1>
      {/* Add your vision page content here */}
    </div>
  );
};

export default VisionPage;
