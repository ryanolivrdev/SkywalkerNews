import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "../pages/home";
import  { Covid, Economy, Entertainment, Health, MainNews,  Sports, Technology} from "../components/Topics/index"
import { Search } from "../pages/search";
import { NotFound } from "../pages/notFound";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/topics/principaisnoticias" replace />}/>
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
      <Route path="404" element={<NotFound />} />
      <Route
        path="*"
        element={<Navigate to="/404" replace />}
      />
    </Routes>
  );
}
