import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import LoginDesign from "./pages/LoginDesign";
import DashboardDesign from "./pages/DashboardDesign";
import CronJobSetupDesign from "./pages/CronJobSetupDesign";
import ReceptionDisplayDesign from "./pages/ReceptionDisplayDesign";
import PermissionManagementDesign from "./pages/PermissionManagementDesign";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/dashboard-design-02":
        title = "";
        metaDescription = "";
        break;
      case "/cron-job-setup-design-02":
        title = "";
        metaDescription = "";
        break;
      case "/reception-display-design-02":
        title = "";
        metaDescription = "";
        break;
      case "/permission-management-design-02":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<LoginDesign />} />
      <Route path="/dashboard-design-02" element={<DashboardDesign />} />
      <Route
        path="/cron-job-setup-design-02"
        element={<CronJobSetupDesign />}
      />
      <Route
        path="/reception-display-design-02"
        element={<ReceptionDisplayDesign />}
      />
      <Route
        path="/permission-management-design-02"
        element={<PermissionManagementDesign />}
      />
    </Routes>
  );
}
export default App;
