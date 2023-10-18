// import { SideBar } from "../SideBar/SideBar";
import { Route, Routes } from "react-router-dom";
import Catalog from "../../pages/Catalog/Catalog";
import Favorites from "../../pages/Favorites/Favorites";
import HomePage from "../../pages/HomePage/HomePage";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
      {/* <SideBar />
      <p>Hello</p> */}
    </div>
  );
};

export default App;
