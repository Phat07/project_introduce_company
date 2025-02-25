import React from 'react';
import { Typography, Row, Col, Card } from 'antd';
import { RocketOutlined, AimOutlined, ToolOutlined, SyncOutlined, TeamOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const ConsultingPage = () => {
  const services = [
    {
      icon: <TeamOutlined className="text-3xl text-red-500" />,
      title: 'Đào tạo Chuyển đổi số',
      description: 'Cung cấp các kiến thức tổng thể, có hệ thống, dựa trên thực trạng và mục tiêu doanh nghiệp.',
      features: [
        'Quản trị và nâng cao trải nghiệm khách hàng',
        'Xây dựng văn hóa số cho doanh nghiệp',
        'Quản trị dữ liệu',
        'Quản trị công nghệ'
      ]
    },
    {
      icon: <AimOutlined className="text-3xl text-red-500" />,
      title: 'Đánh giá Trưởng thành số',
      description: 'Cung cấp mô hình, thang đo và các tiêu chí đánh giá khách quan về sức khỏe và mức độ trưởng thành số.',
      features: [
        'Đánh giá theo lĩnh vực',
        'Đánh giá theo chức năng',
        'Tối ưu cho từng phòng ban',
        'Phân tích chi tiết từng ngành nghề'
      ]
    },
    {
      icon: <RocketOutlined className="text-3xl text-red-500" />,
      title: 'Tư vấn Chuyển đổi số',
      description: 'Tư vấn giải pháp tổng thể, toàn diện dựa trên phương pháp luận AGILE.',
      features: [
        'Xây dựng lộ trình chuyển đổi số',
        'Tối ưu theo ngành trọng tâm',
        'Phân tích chức năng doanh nghiệp',
        'Đề xuất giải pháp phù hợp'
      ]
    }
  ];

  const methodology = [
    {
      icon: <ToolOutlined className="text-2xl text-red-500" />,
      title: 'Awareness',
      description: 'Nhận thức và thống nhất hiểu biết chung về chuyển đổi số trong tổ chức'
    },
    {
      icon: <SyncOutlined className="text-2xl text-red-500" />,
      title: 'AGILE',
      description: 'Phương pháp triển khai linh hoạt, tối ưu theo từng tổ chức'
    }
  ];

  return (
    <div className="min-h-screen pt-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <Title level={1} className="text-center mb-8">
          Tư vấn Chuyển đổi số
        </Title>

        <Paragraph className="text-lg text-center mb-12">
          Cung cấp giải pháp chuyển đổi số toàn diện trên mọi hoạt động của tổ chức và
          doanh nghiệp, cá thể hóa cho từng ngành nghề, lĩnh vực với phương pháp luận
          cụ thể cùng đội ngũ chuyên gia giàu kinh nghiệm.
        </Paragraph>

        <Title level={2} className="mb-8">
          Dịch vụ của chúng tôi
        </Title>

        <Row gutter={[24, 24]} className="mb-16">
          {services.map((service, index) => (
            <Col xs={24} md={8} key={index}>
              <Card
                className="h-full hover:shadow-lg transition-shadow duration-300"
                cover={
                  <div className="p-6 text-center bg-gray-50">
                    {service.icon}
                  </div>
                }
              >
                <Title level={3} className="text-center mb-4">
                  {service.title}
                </Title>
                <Paragraph className="text-gray-600 mb-4">
                  {service.description}
                </Paragraph>
                <ul className="list-disc pl-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="mb-2 text-gray-600">
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            </Col>
          ))}
        </Row>

        <Title level={2} className="mb-8">
          Phương pháp luận
        </Title>

        <Row gutter={[24, 24]}>
          {methodology.map((method, index) => (
            <Col xs={24} md={12} key={index}>
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start">
                  <div className="mr-4">{method.icon}</div>
                  <div>
                    <Title level={4} className="mb-2">
                      {method.title}
                    </Title>
                    <Paragraph className="text-gray-600">
                      {method.description}
                    </Paragraph>
                  </div>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default ConsultingPage;
