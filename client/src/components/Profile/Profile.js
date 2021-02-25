import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { useLocalStorage } from 'hooks/useLocalStorage'
import actions from 'store/actions/index'
import { sizeFormat } from 'utils/index'
import { Label, Input, Button } from 'components/UI/index'
import defaultAvatar from 'assets/avatar.svg'

const Profile = () => {
  const { user } = useSelector((state) => state.user)
  const dispatch = useDispatch()
  const { object } = useLocalStorage()

  const avatarSrc = user.avatar ? `${'/' + user.avatar}` : defaultAvatar

  const handlerChange = (e) => {
    const file = e.target.files[0]

    if (file) {
      const promise = new Promise((resolve, reject) => {
        if (user.avatar) {
          resolve(dispatch(actions.deleteAvatar()))
        }
      })

      promise
        .then(dispatch(actions.uploadAvatar(object, file)))
        .catch((err) => console.log(err))
    }
  }

  const onDeleteAvatar = () => {
    dispatch(actions.deleteAvatar(object))
  }

  return (
    <ProfileStyles>
      <ProfileContainer>
        <ProfileAvatar>
          <ProfileImage className='profile__image'>
            <img src={avatarSrc} alt='avatar' />
          </ProfileImage>
          <ProfileBlock>
            <Label profileLabel htmlFor='avatar' name='Upload avatar :' />
            <Input
              profileInput
              onChange={handlerChange}
              id='avatar'
              type='file'
              name='avatar'
              accept='image/*'
            />
          </ProfileBlock>
          <Button
            secondaryColor
            profileButton
            onClick={onDeleteAvatar}
            name='Delete avatar'
            disabled={!user.avatar}
          />
        </ProfileAvatar>
        <ProfileUser>
          <div>
            User: <span>{user.email}</span>
          </div>
          <div>
            Disk space: <span>{sizeFormat(user.diskSpace)}</span>
          </div>
          <div>
            Occupied space: <span>{sizeFormat(user.usedSpace)}</span>
          </div>
        </ProfileUser>
      </ProfileContainer>
    </ProfileStyles>
  )
}

export default Profile

const ProfileStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 2rem;
  height: calc(100vh - 60px);
`

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ProfileAvatar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const ProfileImage = styled.div`
  width: 200px;
  height: 200px;

  img {
    display: block;
    border: 1px solid #696969;
    border-radius: 100%;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const ProfileBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 1rem 0;
`

const ProfileUser = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  width: 100%;

  div {
    font-size: 1.7rem;
  }

  span {
    font-size: 1.5rem;
  }
`
