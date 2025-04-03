import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import MyNav from './Components/MyNav';
import Contact from './pages/contact';
import Team from './pages/team';
import TeamMember from './pages/teamMember';
import Signup from './pages/signup';
import About from './pages/about';
import Home from './pages/home';

function App() {
  return (
    <Router>
      <div>
        <MyNav topOfPageBool="true" />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/team" element={<Team />} /> {/* Handles /team and subroutes */}
            <Route path="/team/:memberId" element={<TeamMember />} /> {/* Handles dynamic subpages */}
          </Routes>
        </div>
        <MyNav topOfPageBool="false" className="bottom-nav"/>
      </div>
    </Router>
  );
}

export default App;