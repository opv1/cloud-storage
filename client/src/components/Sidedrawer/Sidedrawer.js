import React from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import actions from 'store/actions/index'
import { Icon } from 'components/UI/index'

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
    <SidedrawerStyles onClick={handlerClick}>
      <SidedrawerContainer>
        {isAuthenticated ? (
          <>
            <Icon
              sidedrawerIcon
              className='fas fa-times'
              onClick={onToggleSidedrawer}
            />
            <SidedrawerList>
              <SidedrawerItem>
                <StyledNavLink exact to='/' activeClassName='active'>
                  Disk
                </StyledNavLink>
              </SidedrawerItem>
              <SidedrawerItem>
                <StyledNavLink to='/profile' exact activeClassName='active'>
                  Profile
                </StyledNavLink>
              </SidedrawerItem>
              <SidedrawerItem>
                <SidedrawerLink
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
                <StyledNavLink exact to='/' activeClassName='active'>
                  Login
                </StyledNavLink>
              </SidedrawerItem>
              <SidedrawerItem>
                <StyledNavLink to='/singup' exact activeClassName='active'>
                  Singup
                </StyledNavLink>
              </SidedrawerItem>
            </SidedrawerList>
          </>
        )}
      </SidedrawerContainer>
    </SidedrawerStyles>
  )
}

export default Sidedrawer

const SidedrawerStyles = styled.nav`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 1000;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
`

const SidedrawerContainer = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  display: flex;
  justify-content: center;
  width: 40%;
  height: 100vh;
  background-color: #f1404b;
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
