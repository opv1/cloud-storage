import React from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import styled, { css } from 'styled-components'
import actions from 'store/actions/index'
import { Icon } from 'components/UI/index'

const Sidedrawer = ({ isAuthenticated, sidedrawer, onToggleSidedrawer }) => {
  const dispatch = useDispatch()

  const handlerClick = (e) => {
    if (e.target.hasAttribute('data-attr')) {
      onToggleSidedrawer()
    }
  }

  return (
    <SidedrawerStyles onClick={handlerClick} sidedrawer={sidedrawer}>
      {isAuthenticated ? (
        <>
          <Icon
            sidedrawerIcon
            className='fas fa-times'
            onClick={onToggleSidedrawer}
          />
          <SidedrawerList>
            <SidedrawerItem>
              <StyledNavLink
                data-attr='link'
                to='/'
                exact
                activeClassName='active'
              >
                Disk
              </StyledNavLink>
            </SidedrawerItem>
            <SidedrawerItem>
              <StyledNavLink
                data-attr='link'
                to='/profile'
                activeClassName='active'
              >
                Profile
              </StyledNavLink>
            </SidedrawerItem>
            <SidedrawerItem>
              <SidedrawerLink
                data-attr='link'
                href='/login'
                onClick={() => dispatch(actions.logoutUser())}
              >
                Logout
              </SidedrawerLink>
            </SidedrawerItem>
          </SidedrawerList>
        </>
      ) : (
        <>
          <Icon
            sidedrawerIcon
            className='fas fa-times'
            onClick={onToggleSidedrawer}
          />
          <SidedrawerList>
            <SidedrawerItem>
              <StyledNavLink
                data-attr='link'
                to='/'
                exact
                activeClassName='active'
              >
                Login
              </StyledNavLink>
            </SidedrawerItem>
            <SidedrawerItem>
              <StyledNavLink
                data-attr='link'
                to='/singup'
                activeClassName='active'
              >
                Singup
              </StyledNavLink>
            </SidedrawerItem>
          </SidedrawerList>
        </>
      )}
    </SidedrawerStyles>
  )
}

export default Sidedrawer

const SidedrawerStyles = styled.nav`
  position: fixed;
  right: 0;
  top: 0;
  z-index: 300;
  display: flex;
  justify-content: center;
  width: 40%;
  height: 100vh;
  background: ${(props) => props.theme.colors.primary};
  transform: translateX(100%);
  transition: transform 0.2s ease-out;

  ${(props) =>
    props.sidedrawer &&
    css`
      transform: translateX(0%);
    `}
`

const SidedrawerList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: 0;
  margin-top: 4rem;
  padding: 0;
`

const SidedrawerItem = styled.li`
  margin: 0;
  margin-bottom: 1.5rem;
  cursor: pointer;
`

const SidedrawerLink = styled.a`
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
