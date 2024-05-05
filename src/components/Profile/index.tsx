import { FC } from 'react'
import ReactCountryFlag from 'react-country-flag'

import { UserCardProps } from '../../types'

const Profile: FC<UserCardProps> = ({ user }) => (
  <div>
    <div className='flex items-center mb-4 mt-16'>
      <img
        src={user.picture.large}
        alt={`${user.name.first} ${user.name.last}`}
        className='rounded-full w-32 h-32 mr-4'
      />
      <div>
        <h1 className='text-2xl font-semibold'>
          {user.name.title} {user.name.first} {user.name.last}
        </h1>
        <p className='text-gray-500'>
          {user.location.city}, {user.location.state}, {user.location.country}
        </p>
        <p className='text-gray-500'>Phone: {user.phone}</p>
        <ReactCountryFlag
          style={{
            fontSize: '2em',
            lineHeight: '2em',
          }}
          countryCode={user.nat}
          svg
        />
      </div>
    </div>
    <div className='mb-6'>
      <p className='text-gray-500'>
        <span className='font-semibold'>Postcode:</span> {user.location.postcode}
      </p>
      <p className='text-gray-500'>
        <span className='font-semibold'>Latitude:</span> {user.location.coordinates.latitude}
      </p>
      <p className='text-gray-500'>
        <span className='font-semibold'>Longitude:</span> {user.location.coordinates.longitude}
      </p>
    </div>
    <div>
      <iframe
        title='Google Maps'
        width='100%'
        height='300'
        src={`https://maps.google.com/maps?q=${user.location.coordinates.latitude},${user.location.coordinates.longitude}&output=embed`}
      />
    </div>
  </div>
)

export default Profile
