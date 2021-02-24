import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation, NavLink } from 'react-router-dom'
import actions from 'store/actions/index'
import { Search, Sidedrawer } from 'components/index'
import { Icon } from 'components/UI/index'
import 'components/Navbar/Navbar.scss'

const Navbar = ({ isAuthenticated }) => {
  const [sidedrawer, setSidedrawer] = useState(false)

  const location = useLocation()
  const dispatch = useDispatch()

  const onToggleSidedrawer = () => {
    setSidedrawer(!sidedrawer)
  }

  return (
    <div className='navbar'>
      <div className='navbar__brand'>
        <span className='navbar__title'>Cloud storage</span>
      </div>
      {location.pathname === '/' && isAuthenticated ? (
        <Search className='navbar__search' />
      ) : null}
      {sidedrawer ? (
        <Sidedrawer
          isAuthenticated={isAuthenticated}
          onToggleSidedrawer={onToggleSidedrawer}
        />
      ) : null}
      <nav className='navbar__nav'>
        {isAuthenticated ? (
          <>
            <Icon
              className='navbar__bars fas fa-bars'
              onClick={onToggleSidedrawer}
            />
            <ul className='navbar__list'>
              <li className='navbar__item'>
                <NavLink
                  className='navbar__link'
                  to='/'
                  exact
                  activeClassName='navbar__link_active'
                >
                  Disk
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
          </>
        ) : (
          <>
            <Icon
              className='navbar__bars fas fa-bars'
              onClick={onToggleSidedrawer}
            />
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
          </>
        )}
      </nav>
    </div>
  )
}

export default Navbar
