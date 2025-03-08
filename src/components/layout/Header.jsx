import React, { useState, useEffect } from 'react';
import { Layout, Menu, Button, Drawer, Space, Input, Collapse } from 'antd';
import { MenuOutlined, GlobalOutlined, SearchOutlined, CloseOutlined, PhoneOutlined, RightOutlined } from '@ant-design/icons';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import viettelLogo from '../../assets/logo.png';
import LanguageSwitcher from '../ui/language-switcher';
import './Header.css';

const { Header: AntHeader } = Layout;
const { Panel } = Collapse;

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const [showSearch, setShowSearch] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [expandedMobileMenu, setExpandedMobileMenu] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();

  // Sample solution items for dropdown
  const solutionItems = [
    { id: t('solutions.items.cloud_pbx.id'), title: t('solutions.items.cloud_pbx.title'), image: t('solutions.items.cloud_pbx.image') },
    { id: t('solutions.items.leased_line.id'), title: t('solutions.items.leased_line.title'), image: t('solutions.items.leased_line.image') },
    { id: t('solutions.items.office_wan.id'), title: t('solutions.items.office_wan.title'), image: t('solutions.items.office_wan.image')  },
    { id: t('solutions.items.head_number_1900.id'), title: t('solutions.items.head_number_1900.title'), image: t('solutions.items.head_number_1900.image')  },
  ];

  // Sample product items for dropdown
  const productItems = [
    { id: 'dms_lite', title: t('solutions.items.dms_lite.title'), image: '/images/solutions/dms.png' },
    { id: 'ca', title: t('solutions.items.ca.title'), image: '/images/solutions/ca.jpg' },
    { id: 'reputa', title: t('solutions.items.reputa.title'), image: '/images/solutions/reputa.png' },
    { id: 'vwifi', title: t('solutions.items.vwifi.title'), image: '/images/solutions/vwifi.jpg' },
  ];

  const menuItems = [
    {
      key: 'intro',
      label: t('header.intro'),
      className: 'text-black'
    },
    {
      key: 'solutions',
      label: t('header.solutions'),
      className: 'text-black',
      onMouseEnter: () => setHoveredMenu('solutions'),
      onMouseLeave: () => setHoveredMenu(null),
    },
    {
      key: 'products',
      label: t('header.products'),
      onMouseEnter: () => setHoveredMenu('products'),
      onMouseLeave: () => setHoveredMenu(null),
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
    setExpandedMobileMenu(null);
  };

  const handleMenuClick = ({ key }) => {
    if (key === 'solutions' || key === 'products') {
      if (isMobile) {
        setExpandedMobileMenu(expandedMobileMenu === key ? null : key);
        return;
      }
    }
    
    navigate(`/${key}`);
    if (visible) {
      onClose();
    }
  };

  const handleItemClick = (type, id) => {
    navigate(`/${type}/${id}`);
    setHoveredMenu(null);
    if (visible) {
      onClose();
    }
  };

  const getCurrentMenuKey = () => {
    const pathSegments = location.pathname.split('/').filter(Boolean); // Lấy tất cả các đoạn path không rỗng
    return pathSegments[0] || 'home'; // Trả về đoạn đầu tiên (hoặc 'home' nếu không có)
  };

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  // Custom render for mobile menu items
  const renderMobileMenuItem = (item) => {
    const isExpanded = expandedMobileMenu === item.key;
    const isSelected = getCurrentMenuKey() === item.key;
    
    if (item.key === 'solutions' || item.key === 'products') {
      return (
        <div key={item.key} className="mobile-menu-item">
          <div 
            className={`mobile-menu-header ${isExpanded ? 'expanded' : ''} ${isSelected ? 'selected' : ''}`}
            onClick={() => setExpandedMobileMenu(isExpanded ? null : item.key)}
          >
            <span>{item.label}</span>
            <RightOutlined className={`mobile-menu-arrow ${isExpanded ? 'expanded' : ''}`} />
          </div>
          
          {isExpanded && (
            <div className="mobile-submenu">
              <div className="grid grid-cols-2 gap-3 p-2">
                {(item.key === 'solutions' ? solutionItems : productItems).map((subItem) => (
                  <div 
                    key={subItem.id} 
                    className="cursor-pointer"
                    onClick={() => handleItemClick(item.key, subItem.id)}
                  >
                    <div className="aspect-video overflow-hidden rounded-md mb-2">
                      <img 
                        src={subItem.image} 
                        alt={subItem.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-xs font-medium truncate">{subItem.title}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      );
    }
    
    return (
      <div 
        key={item.key} 
        className="mobile-menu-item"
        onClick={() => handleMenuClick({ key: item.key })}
      >
        <div className={`mobile-menu-header ${isSelected ? 'selected' : ''}`}>
          <span>{item.label}</span>
        </div>
      </div>
    );
  };

  return (
    <div className={`w-full fixed z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-white'}`}>
      <AntHeader className="header w-full h-14">
        <div className="h-full flex items-center justify-between px-4">
          {/* Logo */}
          <div className="logo" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
            <img
              src={viettelLogo}
              alt={t('header.logoAlt')}
              className="h-8 transition-transform duration-300 hover:scale-105"
            />
          </div>

          
          {!isMobile && (
            <>
              {/* Menu */}
              <div className="flex-1 flex justify-start ml-8 relative">
                <Menu
                  mode="horizontal"
                  selectedKeys={[getCurrentMenuKey()]}
                  items={menuItems}
                  onClick={handleMenuClick}
                  className="border-none w-full custom-menu"
                />

                {/* Solutions Dropdown */}
                {hoveredMenu === 'solutions' && (
                  <div 
                    className="dropdown-menu absolute bg-white shadow-lg rounded-md p-4 z-50"
                    style={{ top: '100%', left: '90px', width: '800px' }}
                    onMouseEnter={() => setHoveredMenu('solutions')}
                    onMouseLeave={() => setHoveredMenu(null)}
                  >
                    <div className="grid grid-cols-4 gap-4">
                      {solutionItems.map((solution) => (
                        <div 
                          key={solution.id} 
                          className="cursor-pointer hover:opacity-80 transition-opacity"
                          onClick={() => handleItemClick('solutions', solution.id)}
                        >
                          <div className="aspect-video overflow-hidden rounded-md mb-2">
                            <img 
                              src={solution.image} 
                              alt={solution.title} 
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <p className="text-sm font-medium text-center truncate">{solution.title}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Products Dropdown */}
                {hoveredMenu === 'products' && (
                  <div 
                    className="dropdown-menu absolute bg-white shadow-lg rounded-md p-4 z-50"
                    style={{ top: '100%', left: '200px', width: '800px' }}
                    onMouseEnter={() => setHoveredMenu('products')}
                    onMouseLeave={() => setHoveredMenu(null)}
                  >
                    <div className="grid grid-cols-4 gap-4">
                      {productItems.map((product) => (
                        <div 
                          key={product.id} 
                          className="cursor-pointer hover:opacity-80 transition-opacity"
                          onClick={() => handleItemClick('products', product.id)}
                        >
                          <div className="aspect-video overflow-hidden rounded-md mb-2">
                            <img 
                              src={product.image} 
                              alt={product.title} 
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <p className="text-sm font-medium text-center truncate">{product.title}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Right Section (Hotline + Buttons) */}
              <div className="flex items-center gap-6">
                {/* Hotline */}
                <div className="flex items-center gap-2 text-sm font-semibold text-gray-700 mr-6 whitespace-nowrap">
                  <PhoneOutlined className="text-[#FF6D00] text-lg" />
                  <span>Hotline: 1900 9269</span>
                </div>

                {/* Buttons */}
                <div className="flex items-center gap-4">
                  <Button
                    type="text"
                    icon={<SearchOutlined className="text-lg" />}
                    className={`hover:text-[#FF6D00] ${
                      isScrolled ? 'text-black' : 'text-black'
                    }`}
                    aria-label={t('header.search')}
                    onClick={toggleSearch}
                  />
                  <LanguageSwitcher />
                </div>
              </div>
            </>
          )}

          {/* Mobile Menu Button */}
          {isMobile && (
            <div className="flex items-center gap-4">
              <Button
                type="text"
                icon={<SearchOutlined style={{ fontSize: '18px' }} />}
                className={`hover:text-[#FF6D00] ${isScrolled ? 'text-black' : 'text-black'}`}
                aria-label={t('header.search')}
                onClick={toggleSearch}
              />
              <Button
                type="text"
                icon={<MenuOutlined style={{ fontSize: '20px' }} />}
                onClick={showDrawer}
                className={isScrolled ? 'text-black' : 'text-black'}
                aria-label={t('header.menu')}
              />
            </div>
          )}

          {/* Search Bar */}
          <div className={`search-overlay ${showSearch ? 'active' : ''} ${isMobile ? 'mobile' : ''}`}>
            <div className="search-container">
              <Input
                placeholder={t('header.search')}
                prefix={<SearchOutlined className="search-icon" />}
                suffix={
                  <CloseOutlined
                    className="search-close"
                    onClick={toggleSearch}
                  />
                }
                className="search-input"
                onPressEnter={(e) => {
                  console.log('Search:', e.target.value);
                  toggleSearch();
                }}
              />
            </div>
          </div>

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
            width={280}
          >
            <div className="mobile-menu">
              {menuItems.map(item => renderMobileMenuItem(item))}
            </div>
            
            <div className="mt-6 pt-6 border-t">
              <div className="flex items-center gap-2 mb-4">
                <PhoneOutlined className="text-[#FF6D00]" />
                <span className="text-sm">Hotline: 1900 9269</span>
              </div>
              <LanguageSwitcher />
            </div>
          </Drawer>
        </div>
      </AntHeader>
    </div>
  );
};

export default Header;
