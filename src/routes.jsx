import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import AboutPage from './pages/intro/about';
import VisionPage from './pages/intro/vision';
import ConsultingPage from './pages/digital-transformation/consulting';
import SolutionsPage from './pages/digital-transformation/solutions';
import DigitalSpacePage from './pages/digital-space';
import NewsPage from './pages/news';
import RecruitmentPage from './pages/recruitment';
import SupportPage from './pages/support';

const AppRoutes = () => {
  return (
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
  );
};

export default AppRoutes;
