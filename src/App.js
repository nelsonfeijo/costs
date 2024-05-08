import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Company from './components/pages/Company';
import Contacts from './components/pages/Contacts';
import Projects from './components/pages/Projects';
import NewProject from './components/pages/NewProject';
import Container from './components/layout/Container';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

function App() {
  return (
    <Router>
      
      <Navbar />
      <Container customClass="min-height">
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/company' element={<Company />} />
        <Route path='/contact' element={<Contacts />} />
        <Route path='/newproject' element={<NewProject />} />
        <Route path='/project/:id' element={<Projects />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}
/*useHistory => useNavigate*/
/*history.push => navigate*/
export default App;
