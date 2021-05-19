import React from 'react'
import { useLocation, Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { useActions } from 'hooks/useActions'
import { Search, Sidedrawer } from 'components/index'
import { Icon } from 'components/UI/index'
import { INavbarProps } from 'interfaces'

const Navbar: React.FC<INavbarProps> = ({ isAuth }) => {
  const { singoutUser, closeSidedrawer } = useActions()
  const location = useLocation()

  return (
    <NavbarStyles>
      <NavbarBrand to='/'>Cloud storage</NavbarBrand>
      {location.pathname === '/' && isAuth && <Search search='searchNavbar' />}
      <Sidedrawer isAuth={isAuth} />
      <NavbarNav>
        {isAuth ? (
          <>
            <Icon
              icon='navbarIcon'
              className='fas fa-bars'
              onClick={closeSidedrawer}
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
                <NavbarLink href='/login' onClick={singoutUser}>
                  Sing Out
                </NavbarLink>
              </NavbarItem>
            </NavbarList>
          </>
        ) : (
          <>
            <Icon
              icon='navbarIcon'
              className='fas fa-bars'
              onClick={closeSidedrawer}
            />
            <NavbarList>
              <NavbarItem>
                <StyledNavLink to='/' exact activeClassName='active'>
                  Sing In
                </StyledNavLink>
              </NavbarItem>
              <NavbarItem>
                <StyledNavLink to='/singup' activeClassName='active'>
                  Sing Up
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
  background: ${({ theme }) => theme.colors.primary};
`

const NavbarBrand = styled(Link)`
  text-decoration: none;
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

  @media ${({ theme }) => theme.media.tablet} {
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
