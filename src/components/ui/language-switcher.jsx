import React from 'react';
import { useTranslation } from 'react-i18next';
import { Select } from 'antd';
import { GlobalOutlined } from '@ant-design/icons';

const LanguageSwitcher = ({ onClose }) => {
  const { i18n } = useTranslation();

  const handleChange = (value) => {
    i18n.changeLanguage(value);
    if (onClose) {
      onClose();
    }
  };

  const languages = [
    { value: 'vi', label: 'Tiếng Việt', flag: '🇻🇳' },
    { value: 'en', label: 'English', flag: '🇺🇸' },
    { value: 'cn', label: '中文', flag: '🇨🇳' },
    { value: 'ko', label: '한국어', flag: '🇰🇷' },
  ];

  return (
    <Select
      defaultValue={i18n.language}
      style={{ width: 100 }}
      onChange={handleChange}
      bordered={false}
      suffixIcon={<GlobalOutlined />}
      options={languages.map(({ value, label, flag }) => ({
        value,
        label: (
          <span>
            {flag} {label}
          </span>
        ),
      }))}
      className="language-selector"
      dropdownStyle={{ minWidth: '150px' }}
    />
  );
};

export default LanguageSwitcher;
