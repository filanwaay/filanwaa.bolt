import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './i18n/LanguageContext'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { HomePage } from './pages/HomePage'
import { ReligionPage } from './pages/ReligionPage'
import { TechnologyPage } from './pages/TechnologyPage'
import { CulturePage } from './pages/CulturePage'
import { QuranPage } from './pages/QuranPage'
import { AboutPage } from './pages/AboutPage'
import { ContactPage } from './pages/ContactPage'
import { TermsPage } from './pages/TermsPage'
import { PrivacyPage } from './pages/PrivacyPage'

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
          <Header />
          <main style={{ flex: 1 }}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/diinta" element={<ReligionPage />} />
              <Route path="/tecnolijiyada" element={<TechnologyPage />} />
              <Route path="/suugaanta" element={<CulturePage />} />
              <Route path="/quraanka" element={<QuranPage />} />
              <Route path="/nagu-baar" element={<AboutPage />} />
              <Route path="/nala-soo-xiriir" element={<ContactPage />} />
              <Route path="/shuruudaha" element={<TermsPage />} />
              <Route path="/siraha" element={<PrivacyPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </LanguageProvider>
  )
}

export default App
