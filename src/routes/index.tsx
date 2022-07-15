import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "../pages/home";
import { Search } from "../pages/search";

export function Router() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Home />}
      />
      <Route path="/topics/:slug" element={<Home />} />
      <Route path="/search/:slug" element={<Search />} />
      <Route
        path="*"
        element={<Navigate to="/" replace />}
      />
    </Routes>
  );
}
