import { Outlet } from "react-router-dom";
import Map from "../components/Map";
import Sidebar from "../components/Sidebar";
import User from "../components/User";

import styles from "./AppLayout.module.css";

import { useAuthContext } from "../contexts/AuthContext";

function AppLayout() {
  const { isAuthenticated } = useAuthContext();
  return (
    <div className={styles.app}>
      <Sidebar>
        {isAuthenticated ? <User /> : null}
        <Outlet />
      </Sidebar>
      <Map />
    </div>
  );
}

export default AppLayout;
