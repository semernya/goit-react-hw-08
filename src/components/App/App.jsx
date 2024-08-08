// import css from "./App.module.css";
import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Layout from "../Layout/Layout";
import { refreshUser } from "../../redux/auth/operations";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { selectIsRefreshing } from "../../redux/auth/selectors";
const HomePage = lazy(() => import('../../pages/HomePage/HomePage'))
const RegistrationPage = lazy(() => import('../../pages/RegistrationPage/RegistrationPage'))
const LoginPage = lazy(() => import('../../pages/LoginPage/LoginPage'))
const ContactsPage = lazy(() => import('../../pages/ContactsPage/ContactsPage'))
const NotFoundPage = lazy(() => import('../../pages/NotFoundPage/NotFoundPage'))

export default function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  const isRefreshing = useSelector(selectIsRefreshing);

  return isRefreshing ?
    (<div>Refreshing user data, please wait...</div>) : (

      <Layout>
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<RegistrationPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/contacts" element={<ContactsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </Layout>
    )
}
