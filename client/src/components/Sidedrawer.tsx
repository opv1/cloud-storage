import React from 'react'
import { NavLink } from 'react-router-dom'
import styled, { css } from 'styled-components'
import { useTypeSelector } from 'hooks/useTypeSelector'
import { useActions } from 'hooks/useActions'
import { Icon } from 'components/UI/index'
import { ISidedrawer } from 'interfaces'

const Sidedrawer: React.FC<ISidedrawer> = ({ isAuth }) => {
  const { sidedrawer } = useTypeSelector((state) => state.app)
  const { singoutUser, closeSidedrawer } = useActions()

  return (
    <SidedrawerStyles sidedrawer={sidedrawer}>
      {isAuth ? (
        <>
          <Icon
            icon='sidedrawerIcon'
            className='fas fa-times'
            onClick={closeSidedrawer}
          />
          <SidedrawerList>
            <SidedrawerItem>
              <StyledNavLink
                data-attr='sidedrawerLink'
                to='/'
                exact
                activeClassName='active'
              >
                Disk
              </StyledNavLink>
            </SidedrawerItem>
            <SidedrawerItem>
              <StyledNavLink
                data-attr='sidedrawerLink'
                to='/profile'
                activeClassName='active'
              >
                Profile
              </StyledNavLink>
            </SidedrawerItem>
            <SidedrawerItem>
              <SidedrawerLink
                data-attr='sidedrawerLink'
                href='/login'
                onClick={singoutUser}
              >
                Sing Out
              </SidedrawerLink>
            </SidedrawerItem>
          </SidedrawerList>
        </>
      ) : (
        <>
          <Icon
            icon='sidedrawerIcon'
            className='fas fa-times'
            onClick={closeSidedrawer}
          />
          <SidedrawerList>
            <SidedrawerItem>
              <StyledNavLink
                data-attr='sidedrawerLink'
                to='/'
                exact
                activeClassName='active'
              >
                Sing In
              </StyledNavLink>
            </SidedrawerItem>
            <SidedrawerItem>
              <StyledNavLink
                data-attr='sidedrawerLink'
                to='/singup'
                activeClassName='active'
              >
                Sing Up
              </StyledNavLink>
            </SidedrawerItem>
          </SidedrawerList>
        </>
      )}
    </SidedrawerStyles>
  )
}

export default Sidedrawer

const SidedrawerStyles = styled.nav<{ sidedrawer: boolean }>`
  position: fixed;
  right: 0;
  top: 0;
  z-index: 300;
  display: flex;
  justify-content: center;
  width: 40%;
  height: 100vh;
  background: ${({ theme }) => theme.colors.primary};
  transform: translateX(100%);
  transition: transform 0.2s ease-out;

  ${({ sidedrawer }) =>
    sidedrawer &&
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
