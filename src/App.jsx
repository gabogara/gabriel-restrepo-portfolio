import { Routes, Route } from "react-router";
import "./App.css";
import HomePage from "./pages/HomePage";
import RootLayout from "./layouts/RootLayout";
import NotFoundPage from "./pages/NotFoundPAge";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route element={<RootLayout />}>
            <Route index element={<HomePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
