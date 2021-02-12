import React from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import actions from '../../store/actions/index'
import { Search } from '../index'
import './Navbar.scss'

const Navbar = ({ isAuthenticated }) => {
  const dispatch = useDispatch()

  return (
    <div className='navbar'>
      <div className='navbar__brand'>
        <span className='navbar__title'>Cloud storage</span>
      </div>
      {isAuthenticated ? <Search /> : null}
      <nav className='navbar__nav'>
        {isAuthenticated ? (
          <ul className='navbar__list'>
            <li className='navbar__item'>
              <NavLink
                className='navbar__link'
                to='/'
                exact
                activeClassName='navbar__link_active'
              >
                Storage
              </NavLink>
            </li>
            <li className='navbar__item'>
              <NavLink
                className='navbar__link'
                to='/profile'
                exact
                activeClassName='navbar__link_active'
              >
                Profile
              </NavLink>
            </li>
            <li className='navbar__item'>
              <a
                className='navbar__link'
                href='/login'
                onClick={() => dispatch(actions.logoutUser())}
              >
                Logout
              </a>
            </li>
          </ul>
        ) : (
          <ul className='navbar__list'>
            <li className='navbar__item'>
              <NavLink
                className='navbar__link'
                to='/'
                exact
                activeClassName='navbar__link_active'
              >
                Login
              </NavLink>
            </li>
            <li className='navbar__item'>
              <NavLink
                className='navbar__link'
                to='/singup'
                exact
                activeClassName='navbar__link_active'
              >
                Singup
              </NavLink>
            </li>
          </ul>
        )}
      </nav>
    </div>
  )
}

export default Navbar
