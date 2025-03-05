import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import './Footer.css';
import { GoogleMap, LoadScript, MarkerF, InfoWindowF } from '@react-google-maps/api';
import logo from '../../assets/logo.png';

const Footer = () => {
  const { t } = useTranslation();
  const [isInfoWindowOpen, setIsInfoWindowOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

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

  const mapContainerStyle = {
    width: isMobile ? '90%' : '70%',
    height: isMobile ? '250px' : '400px',
    marginBottom: '2rem'
  };

  const center = {
    lat: 10.801042,
    lng: 106.591651
  };

  const options = {
    mapTypeControl: false,
    streetViewControl: true,
    fullscreenControl: true,
    zoomControl: true,
    styles: [
      {
        featureType: "poi",
        elementType: "labels",
        stylers: [{ visibility: "on" }],
      },
    ],
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
        className="map-container center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <LoadScript googleMapsApiKey={import.meta.env.VITE_REACT_APP_GOOGLE_MAPS_API_KEY}>
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={center}
            zoom={15}
            options={options}
          >
            <MarkerF
              position={center}
              onClick={() => setIsInfoWindowOpen(true)}
            />
            {isInfoWindowOpen && (
              <InfoWindowF
                position={center}
                onCloseClick={() => setIsInfoWindowOpen(false)}
              >
                <div className="info-window">
                  <div className="info-window-header">
                    <img src={logo} alt="Company Logo" className="info-window-logo" />
                    {/* <h3>Thanh Cong Solutions Company</h3> */}
                  </div>
                  <p>73 đường 2A, BÌNH HUNG HÒA B, Quận Bình Tân, TP.HCM</p>
                  <div className="info-window-actions">
                    <a href="https://www.google.com/maps/dir//10.801042,106.591651" target="_blank" rel="noopener noreferrer">
                      Chỉ đường
                    </a>
                  </div>
                </div>
              </InfoWindowF>
            )}
          </GoogleMap>
        </LoadScript>
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
