import { FC } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

import { PaginationProps } from '../../types'

const Pagination: FC<PaginationProps> = ({ paginate, currentPage }) => (
  <nav className='mt-4 mb-10 flex justify-center items-center'>
    <button
      className='px-3 py-1 rounded-l border border-gray-300 hover:bg-blue-500 hover:text-white'
      onClick={() => paginate(currentPage - 1)}
      disabled={currentPage === 1}
    >
      <FiChevronLeft />
    </button>
    {currentPage > 1 && <span className='mx-1'>...</span>}
    <button className='mx-1 px-3 py-1 border border-gray-30'>{currentPage}</button>
    <span className='mx-1'>...</span>
    <button
      className='px-3 py-1 rounded-r border border-gray-300 hover:bg-blue-500 hover:text-white '
      onClick={() => paginate(currentPage + 1)}
    >
      <FiChevronRight />
    </button>
  </nav>
)

export default Pagination
