import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Company from './components/pages/Company';
import Contacts from './components/pages/Contacts';
import Project from './components/pages/Project';
import NewProject from './components/pages/NewProject';
import Container from './components/layout/Container';

function App() {
  return (
    <Router>
      <div>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/company">Company/</Link>
        <Link to="/newproject">New Project/</Link>
        <Link to="/projects">Project/</Link>

      </div>
      <Navbar />
      <Container customClass="min-height">
        <Route path='/' element={<Home />} />
        <Route path='/project' element={<Project />} />
        <Route path='/company' element={<Company />} />
        <Route path='/contact' element={<Contacts />} />
        <Route path='/newproject' element={<NewProject />} />
        <Route path='/project/:id' element={<Projects />} />
      </Container>
      <Footer />
    </Router>
  );
}
/*useHistory => useNavigate*/
/*history.push => navigate*/
export default App;
