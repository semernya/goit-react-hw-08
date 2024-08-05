import css from './Navigation.module.css'
import { NavLink } from 'react-router-dom'

export default function Navigation() {
    return (
        <nav className={css.nav}>
            <NavLink to='/' className={css.link}>Home</NavLink>
            <NavLink to='/contacts' className={css.link}>Contacts</NavLink>
        </nav>
    )
}