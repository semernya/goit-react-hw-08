import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import PageTitle from "../../components/PageTitle/PageTitle";

export default function ContactsPage() {
    return (
        <div>
            <PageTitle>PhoneBook</PageTitle>
            <ContactForm />
            <ContactList />
        </div>
    )
}