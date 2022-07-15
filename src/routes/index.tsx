import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "../pages/home/index";
import { Search } from "../pages/search";

export function Router() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Navigate to="/topics/Principaisnoticias" replace />}
      />
      <Route path="/topics/:slug" element={<Home />} />
      <Route path="/search/:slug" element={<Search />} />
      <Route
        path="*"
        element={<Navigate to="/topics/Principaisnoticias" replace />}
      />
    </Routes>
  );
}
