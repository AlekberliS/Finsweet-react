import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Features from './pages/Features';
import Pricing from './pages/Pricing';
import FAQ from './components/FAQ';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail'; // Import BlogDetail component
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Work from './pages/Work';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/features" element={<Features />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetail />} /> {/* BlogDetail route */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/work" element={<Work />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
