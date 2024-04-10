import "./App.css";
import Timeline from "./component/Timeline.js";
import NavBar from "./component/Navbar.js";

function App() {
  return (
    <div id="container">
      <div id="nav-box">
        <NavBar />
      </div>
      <Timeline />
    </div>
  );
}

export default App;
