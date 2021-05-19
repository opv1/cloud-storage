import React from 'react'
import styled from 'styled-components'
import { useTypeSelector } from 'hooks/useTypeSelector'
import { useActions } from 'hooks/useActions'
import { Label, Input, Button } from 'components/UI/index'
import sizeFormat from 'utils/sizeFormat'
import defaultAvatar from 'assets/avatar.svg'

const Profile: React.FC = () => {
  const { user } = useTypeSelector((state) => state.user)
  const { uploadAvatar, deleteAvatar } = useActions()

  const avatarSrc = user.avatar ? `${'/' + user.avatar}` : defaultAvatar

  const handlerChange = (event: React.ChangeEvent) => {
    const eventTarget = event.target as HTMLInputElement

    if (eventTarget.files) {
      const file = eventTarget.files[0]

      const promise = new Promise((resolve, reject) => {
        if (user.avatar) {
          resolve(() => deleteAvatar())
        } else if (!user.avatar) {
          resolve('Update avatar!')
        } else {
          reject('Reject update avatar!')
        }
      })

      promise.then(() => uploadAvatar(file)).catch((err) => console.error(err))
    }
  }

  return (
    <ProfileStyles>
      <ProfileContainer>
        <ProfileAvatar>
          <ProfileImage>
            <img src={avatarSrc} alt='avatar' />
          </ProfileImage>
          <ProfileBlock>
            <Label label='profileLabel' htmlFor='avatar' name='Upload avatar' />
            <Input
              input='profileInput'
              onChange={handlerChange}
              id='avatar'
              type='file'
              name='avatar'
              accept='image/*'
            />
            <Button
              button='profileButton'
              onClick={() => deleteAvatar()}
              name='Delete avatar'
              disabled={!user.avatar}
            />
          </ProfileBlock>
        </ProfileAvatar>
        <ProfileUser>
          <ProfileInfo>
            User: <span>{user.email}</span>
          </ProfileInfo>
          <ProfileInfo>
            Disk space: <span>{sizeFormat(user.diskSpace)}</span>
          </ProfileInfo>
          <ProfileInfo>
            Occupied space: <span>{sizeFormat(user.usedSpace)}</span>
          </ProfileInfo>
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
  margin-bottom: 1rem;
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
  margin-top: 1rem;
`

const ProfileUser = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const ProfileInfo = styled.div`
  font-size: 1.5rem;

  span {
    font-size: 1.3rem;
  }
`
