import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index={true} element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
