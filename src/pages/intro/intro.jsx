import React from 'react';
import { useTranslation } from 'react-i18next';

const IntroPage = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen pt-16">
      <h1>{t('introPage.title')}</h1>
      {/* Add your about page content here */}
    </div>
  );
};

export default IntroPage;