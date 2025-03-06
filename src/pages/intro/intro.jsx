import React from 'react';
import { useTranslation } from 'react-i18next';
import NumberTicker from '../../components/ui/numberTicker';
import { Image } from 'antd';
import {
  WifiOutlined,
  CloudServerOutlined,
  GlobalOutlined,
  BankOutlined,
  ControlOutlined,
  ShopOutlined,
  PhoneOutlined,
  MailOutlined,
  EnvironmentOutlined,
  GlobalOutlined as WebOutlined,
  TeamOutlined,
  DollarOutlined,
} from '@ant-design/icons';
import SimpleGlobe from '../../components/ui/SimpleGlobe';


const IntroPage = () => {
  const { t } = useTranslation();

  const stats = [
    {
      number: 128000,
      unit: 'Trạm',
      description: t('introPage.stats.infrastructure'),
      icon: <WifiOutlined style={{ fontSize: '24px' }} />,
    },
    {
      number: 5,
      unit: 'Trung tâm',
      description: t('introPage.stats.dataCenters'),
      icon: <CloudServerOutlined style={{ fontSize: '24px' }} />,
    },
    {
      number: 500000,
      unit: 'Km',
      description: t('introPage.stats.fiberOptic'),
      icon: <GlobalOutlined style={{ fontSize: '24px' }} />,
    },
    {
      number: 110000,
      unit: 'Điểm',
      description: t('introPage.stats.payment'),
      icon: <BankOutlined style={{ fontSize: '24px' }} />,
    },
    {
      number: 24,
      suffix: '/07',
      unit: 'Hệ thống',
      description: t('introPage.stats.monitoring'),
      icon: <ControlOutlined style={{ fontSize: '24px' }} />,
    },
    {
      number: 8000,
      unit: 'Điểm',
      description: t('introPage.stats.logistics'),
      icon: <ShopOutlined style={{ fontSize: '24px' }} />,
    },
  ];

  return (
    <div className="min-h-screen pt-16 px-4 md:px-8 mt-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">{t('introPage.title')}</h1>

        <div className="text-gray-700 mb-12">
          <p className="mb-4">{t('introPage.mission')}</p>
          <p>{t('introPage.description')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg flex items-start space-x-4">
              <div className="text-[#FF6D00]">
                {stat.icon}
              </div>
              <div>
                <div className="flex items-baseline">
                  <span className="text-[#FF6D00] text-2xl font-bold">
                    <NumberTicker value={stat.number} delay={0.5 * index} />
                  </span>
                  {stat.suffix && <span className="text-[#FF6D00] text-2xl font-bold">{stat.suffix}</span>}
                  <span className="ml-1 text-[#FF6D00]">{stat.unit}</span>
                </div>
                <p className="text-gray-600 mt-1 text-sm">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full flex justify-center items-center mb-16">
          <div className="w-[850px] aspect-[2/1] bg-[#FFFFFF] p-8">
            <SimpleGlobe />
          </div>
        </div>

        <div className="bg-[#FF6D00] rounded-lg overflow-hidden">
          <div className="container mx-auto px-4 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/images/introduce/introduce.png"
                  alt="Đội ngũ nhân sự"
                  preview={false}
                  height={400}
                  width="100%"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="text-white">
                <div className="mb-12">
                  <h2 className="text-2xl font-bold mb-4">{t('introPage.team.title')}</h2>
                  <p className="mb-8">{t('introPage.team.description')}</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <div className="text-4xl font-bold mb-2">
                        <NumberTicker color="#FFFFFF" value={2000} delay={0.5} />
                      </div>
                      <p>{t('introPage.team.stats.engineers')}</p>
                    </div>
                    <div>
                      <div className="text-4xl font-bold mb-2">
                        <NumberTicker color="#FFFFFF" value={300} delay={1} />
                      </div>
                      <p>{t('introPage.team.stats.experts')}</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">{t('introPage.brandValue.title')}</h2>
                  <p className="mb-4">{t('introPage.brandValue.description')}</p>
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold">
                      <NumberTicker color="#FFFFFF" value={8.9} delay={1.5} decimalPlaces={1} />
                    </span>
                    <span className="text-2xl font-bold ml-2">tỷ USD</span>
                  </div>
                  <p className="text-sm mt-2">{t('introPage.brandValue.source')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-6">{t('introPage.contact.title')}</h2>
              <p className="text-gray-600 font-semibold mb-8">{t('introPage.contact.companyName')}</p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <EnvironmentOutlined className="text-[#FF6D00] text-xl" />
                  <span>{t('introPage.contact.address')}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MailOutlined className="text-[#FF6D00] text-xl" />
                  <span>{t('introPage.contact.email')}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <PhoneOutlined className="text-[#FF6D00] text-xl" />
                  <span>{t('introPage.contact.hotline')}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <WebOutlined className="text-[#FF6D00] text-xl" />
                  <span>{t('introPage.contact.website')}</span>
                </div>
              </div>
            </div>

            <div className="bg-[#FF6D00] rounded-lg p-8 text-white relative overflow-hidden">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
                  <PhoneOutlined className="text-[#FF6D00] text-2xl" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-center mb-2">{t('introPage.contact.customerCare.title')}</h3>
              <div className="text-center text-2xl font-bold mb-2">{t('introPage.contact.customerCare.hotline')}</div>
              <p className="text-center mb-32">{t('introPage.contact.customerCare.description')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroPage;