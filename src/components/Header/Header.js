import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import Search from 'components/Search/Search'
import './Header.scss'

/**
 * Header of the page. Includes navigation links and (optionally) search field.
 * 
 * @param {Object} props
 * @returns {React.Element}
 */
const Header = (props) => {
    return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/" exact>Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/settings" exact>Settings</NavLink>
                    </li>
                </ul>
                {props.showSearch ? <Search /> : null}
            </nav>
    )
}

Header.propTypes = {
    // indicates whether to show search field
    showSearch: PropTypes.bool
}

export default Header