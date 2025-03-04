import React from 'react';
import { useTranslation } from 'react-i18next';

const AboutPage = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen pt-16">
      <h1>{t('aboutPage.title')}</h1>
      {/* Add your about page content here */}
    </div>
  );
};

export default AboutPage;
