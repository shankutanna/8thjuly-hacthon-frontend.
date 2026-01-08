import { useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./layout/Footer";
import AppRoutes from "./routes/AppRoutes";
import OfflineDetector from "./shared/OfflineDetector";

const App = () => {
  const location = useLocation();

  const hideNavbarRoutes = ["/"];
  const shouldHideNavbar = hideNavbarRoutes.includes(location.pathname);

  return (
    <>
      {!shouldHideNavbar && <Navbar />}
      <OfflineDetector/>
      <AppRoutes />
      <Footer />
    </>
  );
};

export default App;
