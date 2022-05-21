import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Homepage from "./components/Homepage";
import Notfound from "./components/Notfound";
import Register from "./components/Register";
//crypto chart
import CryptoChart from "./components/cryptoChart";
import CryptoTable from "./components/cryptoTable";
//stock chart
//import StockChart from "./components/StockChart";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="crypto-table" element={<CryptoTable />} />
        <Route path="crypto-chart" element={<CryptoChart />} />        
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
}

export default App;
