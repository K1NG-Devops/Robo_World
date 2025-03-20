import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Whatsapp from './components/Whatsapp';
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import Contact from './pages/Contact';
import ProgramRegistration from './pages/ProgramRegistration';
import GeneralRegistration from './pages/GeneralRegistration';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/programs' element={<Programs />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/register/:program' element={<ProgramRegistration />} />
        <Route path='/get-started' element={<GeneralRegistration />} /> {/* Fixed route path */}
      </Routes>
      <Whatsapp />
    </Router>
  );
}

export default App;
