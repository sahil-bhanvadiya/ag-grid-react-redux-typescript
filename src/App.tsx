import "./App.css";
import { useEffect } from "react";
import { Home } from "./components/pages/Home";
import { useAppDispatch } from "./app/hooks";
import { FetchGridData } from "./app/slices/gridSlice";
import { Navbar } from "./components/pages/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Second } from "./components/pages/Second";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(FetchGridData());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <h1>Ag grid POC</h1>
        <br />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="second" element={<Second />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
