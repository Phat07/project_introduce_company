import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Form, Input, Button, message } from 'antd';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { ModelLoader } from '../ui/model-loader';
import { MailOutlined } from '@ant-design/icons';

const { TextArea } = Input;

const ContactForm = () => {
  const { t } = useTranslation();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [showLoader, setShowLoader] = useState(false);

  const handleSubmit = async (values) => {
    try {
      setLoading(true);
      setShowLoader(true);
      await emailjs.send(
        'service_bffwy8i', // Thay bằng Service ID từ EmailJS
        'template_z2n1f4o', // Thay bằng Template ID từ EmailJS
        {
          name: values.name,
          email: values.email,
          phone: values.phone,
          content: values.content,
        },
        'RH6IRP1mguiQtggQF' // Thay bằng Public Key từ EmailJS
      );
      message.success(t('contact.sendSuccess'));
      form.resetFields();
    } catch (error) {
      console.error('Error sending email:', error);
      message.error(t('contact.sendError'));
    } finally {
      setLoading(false);
      setShowLoader(false);
    }
  };

  return (
    <>
      {showLoader && <ModelLoader />}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="contact-form"
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={handleSubmit}
          className="max-w-lg mx-auto"
        >
          <Form.Item
            name="name"
            label={t('contact.name')}
            rules={[{ required: true, message: t('contact.nameRequired') }]}
          >
            <Input size="large" />
          </Form.Item>

          <Form.Item
            name="email"
            label={t('contact.email')}
            rules={[
              { required: true, message: t('contact.emailRequired') },
              { type: 'email', message: t('contact.emailInvalid') },
            ]}
          >
            <Input size="large" />
          </Form.Item>

          <Form.Item
            name="phone"
            label={t('contact.phone')}
            rules={[
              { required: true, message: t('contact.phoneRequired') },
              { pattern: /^[0-9]{10,11}$/, message: t('contact.phoneInvalid') },
            ]}
          >
            <Input size="large" />
          </Form.Item>

          <Form.Item
            name="content"
            label={t('contact.content')}
            rules={[{ required: true, message: t('contact.contentRequired') }]}
          >
            <TextArea rows={4} size="large" />
          </Form.Item>

          <Form.Item>
            {/* <Button
              type="primary"
              htmlType="submit"
              loading={loading}
              size="large"
              block
              className="bg-orange-500 hover:bg-orange-600"
            >
              {t('contact.send')}
            </Button> */}
            <Button htmlType="submit"
              loading={loading} icon={<MailOutlined />} size="large" block>
              {t('contact.send')}
            </Button>
          </Form.Item>
        </Form>
      </motion.div>
    </>
  );
};

export default ContactForm;