import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";

import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import Company from './components/pages/Company';
import Contact from './components/pages/Contact';
import NewProject from './components/pages/NewProject';
import Project from "./components/pages/Project";
import Login from "./components/pages/Login";

import Container from './components/layout/Container';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

function App() {

  const [logado, setLogado] = useState(false);

  return (

    <Router>

      <Navbar logado={logado} setLogado={setLogado} />

      <Container customClass="min-height">
        <Routes>
          <Route path="/" element={<Home logado={logado} />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/company" element={<Company />} />
          <Route path="/contact" element={<Contact logado={logado} />} />
          <Route path="/login" element={<Login setLogado={setLogado} />} />
          <Route path="/newproject" element={<NewProject />} />
          <Route path="/project/:id" element={<Project />} /> {/* :id mostra para o react que alguma coisa será passada dinâmicamente nesse local */}
        </Routes>
      </Container>

      <Footer />

    </Router>

  );

}

export default App;
