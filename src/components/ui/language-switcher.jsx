import React from 'react';
import { useTranslation } from 'react-i18next';
import { Select } from 'antd';
import { GlobalOutlined } from '@ant-design/icons';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const languages = [
    { value: 'vi', label: 'Tiếng Việt', flag: '🇻🇳' },
    { value: 'en', label: 'English', flag: '🇺🇸' },
    { value: 'cn', label: '中文', flag: '🇨🇳' },
  ];

  const handleLanguageChange = (value) => {
    i18n.changeLanguage(value);
  };

  return (
    <Select
      defaultValue={i18n.language}
      style={{ width: 120 }}
      onChange={handleLanguageChange}
      options={languages.map(({ value, label, flag }) => ({
        value,
        label: (
          <span>
            {flag} {label}
          </span>
        ),
      }))}
      suffixIcon={<GlobalOutlined />}
      className="language-selector"
      bordered={false}
      dropdownStyle={{ minWidth: '150px' }}
    />
  );
};

export default LanguageSwitcher;
