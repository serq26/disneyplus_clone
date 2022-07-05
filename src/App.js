import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./style.scss";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BrandPage from "./pages/BrandPage";
import Search from "./pages/Search";
import Movie from "./pages/Movie";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/brand/:brand" element={<BrandPage />} />
        <Route path="/play/:movieId" element={<Movie />} />
        <Route path="/search" element={<Search />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
