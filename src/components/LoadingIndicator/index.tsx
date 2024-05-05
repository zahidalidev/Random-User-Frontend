import { FC } from 'react'

const LoadingIndicator: FC = () => (
  <div className='flex justify-center items-center mt-4'>
    <div className='border-4 border-t-4 border-blue-600 rounded-full w-12 h-12 animate-spin'></div>
  </div>
)

export default LoadingIndicator
