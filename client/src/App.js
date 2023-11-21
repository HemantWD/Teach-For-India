import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ListOfCandidates from "./pages/ListOfCandidates";
import AdminLogin from "./pages/AdminLogin";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/listofcandidates" element={<ListOfCandidates />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
