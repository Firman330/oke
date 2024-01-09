import './App.scss';
import { Routes, Route, useLocation } from "react-router-dom";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Home from './containers/home';
import About from './containers/about';
// import Contact from './containers/contact';
// import Resume from './containers/resume';
// import Skills from './containers/skills';
// import Portfolio from './containers/portfolio';
import Navbar from './components/navBar';
import particlesConfig from "./utils/particles";

function App() {
  const location = useLocation();
  console.log(location);

  const renderParticleJsInHomePage = true; // Ganti dengan nilai yang sesuai

  const handleInit = async (main) => {
    await loadFull(main);
  }

  return (
    <div className="App">
      {renderParticleJsInHomePage && (
        <Particles id="particles" options={particlesConfig} init={handleInit}/>
      )}
      <Navbar />
      <div className="App__main-page-content">
      <Routes>
        <Route index path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        {/* <Route path='/contact' element={<Contact />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/portfolio' element={<Portfolio />} /> */}
      </Routes>
      </div>
      
    </div>
  );
}

export default App;
