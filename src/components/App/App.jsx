// import css from "./App.module.css";
// import ContactList from "../ContactList/ContactList";
// import SearchBox from "../SearchBox/SearchBox";
// import ContactForm from '../ContactForm/ContactForm'
// import Loading from "../Loading/Loading";
// import Error from "../Error/Error";
// import { useDispatch, useSelector } from "react-redux";
// import { selectError, selectLoading } from "../../redux/contactsSlice";
// import { useEffect } from 'react';
// import { fetchContacts } from '../../redux/contactsOps';
import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Layout from "../Layout/Layout";
const HomePage = lazy(() => import('../../pages/HomePage/HomePage'))
const RegistrationPage = lazy(() => import('../../pages/RegistrationPage/RegistrationPage'))
const LoginPage = lazy(() => import('../../pages/LoginPage/LoginPage'))
const ContactsPage = lazy(() => import('../../pages/ContactsPage/ContactsPage'))
const NotFoundPage = lazy(() => import('../../pages/NotFoundPage/NotFoundPage'))

export default function App() {

  // const loading = useSelector(selectLoading);
  // const error = useSelector(selectError);

  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchContacts())
  // }, [dispatch]);

  return (

    // <div>
    //   <h1>Phonebook</h1>
    //   <ContactForm />
    //   <SearchBox />
    //   {loading && <Loading />}
    //   {error && <Error />}
    //   <ContactList />
    // </div>

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
