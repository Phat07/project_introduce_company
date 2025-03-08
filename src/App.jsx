import React, { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import AppRoutes from './routes';
import './App.css';

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <ConfigProvider
        theme={{
          token: {
            fontFamily: `'Inter', sans-serif`, // Sử dụng font chữ đẹp hơn
            fontSize: 16, // Kích thước chữ mặc định
          },
        }}
      >
        <Router>
          <div className="app">
            <Header />
            <Suspense fallback={<div>Loading...</div>}>
              <AppRoutes />
            </Suspense>
            <Footer />
          </div>
        </Router>
      </ConfigProvider>
    </I18nextProvider>
  );
}

export default App;
