import { AnimatePresence } from "framer-motion";
import { Outlet, Route, Routes, useLocation } from "react-router-dom";
import NoMatch from "./components/noMatch";
import GlenMorayHouse from "./scenes/glenMorayHouse";
import Home from "./scenes/home";
import Test from "./scenes/test";

function AppRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
        </Route>

        <Route path="glen-moray-house" element={<GlenMorayHouse />} />
        <Route path="test" element={<Test />} />

        <Route path="*" element={<NoMatch />} />
      </Routes>
    </AnimatePresence>
  );
}

function Layout() {
  return (
    <div className="h-screen w-full bg-[url('/assets/images/home-bg.jpeg')] bg-cover bg-center bg-no-repeat">
      <Outlet />
    </div>
  );
}

export default AppRoutes;
