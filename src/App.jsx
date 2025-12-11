import { Routes, Route } from "react-router-dom";
import Gallery from "./pages/Gallery";
import AbstractExpressionism from "./pages/artworks/AbstractExpressionism";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={
        <>
          <div className="home-heading">
            <h1>
              <span className="change-font">History of Modern Art</span>
            </h1>
          </div>
        <div className="home-container">
          <div className="home-subheading">
            <h3>(in no particular order)</h3>
          </div>

          <button
            className="explore-button"
            onClick={() => window.location.href = "/gallery"}
          >
            Explore <i className="gg-arrow-top-right"></i>
          </button>
         </div>
        </>
      }/>

      {/* Gallery Page */}
      <Route path="/gallery" element={<Gallery />} />

      {/* Example Artwork Page */}
      <Route
        path="/artworks/abstractexpressionism"
        element={<AbstractExpressionism />}
      />
    </Routes>
  );
}

export default App;
