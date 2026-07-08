import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { AppShell } from "./layouts/AppShell";
import { businessNav, laborNav } from "./data/mockData";
import { LandingPage } from "./pages/LandingPage";
import { PlaceholderPage } from "./pages/PlaceholderPage";
import { BusinessDashboard } from "./pages/business/BusinessDashboard";
import { WorkersPage } from "./pages/business/WorkersPage";
import { OrdersPage } from "./pages/business/OrdersPage";
import { MaterialsPage } from "./pages/business/MaterialsPage";
import { InventoryPage } from "./pages/business/InventoryPage";
import { ReportsPage } from "./pages/business/ReportsPage";
import { BusinessNotificationsPage } from "./pages/business/BusinessNotificationsPage";
import { LaborDashboard } from "./pages/labor/LaborDashboard";
import { MyJobsPage } from "./pages/labor/MyJobsPage";
import { BusinessesPage } from "./pages/labor/BusinessesPage";
import { WorkHistoryPage } from "./pages/labor/WorkHistoryPage";
import { LaborNotificationsPage } from "./pages/labor/LaborNotificationsPage";
import { ProfilePage } from "./pages/labor/ProfilePage";

function PageFrame({ children }: { children: React.ReactNode }) {
  return (
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.22 }}>
      {children}
    </motion.div>
  );
}

export default function App() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/business" element={<AppShell nav={businessNav} portal="Business" />}>
          <Route index element={<PageFrame><BusinessDashboard /></PageFrame>} />
          <Route path="workers" element={<PageFrame><WorkersPage /></PageFrame>} />
          <Route path="orders" element={<PageFrame><OrdersPage /></PageFrame>} />
          <Route path="materials" element={<PageFrame><MaterialsPage /></PageFrame>} />
          <Route path="inventory" element={<PageFrame><InventoryPage /></PageFrame>} />
          <Route path="reports" element={<PageFrame><ReportsPage /></PageFrame>} />
          <Route path="notifications" element={<PageFrame><BusinessNotificationsPage /></PageFrame>} />
          <Route path="settings" element={<PageFrame><PlaceholderPage title="Settings" /></PageFrame>} />
        </Route>
        <Route path="/labor" element={<AppShell nav={laborNav} portal="Labor" />}>
          <Route index element={<PageFrame><LaborDashboard /></PageFrame>} />
          <Route path="jobs" element={<PageFrame><MyJobsPage /></PageFrame>} />
          <Route path="businesses" element={<PageFrame><BusinessesPage /></PageFrame>} />
          <Route path="history" element={<PageFrame><WorkHistoryPage /></PageFrame>} />
          <Route path="notifications" element={<PageFrame><LaborNotificationsPage /></PageFrame>} />
          <Route path="profile" element={<PageFrame><ProfilePage /></PageFrame>} />
          <Route path="settings" element={<PageFrame><PlaceholderPage title="Settings" /></PageFrame>} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AnimatePresence>
  );
}
