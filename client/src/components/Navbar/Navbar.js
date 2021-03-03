import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, NavLink } from 'react-router-dom'
import styled from 'styled-components'
import actions from 'store/actions/index'
import actionCreators from 'store/actions/actionCreators/index'
import { Search, Sidedrawer } from 'components/index'
import { Icon } from 'components/UI/index'

const Navbar = ({ isAuthenticated }) => {
  const { sidedrawer } = useSelector((state) => state.app)
  const dispatch = useDispatch()
  const location = useLocation()

  const onToggleSidedrawer = () => {
    dispatch(actionCreators.appBackdrop())
    dispatch(actionCreators.appSidedrawer())
  }

  return (
    <NavbarStyles>
      <NavbarBrand>
        <NavbarTitle>Cloud storage</NavbarTitle>
      </NavbarBrand>
      {location.pathname === '/' && isAuthenticated ? (
        <Search searchNavbar />
      ) : null}
      <Sidedrawer
        isAuthenticated={isAuthenticated}
        sidedrawer={sidedrawer}
        onToggleSidedrawer={onToggleSidedrawer}
      />
      <NavbarNav>
        {isAuthenticated ? (
          <>
            <Icon
              navbarIcon
              className='fas fa-bars'
              onClick={onToggleSidedrawer}
            />
            <NavbarList>
              <NavbarItem>
                <StyledNavLink to='/' exact activeClassName='active'>
                  Disk
                </StyledNavLink>
              </NavbarItem>
              <NavbarItem>
                <StyledNavLink to='/profile' activeClassName='active'>
                  Profile
                </StyledNavLink>
              </NavbarItem>
              <NavbarItem>
                <NavbarLink
                  href='/login'
                  onClick={() => dispatch(actions.logoutUser())}
                >
                  Logout
                </NavbarLink>
              </NavbarItem>
            </NavbarList>
          </>
        ) : (
          <>
            <Icon
              navbarIcon
              className='fas fa-bars'
              onClick={onToggleSidedrawer}
            />
            <NavbarList>
              <NavbarItem>
                <StyledNavLink to='/' exact activeClassName='active'>
                  Login
                </StyledNavLink>
              </NavbarItem>
              <NavbarItem>
                <StyledNavLink to='/singup' activeClassName='active'>
                  Singup
                </StyledNavLink>
              </NavbarItem>
            </NavbarList>
          </>
        )}
      </NavbarNav>
    </NavbarStyles>
  )
}

export default Navbar

const NavbarStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 3rem;
  height: 60px;
  background: ${(props) => props.theme.colors.primary};
`

const NavbarBrand = styled.div`
  display: flex;
  align-items: center;
`

const NavbarTitle = styled.span`
  color: #fff;
`

const NavbarNav = styled.nav`
  display: flex;
  align-items: center;
`

const NavbarList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;

  @media ${(props) => props.theme.media.tablet} {
    display: none;
  }
`

const NavbarItem = styled.li`
  cursor: pointer;

  &:not(:last-child) {
    margin-right: 1rem;
  }
`

const NavbarLink = styled.a`
  padding-bottom: 0.1rem;
  text-decoration: none;
  color: #fff;
`

const StyledNavLink = styled(NavLink).attrs((props) => ({
  activeClassName: props.activeClassName,
}))`
  padding-bottom: 0.1rem;
  text-decoration: none;
  color: #fff;

  &.active {
    border-bottom: 2px solid #fff;
  }
`
