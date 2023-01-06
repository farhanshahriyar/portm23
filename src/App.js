import { useContext } from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './parts/Footer';
import {ThemeContext} from './contexts/theme'
import ScrollTop from './components/ScrollTop';


function App() {
  const [{ themeName }] = useContext(ThemeContext)
  return (
    <div id='top' className={`${themeName} app`}>
    <Header/>
    <main>
      <About/>
      <Projects/>
      <Skills/>
      <Contact/>
    </main>
    <ScrollTop/>
    <Footer/>
    </div>
  );
}

export default App;
