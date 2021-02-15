import React from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import actions from '../../store/actions/index'
import { Icon } from '../UI/index'
import './Sidedrawer.scss'

const Sidedrawer = ({ isAuthenticated, onToggleSidedrawer }) => {
  const dispatch = useDispatch()

  const handlerClick = (e) => {
    if (
      e.target.classList.contains('sidedrawer') ||
      e.target.classList.contains('sidedrawer__link')
    ) {
      onToggleSidedrawer()
    }
  }

  return (
    <nav className='sidedrawer' onClick={handlerClick}>
      <div className='sidedrawer__container'>
        {isAuthenticated ? (
          <>
            <Icon
              className='sidedrawer__times fas fa-times'
              onClick={onToggleSidedrawer}
            />
            <ul className='sidedrawer__list'>
              <li className='sidedrawer__item'>
                <NavLink
                  className='sidedrawer__link'
                  to='/'
                  exact
                  activeClassName='sidedrawer__link_active'
                >
                  Disk
                </NavLink>
              </li>
              <li className='sidedrawer__item'>
                <NavLink
                  className='sidedrawer__link'
                  to='/profile'
                  exact
                  activeClassName='sidedrawer__link_active'
                >
                  Profile
                </NavLink>
              </li>
              <li className='sidedrawer__item'>
                <a
                  className='sidedrawer__link'
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
              className='sidedrawer__times fas fa-times'
              onClick={onToggleSidedrawer}
            />
            <ul className='sidedrawer__list'>
              <li className='sidedrawer__item'>
                <NavLink
                  className='sidedrawer__link'
                  to='/'
                  exact
                  activeClassName='sidedrawer__link_active'
                >
                  Login
                </NavLink>
              </li>
              <li className='sidedrawer__item'>
                <NavLink
                  className='sidedrawer__link'
                  to='/singup'
                  exact
                  activeClassName='sidedrawer__link_active'
                >
                  Singup
                </NavLink>
              </li>
            </ul>
          </>
        )}
      </div>
    </nav>
  )
}

export default Sidedrawer
