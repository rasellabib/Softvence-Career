import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css'
import HeroSection from './components/hero/HeroSection'
import  './css/style.css'
import Navbar from './components/NavBar/NavSection';
import LoanProducts from './components/LoanProducts/LoanProducts';
import OurLend from './components/OurLend/OurLend';
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs';
import ClientReviews from './components/Reviews/ClientReviews';

function App() {

  return (
    <>
    <Navbar/>
    <HeroSection/>
    <LoanProducts/>
    <OurLend/>
    <WhyChooseUs/>
    <ClientReviews/>
    </>
  )
}

export default App
