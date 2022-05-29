import "./styles.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import OrderSumary from "./pages/OrderSummary/OrderSummary";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/order-summary" element={<OrderSumary />} />
      </Routes>
    </BrowserRouter>
  );
}
