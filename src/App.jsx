import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import AboutPage from './pages/AboutUs';
import CoursesPage from './pages/Courses';
import ContactPage from './pages/ContactUs';
import TestimonialsPage from './pages/SuccessStories';
import AdmissionForm from './components/AdmissionForm';
import CertificateVerification from './components/CertificateVerification';
import  DonateUs from './pages/DonateUs';
import  Event from './pages/Event';
import NotFound from './pages/NotFound';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/admission" element={<AdmissionForm />} />
          <Route path="/certificate-verification" element={<CertificateVerification />} />
          <Route path="/donate" element={<DonateUs/>} />
          <Route path="/events" element={<Event/>} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
