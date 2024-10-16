import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Layout from './components/Layout';
import Home from './pages/Home';
import Header from './components/Header';
import ContactPage from './pages/Contact';
import Footer from './components/Footer'; // Import the Footer component
import Document from './pages/Apply'
import Donate from './pages/Donate'
function App() {
  return (
    <Router>
      <Layout>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/apply" element={<Document/>} />
          <Route path="/donate" element={<Donate/>} />
        
          {/* Add other routes here */}
        </Routes>
        <Footer /> {/* Add Footer here */}
      </Layout>
    </Router>
  );
}

export default App;
