import { Route, Routes, Navigate } from "react-router-dom";
import 'boxicons/css/boxicons.min.css';
import Login from "./components/Login";
import Homepage from "./components/Homepage";
import Dashboard from "./components/dashboard";
import Notfound from "./components/Notfound";
import Register from "./components/Register";
//crypto chart
import CryptoChart from "./components/cryptoChart";
import CryptoTable from "./components/cryptoTable";
//stock chart
import StockChart from "./components/StockChart";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="home" element={<Homepage />}>
          <Route index element={<Dashboard />} />
          <Route path="crypto-table" element={<CryptoTable />} />
          <Route path="crypto-chart" element={<CryptoChart />} />
          <Route path="stock-chart" element={<StockChart />} />
        </Route>
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
}

export default App;
