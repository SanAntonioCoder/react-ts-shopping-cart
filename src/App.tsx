import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Home } from "./pages/Home";
import { Store } from "./pages/Store";
import { About } from "./pages/About";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
// import ColNav from "./components/ColNav";
import Navx from "./components/Navx";

function App() {
  return (
    <>
      <ShoppingCartProvider>
        <Navx />
        <Container className="mb-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<Store />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Container>
      </ShoppingCartProvider>
    </>
  );
}

export default App;
