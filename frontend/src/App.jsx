import Header from "./components/header";
import Home from "./components/pages/home";
import Login from "./components/pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element = {<Home />}/>
          <Route path="/login" element = {<Login />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
