import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import DisplayEntry from "./pages/DisplayEntry";
import Entries from "./pages/Entries";
import NewEntry from "./pages/NewEntry";
import PageNotFound from "./pages/PageNotFound";
import About from "./pages/About";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="login" element={<Login />} />
          <Route path="new-entry" element={<NewEntry />} />
          <Route path="display-entry/:id" element={<DisplayEntry />} />
          <Route path="entries" element={<Entries />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
