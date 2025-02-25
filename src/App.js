//import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Services from './pages/services';
import Team from './pages/team';
import Signup from './pages/signup';
import About from './pages/about';
import Home from './pages/home';

function App() {
  let Component;
  switch (window.location.pathname) {
    case "/":
      Component = Home
      break;
    case "/about":
      Component = About
      break;
    case "/services":
      Component = Services
      break;
    case "/team":
      Component = Team
      break;
    case "/signup":
      Component = Signup
      break;
    default:
      break;
  }
  return(
    <div>
      <Navbar />
      <Component />
      <Navbar />
    </div>
  );
}

export default App;
