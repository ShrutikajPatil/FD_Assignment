import "./App.css";
import Navbar from "./components/Navbar";
import HeroPage from "./components/HeroPage";
import CompanyLogos from "./components/CompanyLogo";
import FeatureSection from "./components/Feature";
import Features2 from "./components/Feature2";
import OurTeam from './components/OurTeam'
import BlogSection from "./components/BlogSection";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <HeroPage/>
      <CompanyLogos/>
      <FeatureSection/>
      <Features2/>
      <OurTeam/>
      <BlogSection/>
      <Footer/>
    </>
  );
}

export default App;
