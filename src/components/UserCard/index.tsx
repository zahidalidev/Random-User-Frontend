import { FC } from 'react'
import { Link } from 'react-router-dom'

import { UserCardProps } from '../../types'

const UserCard: FC<UserCardProps> = ({ user }) => (
  <Link to={`/profile/${user.name.first}-${user.name.last}`} state={{ user }} className='block'>
    <div className='bg-gray-100 p-4 rounded'>
      <div className='flex items-center justify-between mb-4'>
        <img
          src={user.picture.large}
          alt={`${user.name.first} ${user.name.last}`}
          className='rounded-full w-24 h-24'
        />
        <div className='ml-4'>
          <h2 className='text-lg font-semibold'>
            {user.name.title} {user.name.first} {user.name.last}
          </h2>
          <p className='text-gray-500'>{user.phone}</p>
        </div>
      </div>
      <div className='mb-4'>
        <p className='text-gray-500'>
          <span className='font-semibold'>City:</span> {user.location.city}
        </p>
        <p className='text-gray-500'>
          <span className='font-semibold'>State:</span> {user.location.state}
        </p>
        <p className='text-gray-500'>
          <span className='font-semibold'>Country:</span> {user.location.country}
        </p>
        <p className='text-gray-500'>
          <span className='font-semibold'>Postcode:</span> {user.location.postcode}
        </p>
      </div>
    </div>
  </Link>
)

export default UserCard
