import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage";
import { NewsPage } from "./pages/NewsPage/NewsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" Component={HomePage} />
        <Route path="/news/:id" Component={NewsPage} />
      </Routes>
    </Router>
  );
}

export default App;
