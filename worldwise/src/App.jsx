import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { CitiesContextProvider } from "./contexts/CitiesContext";
import { AuthContextProvider } from "./contexts/AuthContext";

import CityList from "./components/CityList";
import CountryList from "./components/CountryList";
import City from "./components/City";
import Form from "./components/Form";
import ProtectedRoute from "./components/ProtectedRoute";
import SpinnerFullPage from "./components/SpinnerFullPage";

// import Product from "./pages/Product";
// import Homepage from "./pages/Homepage";
// import PageNotFound from "./pages/PageNotFound";
// import Pricing from "./pages/Pricing";
// import Login from "./pages/Login";
// import AppLayout from "./pages/AppLayout";

const Homepage = lazy(() => import("./pages/Homepage"));
const Product = lazy(() => import("./pages/Product"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));
const Pricing = lazy(() => import("./pages/Pricing"));
const Login = lazy(() => import("./pages/Login"));
const AppLayout = lazy(() => import("./pages/AppLayout"));

function App() {
  return (
    <>
      <BrowserRouter>
        <CitiesContextProvider>
          <AuthContextProvider>
            <Suspense fallback={<SpinnerFullPage />}>
              <Routes>
                {/*Home Routing*/}
                <Route index element={<Navigate to="/Home" />} />

                <Route path="/Home" element={<Homepage />} />

                {/*Component Routing*/}
                <Route path="product" element={<Product />} />
                <Route path="pricing" element={<Pricing />} />
                <Route path="login" element={<Login />} />
                <Route
                  path="app"
                  element={
                    <ProtectedRoute>
                      <AppLayout />
                    </ProtectedRoute>
                  }
                >
                  <Route index element={<Navigate replace to="cities" />} />
                  <Route path="cities" element={<CityList />} />
                  <Route path="cities/:id" element={<City />} />
                  <Route path="countries" element={<CountryList />} />{" "}
                  <Route path="form" element={<Form />} />
                </Route>

                {/*Not Found Routing*/}
                <Route path="/PageNotFound" element={<PageNotFound />} />
                <Route path="*" element={<Navigate to={"/PageNotFound"} />} />
              </Routes>
            </Suspense>
          </AuthContextProvider>
        </CitiesContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;