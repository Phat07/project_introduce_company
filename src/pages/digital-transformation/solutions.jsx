import React from 'react';
import { Typography, Row, Col, Card, Space } from 'antd';
import {
  GlobalOutlined,
  SafetyCertificateOutlined,
  CloudOutlined,
  AppstoreOutlined,
  CheckCircleOutlined
} from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const SolutionsPage = () => {
  const corePrinciples = [
    {
      icon: <GlobalOutlined className="text-3xl text-red-500" />,
      title: 'Toàn diện',
      description: 'Chúng tôi hướng đến việc tổ chức đánh giá và chuyển đổi số toàn diện, từ con người, quy trình, công nghệ, ở tất cả đơn vị, phòng ban.'
    },
    {
      icon: <SafetyCertificateOutlined className="text-3xl text-red-500" />,
      title: 'Linh hoạt',
      description: 'Các giải pháp công nghệ được đánh giá và tư vấn triển khai một cách linh hoạt, dựa trên nhu cầu và sự phù hợp với từng tổ chức/doanh nghiệp.'
    },
    {
      icon: <CloudOutlined className="text-3xl text-red-500" />,
      title: 'Tối ưu',
      description: 'Chúng tôi tư vấn những giải pháp, công nghệ giúp doanh nghiệp có thể tối ưu các hệ thống hiện có, với kì vọng tiết kiệm chi phí nhưng vẫn đem lại hiệu quả tối đa.'
    },
    {
      icon: <AppstoreOutlined className="text-3xl text-red-500" />,
      title: 'Minh bạch',
      description: 'Tất cả các nội dung đánh giá và tư vấn đều được triển khai cụ thể, với đầy đủ lộ trình, thời gian, các đề xuất đều có hướng dẫn thực hiện.'
    }
  ];

  const processSteps = [
    {
      title: 'AGILE - Enable',
      description: 'Khai phóng tiềm năng số và tối ưu hóa hoạt động doanh nghiệp',
      features: [
        'Phát hiện tiềm năng số',
        'Hiện thực hóa giá trị mới',
        'Tạo mô hình kinh doanh mới'
      ]
    },
    {
      title: 'AGILE - Go through',
      description: 'Đánh giá toàn diện và xây dựng lộ trình',
      features: [
        'Khảo sát toàn tổ chức',
        'Nhận diện vấn đề tổng thể',
        'Xây dựng đề án chuyển đổi số'
      ]
    },
    {
      title: 'AGILE - Implement',
      description: 'Triển khai giải pháp theo mô hình tối ưu',
      features: [
        'Triển khai theo lộ trình',
        'Tùy chỉnh phù hợp tổ chức',
        'Đảm bảo hiệu quả tối đa'
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <Title level={1} className="text-center mb-8">
          Giải pháp Chuyển đổi số
        </Title>

        <Paragraph className="text-lg text-center mb-12">
          Cung cấp giải pháp chuyển đổi số toàn diện dựa trên nền tảng công nghệ hiện đại
          và phương pháp luận AGILE, giúp doanh nghiệp tối ưu hóa hoạt động và tạo ra
          giá trị mới.
        </Paragraph>

        <Title level={2} className="mb-8">
          Nguyên tắc cốt lõi
        </Title>

        <Row gutter={[24, 24]} className="mb-16">
          {corePrinciples.map((principle, index) => (
            <Col xs={24} md={12} lg={6} key={index}>
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <Space direction="vertical" align="center" className="w-full">
                  {principle.icon}
                  <Title level={3} className="text-center mt-4">
                    {principle.title}
                  </Title>
                  <Paragraph className="text-center text-gray-600">
                    {principle.description}
                  </Paragraph>
                </Space>
              </Card>
            </Col>
          ))}
        </Row>

        <Title level={2} className="mb-8">
          Quy trình triển khai
        </Title>

        <Row gutter={[24, 24]}>
          {processSteps.map((step, index) => (
            <Col xs={24} md={8} key={index}>
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <Title level={3} className="text-center mb-4">
                  {step.title}
                </Title>
                <Paragraph className="text-gray-600 text-center mb-6">
                  {step.description}
                </Paragraph>
                <ul className="list-none pl-0">
                  {step.features.map((feature, idx) => (
                    <li key={idx} className="mb-3 flex items-start">
                      <CheckCircleOutlined className="text-red-500 mt-1 mr-2" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default SolutionsPage;
