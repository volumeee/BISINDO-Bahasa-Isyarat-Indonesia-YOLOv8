import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Navbar from "./components/Navbar";
import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import ReferenceScreen from "./screens/ReferenceScreen";
import CaptureScreen from "./screens/BisindoScreen";
import "./App.css"; // Make sure to include your CSS for transitions

function App() {
  return (
    <Router>
      <Navbar />
      <PageTransitions />
    </Router>
  );
}

function PageTransitions() {
  const location = useLocation();

  return (
    <div style={{ position: "relative", height: "100vh" }}>
      <TransitionGroup>
        <CSSTransition key={location.key} classNames="fade" timeout={300}>
          <Routes location={location}>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/about" element={<AboutScreen />} />
            <Route path="/reference" element={<ReferenceScreen />} />
            <Route path="/bisindo" element={<CaptureScreen />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}

export default App;
