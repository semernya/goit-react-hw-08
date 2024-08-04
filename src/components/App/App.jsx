import css from "./App.module.css";
// import ContactList from "../ContactList/ContactList";
// import SearchBox from "../SearchBox/SearchBox";
// import ContactForm from '../ContactForm/ContactForm'
// import Loading from "../Loading/Loading";
// import Error from "../Error/Error";
// import { useDispatch, useSelector } from "react-redux";
// import { selectError, selectLoading } from "../../redux/contactsSlice";
// import { useEffect } from 'react';
// import { fetchContacts } from '../../redux/contactsOps';
import { NavLink, Route, Routes } from "react-router-dom";
import HomePage from '../../pages/HomePage/HomePage'
import RegistrationPage from '../../pages/RegistrationPage/RegistrationPage'
import LoginPage from "../../pages/LoginPage/LoginPage";
import ContactsPage from "../../pages/ContactsPage/ContactsPage";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";

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

    <div>
      <nav className={css.nav}>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/register'>SignIn</NavLink>
        <NavLink to='/login'>LogIn</NavLink>
        <NavLink to='/contacts'>Contacts</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  )
}
