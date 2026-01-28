import { Route, Routes } from "react-router-dom";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<span>HOME</span>} />
    </Routes>
  );
};

export default AppRoutes;
