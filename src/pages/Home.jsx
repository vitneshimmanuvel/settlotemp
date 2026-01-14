import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import Services from '../components/Services/Services';
import TechSolutions from '../components/TechSolutions/TechSolutions';
import CTABanner from '../components/CTABanner/CTABanner';
import Stats from '../components/Stats/Stats';
import TechPartners from '../components/TechPartners/TechPartners';
import TechStack from '../components/TechStack/TechStack';
import Industries from '../components/Industries/Industries';
import Excellence from '../components/Excellence/Excellence';
import CaseStudies from '../components/CaseStudies/CaseStudies';
import ContactForm from '../components/ContactForm/ContactForm';
import FAQs from '../components/FAQs/FAQs';
import Footer from '../components/Footer/Footer';

const Home = () => {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Services />
        <TechSolutions />
        <CTABanner />
        <Stats />
        <TechPartners />
        <TechStack />
        <Industries />
        <Excellence />
        <CaseStudies />
        <ContactForm />
        <FAQs />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
