import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "../pages/home";
import  { Covid, Economy, Entertainment, Health, MainNews,  Sports, Technology} from "../components/topics/index"
import { Search } from "../pages/search";

export function Router() {
  return (
    <Routes>
      <Route path="topics" element={<Home />}>
        <Route index element={<MainNews />} />
        <Route path="principaisnoticias" element={<MainNews />} />
        <Route path="covid-19" element={<Covid />} />
        <Route path="entretenimento" element={<Entertainment />} />
        <Route path="tecnologia" element={<Technology />} />
        <Route path="economia" element={<Economy />} />
        <Route path="esportivo" element={<Sports />} />
        <Route path="saude" element={<Health />} />
      </Route>
      <Route path="search/:slug" element={<Search />} />
      <Route
        path="*"
        element={<Navigate to="/topics/principaisnoticias" replace />}
      />
    </Routes>
  );
}
