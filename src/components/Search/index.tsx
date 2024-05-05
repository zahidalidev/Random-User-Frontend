import { ChangeEvent, FC } from 'react'

import { SearchProps } from '../../types'

const Search: FC<SearchProps> = ({ onSearch }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value)
  }

  return (
    <div className='mb-4 flex items-center'>
      <label className='block mb-1 mr-4' htmlFor='search'>
        Search:
      </label>
      <input
        type='text'
        id='search'
        className='p-2 rounded border w-full'
        onChange={handleChange}
        placeholder='Search by first or last name'
      />
    </div>
  )
}

export default Search
