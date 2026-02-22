import { Routes, Route } from "react-router";
import "./App.css";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route index element={<HomePage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
