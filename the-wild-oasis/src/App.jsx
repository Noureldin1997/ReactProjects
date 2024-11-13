import GlobalStyles from "./styles/GlobalStyles";
import Account from "./pages/Account";
import Bookings from "./pages/Bookings";
import Cabins from "./pages/Cabins";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import Settings from "./pages/Settings";
import Users from "./pages/Users";
import { Routes, Route, Navigate } from "react-router";
import { BrowserRouter } from "react-router-dom";
import AppLayout from "./ui/AppLayout";

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            {/*Home Routing*/}
            <Route index element={<Navigate replace to="/dashboard" />} />
            <Route path="/Home" element={<Dashboard />} />

            {/*Component Routing*/}
            <Route path="account" element={<Account />} />
            <Route path="bookings" element={<Bookings />} />
            <Route path="cabins" element={<Cabins />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="login" element={<Login />} />
            <Route path="settings" element={<Settings />} />
            <Route path="users" element={<Users />} />
          </Route>

          {/*Not Found Routing*/}
          <Route path="/PageNotFound" element={<PageNotFound />} />
          <Route path="*" element={<Navigate replace to="/PageNotFound" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
