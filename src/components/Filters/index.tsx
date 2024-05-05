import { ChangeEvent, FC } from 'react'

import { FiltersProps } from '../../types'

const Filters: FC<FiltersProps> = ({ selectedGender, onFilterChange }) => {
  const handleGenderChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onFilterChange(e.target.value)
  }

  return (
    <div className='mb-4 flex items-center'>
      <label className='block mb-1 mr-2' htmlFor='gender'>
        Filter by Gender:
      </label>
      <select
        id='gender'
        className='p-2 rounded border w-40'
        value={selectedGender}
        onChange={handleGenderChange}
      >
        <option value=''>All</option>
        <option value='male'>Male</option>
        <option value='female'>Female</option>
      </select>
    </div>
  )
}

export default Filters
