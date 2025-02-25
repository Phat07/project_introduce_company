import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ConfigProvider, Layout } from 'antd';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import Header from './components/layout/Header';
import HomePage from './pages/home/HomePage';
import AboutPage from './pages/intro/about';
import VisionPage from './pages/intro/vision';
import ConsultingPage from './pages/digital-transformation/consulting';
import SolutionsPage from './pages/digital-transformation/solutions';
import DigitalSpacePage from './pages/digital-space';
import NewsPage from './pages/news';
import RecruitmentPage from './pages/recruitment';
import SupportPage from './pages/support';
import './App.css';
import './i18n/i18n'

const { Content } = Layout;

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <ConfigProvider>
        <Router>
          <div className="app-container">
            <Layout>
              <Header />
              <Content className="content-container">
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/vision" element={<VisionPage />} />
                  <Route path="/consulting" element={<ConsultingPage />} />
                  <Route path="/solutions" element={<SolutionsPage />} />
                  <Route path="/digital-space" element={<DigitalSpacePage />} />
                  <Route path="/news" element={<NewsPage />} />
                  <Route path="/recruitment" element={<RecruitmentPage />} />
                  <Route path="/support" element={<SupportPage />} />
                </Routes>
              </Content>
            </Layout>
          </div>
        </Router>
      </ConfigProvider>
    </I18nextProvider>
  );
}

export default App;
