import HeroSlider from '../components/HeroSlider';
import AboutUs from '../components/AboutUs';
import Courses from '../components/Courses';
import Testimonials from '../components/SuccessStories';
import ContactUs from '../components/ContactUs';
// import AdmissionForm from '../components/AdmissionForm';
// import CertificateVerification from '../components/CertificateVerification';

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSlider />
      <AboutUs />
      <Courses />
      <Testimonials />
      {/* <AdmissionForm /> */}
      {/* <CertificateVerification /> */}
      <ContactUs />
    </div>
  );
}
