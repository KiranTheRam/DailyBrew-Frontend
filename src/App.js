import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import AddBeerPage from "./pages/AddBeerPage";
import AllBeer from "./pages/AllBeer";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn.js"
import "./styles.css";


function App() {
  return (
    <Layout>
      <Routes>
        <Route exact path="/" element={<AllBeer />} />
        <Route exact path="/add-beer" element={<AddBeerPage />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/login" element={<LogIn />} />
      </Routes>
    </Layout>
  );
}

export default App;
