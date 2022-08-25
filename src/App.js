import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Cart from "./Pages/Cart";
import Home from "./Pages/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/Cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
