//import logo from './logo.svg';
import './App.css';
import MyNav from './Components/MyNav';
import Contact from './pages/contact';
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
    case "/contact":
      Component = Contact
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
      <MyNav topOfPageBool="true"/>
      <Component />
      <MyNav topOfPageBool="false"/>
    </div>
  );
}

export default App;
