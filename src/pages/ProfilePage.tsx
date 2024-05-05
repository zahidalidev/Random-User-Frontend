import { FC } from 'react'
import { useLocation } from 'react-router-dom'

import { Profile } from '../components'
import { User } from '../types'

const ProfilePage: FC = () => {
  const location = useLocation()
  const user: User = location.state.user

  return (
    <div>
      <Profile user={user} />
    </div>
  )
}

export default ProfilePage
