import { useState, useEffect } from 'react'
import { ConfigProvider, Layout, Menu, Select, Space } from 'antd'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { spiral } from 'ldrs'
import { Button } from './components/ui/button'
import MorphingText from './components/ui/morphing-text'
import MobileMenu from './components/ui/mobile-menu'
import { useScrollHeader } from './hooks/useScrollHeader'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import './App.css'
import './i18n/i18n'
import AboutPage from './pages/intro/about';
import VisionPage from './pages/intro/vision';
import ConsultingPage from './pages/digital-transformation/consulting';
import SolutionsPage from './pages/digital-transformation/solutions';
import DigitalSpacePage from './pages/digital-space';
import NewsPage from './pages/news';
import RecruitmentPage from './pages/recruitment';
import SupportPage from './pages/support';
import HomePage from './pages/home/HomePage'

// Initialize ldrs
spiral.register()

const { Content } = Layout

const LanguageOption = ({ flag, label }) => (
  <Space>
    <img src={flag} alt={label} style={{ width: 10, height: 'auto', marginRight: 8 }} />
    {label}
  </Space>
)



function App() {
  const { t, i18n } = useTranslation()
  const [selectedKey, setSelectedKey] = useState('home')
  const [loading, setLoading] = useState(false)
  const [currentTexts, setCurrentTexts] = useState([])
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const scrollDirection = useScrollHeader()

  // Update texts when language changes
  useEffect(() => {
    setCurrentTexts([
      t('morphing.welcome'),
      t('morphing.innovation'),
      t('morphing.future'),
      t('morphing.together')
    ])
  }, [t, i18n.language])


  return (
    <ConfigProvider>
      <Router>
        <Layout className="min-h-screen">
          <Header />
          <Content>
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
      </Router>
    </ConfigProvider>
  )
}

export default App
