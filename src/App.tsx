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
import { WisdomPage } from './pages/WisdomPage'
import { ProverbsPage } from './pages/ProverbsPage'
import { StoryPage } from './pages/StoryPage'
import { SongsPage } from './pages/SongsPage'
import { PythonPage } from './pages/PythonPage'
import { HtmlPage } from './pages/HtmlPage'
import { CssPage } from './pages/CssPage'
import { PhpPage } from './pages/PHPPage'
import { RPage } from './pages/RPage'
import { JavaPage } from './pages/JavaPage'
import { CppPage } from './pages/CppPage'
import { SqlPage } from './pages/SqlPage'
import { TowxiidPage } from './pages/TowxiidPage'
import { SalaahPage } from './pages/SalaahPage'
import { SawmPage } from './pages/SawmPage'
import { ZakahPage } from './pages/ZakahPage'
import { HajjPage } from './pages/HajjPage'
import { DownloadPage } from './pages/DownloadPage'
import { CountryPage } from './pages/CountryPage'
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
              <Route path="/xikmad" element={<WisdomPage />} />
              <Route path="/maahmaah" element={<ProverbsPage />} />
             <Route path="/sheeko" element={<StoryPage />} />
             <Route path="/heeso" element={<SongsPage />} />
             <Route path="/python" element={<PythonPage />} />
             <Route path="/html" element={<HtmlPage />} />
             <Route path="/css" element={<CssPage />} />
             <Route path="/php" element={<PhpPage />} />
             <Route path="/r" element={<RPage />} />
             <Route path="/java" element={<JavaPage />} />
             <Route path="/cpp" element={<CppPage />} />
             <Route path="/sql" element={<SqlPage />} />
             <Route path="/diinta/towxiid" element={<TowxiidPage />} />
             <Route path="/diinta/salaadda" element={<SalaahPage />} />
             <Route path="/diinta/soonka" element={<SawmPage />} />
             <Route path="/diinta/zakada" element={<ZakahPage />} />
             <Route path="/diinta/xaj" element={<HajjPage />} />
             <Route path="/download" element={<DownloadPage />} />
             <Route path="/baro-dalkaaga" element={<CountryPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </LanguageProvider>
  )
}

export default App