import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="container">
      <div className="row justify-content-center text-center">
        <div className="col">
          <div>
            <Home />
            <About />
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
