import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import actions from '../../store/actions/index'
import { sizeFormat } from '../../utils/index'
import { Label, Input, Button } from '../UI/index'
import { BASE_URL } from '../../store/constants'
import defaultAvatar from '../../assets/avatar.svg'
import './Profile.scss'

const Profile = () => {
  const { user } = useSelector((state) => state.user)

  const dispatch = useDispatch()

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
        .then(dispatch(actions.uploadAvatar(file)))
        .catch((err) => console.log(err))
    }
  }

  return (
    <div className='profile'>
      <div className='profile__container'>
        <div className='profile__avatar'>
          <div className='profile__image'>
            <img src={avatarSrc} alt='avatar' />
          </div>
          <div className='profile__block'>
            <Label
              className='profile__label'
              htmlFor='avatar'
              name='Upload avatar :'
            />
            <Input
              className='profile__input'
              onChange={handlerChange}
              id='avatar'
              type='file'
              name='avatar'
              accept='image/*'
            />
          </div>
          <Button
            className='profile__button'
            onClick={() => dispatch(actions.deleteAvatar())}
            name='Delete avatar'
            disabled={!user.avatar}
          />
        </div>
        <div className='profile__user'>
          <div className='profile__email'>
            User: <span>{user.email}</span>
          </div>
          <div className='profile__space'>
            Disk space: <span>{sizeFormat(user.diskSpace)}</span>
          </div>
          <div className='profile__occupied'>
            Occupied space: <span>{sizeFormat(user.usedSpace)}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
