import { BrowserRouter, Routes, Route } from "react-router-dom";
import Notes from "../screens/notes";

const AppRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Notes />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoute;
