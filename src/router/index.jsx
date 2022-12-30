import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateTodo from "../screens/todo";

const AppRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<CreateTodo />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoute;
