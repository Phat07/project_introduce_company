import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import './Footer.css';

const Footer = () => {
  const { t } = useTranslation();
  
  const locations = [
    {
      title: t('footer.locations.headquarters'),
      address: t('footer.locations.headquarters_address')
    },
    {
      title: t('footer.locations.binh_tan'),
      address: t('footer.locations.binh_tan_address')
    },
    {
      title: t('footer.locations.long_an'),
      address: t('footer.locations.long_an_address')
    },
    {
      title: t('footer.locations.data_center'),
      address: t('footer.locations.data_center_address')
    }
  ];

  const companyInfo = {
    name: t('footer.company.name'),
    internationalName: t('footer.company.international_name'),
    address: t('footer.company.address'),
    contact: {
      hotline: '1900.9269',
      tel: '0282.234.6666',
      website: 'https://thanhcongsolutions.com',
      email: 'phongkd@thanhcongsolutions.com'
    },
    bankInfo: {
      accountName: t('footer.bank.account_name'),
      taxCode: '0316952534',
      accountNumber: '969268',
      bank: t('footer.bank.bank_name')
    }
  };

  const footerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const childVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <footer className="footer">
      <motion.div 
        className="footer-content"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={footerVariants}
      >
        <motion.div 
          className="footer-section company-info"
          variants={childVariants}
        >
          <h3>{t('footer.sections.company_info')}</h3>
          <h4>{companyInfo.name}</h4>
          <p className="international-name">{companyInfo.internationalName}</p>
          <div className="contact-info">
            <p><strong>{t('footer.contact.hotline')}:</strong> {companyInfo.contact.hotline}</p>
            <p><strong>{t('footer.contact.tel')}:</strong> {companyInfo.contact.tel}</p>
            <p><strong>{t('footer.contact.email')}:</strong> {companyInfo.contact.email}</p>
            <p><strong>{t('footer.contact.website')}:</strong> {companyInfo.contact.website}</p>
          </div>
        </motion.div>

        <motion.div 
          className="footer-section locations"
          variants={childVariants}
        >
          <h3>{t('footer.sections.office_system')}</h3>
          <div className="locations-grid">
            {locations.map((location, index) => (
              <div key={index} className="location-item">
                <h4>{location.title}</h4>
                <p>{location.address}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="footer-section bank-info"
          variants={childVariants}
        >
          <h3>{t('footer.sections.bank_info')}</h3>
          <div className="bank-details">
            <p><strong>{t('footer.bank.account_name_label')}:</strong> {companyInfo.bankInfo.accountName}</p>
            <p><strong>{t('footer.bank.tax_code')}:</strong> {companyInfo.bankInfo.taxCode}</p>
            <p><strong>{t('footer.bank.account_number')}:</strong> {companyInfo.bankInfo.accountNumber}</p>
            <p><strong>{t('footer.bank.bank_label')}:</strong> {companyInfo.bankInfo.bank}</p>
          </div>
        </motion.div>
      </motion.div>
      
      <motion.div 
        className="footer-bottom"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
      >
        <p>{t('footer.copyright', { year: new Date().getFullYear() })}</p>
      </motion.div>
    </footer>
  );
};

export default Footer;
