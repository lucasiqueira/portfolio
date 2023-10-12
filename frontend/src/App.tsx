import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import About from "./pages/About";

function App() {

  return (
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/about" element={ <About /> } />
      <Route path="/blog" element={ <Blog /> } />
      <Route path="/projects" element={ <Projects /> } />
      <Route path="/contact" element={ <Contact /> } />
      <Route path="/*" element={ <NotFound /> } />
    </Routes>
  )
}

export default App;
