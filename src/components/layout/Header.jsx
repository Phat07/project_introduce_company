import React, { useState, useEffect } from 'react';
import { Layout, Menu, Button, Drawer, Space } from 'antd';
import { MenuOutlined, GlobalOutlined, SearchOutlined } from '@ant-design/icons';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import viettelLogo from '../../assets/logo.png';
import LanguageSwitcher from '../ui/language-switcher';
import './Header.css';

const { Header: AntHeader } = Layout;

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();

  const menuItems = [
    {
      key: 'intro',
      label: t('header.intro'),
      className: 'text-black',
      children: [
        { key: 'about', label: t('header.about') },
        { key: 'vision', label: t('header.vision') },
      ],
    },
    {
      key: 'digital-transformation',
      label: t('header.digitalTransformation'),
      className: 'text-black',
      children: [
        { key: 'consulting', label: t('header.consulting') },
        { key: 'solutions', label: t('header.solutions') },
      ],
    },
    {
      key: 'digital-space',
      label: t('header.digitalSpace'),
    },
    {
      key: 'news',
      label: t('header.news'),
    },
    {
      key: 'recruitment',
      label: t('header.recruitment'),
    },
    {
      key: 'support',
      label: t('header.support'),
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const handleMenuClick = ({ key }) => {
    navigate(`/${key}`);
    if (visible) {
      onClose();
    }
  };

  const getCurrentMenuKey = () => {
    const path = location.pathname.split('/')[1];
    return path || 'home';
  };

  return (
    <div className={`w-full flex justify-center fixed z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <AntHeader className="header w-full max-w-7xl h-14">
        <div className="h-full flex items-center justify-between px-4">
          {/* Logo */}
          <div className="logo" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
            <img
              src={viettelLogo}
              alt={t('header.logoAlt')}
              className="h-8 transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Desktop Menu */}
          {!isMobile && (
            <div className="flex-1 justify-start ml-8">
              <Menu
                mode="horizontal"
                selectedKeys={[getCurrentMenuKey()]}
                items={menuItems}
                onClick={handleMenuClick}
                className={`border-none menu-items`}
              />
            </div>
          )}

          {/* Right Section */}
          {!isMobile && (
            <div className="flex items-center space-x-4">
              {/* Search */}
              <Button
                type="text"
                icon={<SearchOutlined style={{ fontSize: '18px' }} />}
                className={`hover:text-red-500 ${isScrolled ? 'text-black' : 'text-black'}`}
                aria-label={t('header.search')}
              />
              <LanguageSwitcher />
            </div>
          )}

          {/* Mobile Menu Button */}
          {isMobile && (
            <Button
              type="text"
              icon={<MenuOutlined style={{ fontSize: '20px' }} />}
              onClick={showDrawer}
              className={isScrolled ? 'text-black' : 'text-black'}
              aria-label={t('header.menu')}
            />
          )}

          {/* Mobile Drawer */}
          <Drawer
            title={
              <div className="flex items-center">
                <img src={viettelLogo} alt={t('header.logoAlt')} className="h-6" />
              </div>
            }
            placement="right"
            onClose={onClose}
            open={visible}
            width={300}
          >
            <Menu
              mode="inline"
              selectedKeys={[getCurrentMenuKey()]}
              items={menuItems}
              onClick={handleMenuClick}
              className="border-none"
            />
            <div className="p-4 border-t flex items-center gap-4">
              <Button
                type="text"
                icon={<SearchOutlined style={{ fontSize: '18px' }} />}
                aria-label={t('header.search')}
              />
              <LanguageSwitcher onClose={onClose} />
            </div>
          </Drawer>
        </div>
      </AntHeader>
    </div>
  );
};

export default Header;
