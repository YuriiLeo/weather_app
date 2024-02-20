import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Hero />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
