import { Route, Routes } from "react-router-dom";
import Layout from "./layouts/layout";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout>HOME PAGE</Layout>} />
    </Routes>
  );
};

export default AppRoutes;
