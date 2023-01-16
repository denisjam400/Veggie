import "./App.css";
import Pages from "./Pages/Pages";
import Category from "./components/Category";
import { BrowserRouter as Routes, Route } from "react-router-dom";
import Cuisine from "./Pages/Cuisine";
import SearchBar from "./Pages/SearchBar";

function App() {
  return (
    <div className="App">
      <Routes>
        <SearchBar />
        <Category />
        <Pages />
        <Route path="/cuisine/:name">
          <Cuisine />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
