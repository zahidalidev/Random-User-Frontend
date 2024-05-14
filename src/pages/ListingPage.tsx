import { useState, useEffect, FC } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

import { fetchUsers } from '../services/userService'
import { Filters, LoadingIndicator, Pagination, Search, UserCard } from '../components'
import { User } from '../types'

const Listing: FC = () => {
  const [users, setUsers] = useState<User[]>([])
  const [filteredUsers, setFilteredUsers] = useState<User[]>([])
  const [searchTimeout, setSearchTimeout] = useState<NodeJS.Timeout | null>(null)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  
  const params = new URLSearchParams(location.search)
  const currentPage = parseInt(params.get('page') || '1')
  const selectedGender = params.get('gender') || ''
  const usersPerPage = 9

  const fetchData = async () => {
    setLoading(true)
    const data = await fetchUsers(currentPage, usersPerPage, selectedGender)
    setUsers(data)
    setFilteredUsers(data)
    setLoading(false)
  }

  useEffect(() => {
    fetchData()
  }, [currentPage, selectedGender])

  const paginate = (pageNumber: number) => {
    navigate(`?page=${pageNumber}&gender=${selectedGender}`)
  }

  const handleFilterChange = (selectedGender: string) => {
    navigate(`?page=1&gender=${selectedGender}`)
  }

  const handleSearch = (searchTerm: string) => {
    if (searchTimeout) clearTimeout(searchTimeout)
    if (searchTerm === '') {
      setFilteredUsers(users)
      return
    }

    const timeoutId = setTimeout(() => {
      const filteredResults = users.filter((user) => {
        const fullName = `${user.name.title} ${user.name.first} ${user.name.last}`.toLowerCase()
        const searchTermLower = searchTerm.toLowerCase().trim()
        const phone = user.phone.toLowerCase().trim()

        return (
          fullName.includes(searchTermLower) ||
          phone.includes(searchTermLower)
        )
      })

      setFilteredUsers(filteredResults)
    }, 1000)

    setSearchTimeout(timeoutId)
  }

  return (
    <div>
      <h1 className='text-3xl font-bold mb-4 mt-10 text-center'>Random User Listing</h1>
      <Filters onFilterChange={handleFilterChange} selectedGender={selectedGender} />
      <Search onSearch={handleSearch} />
      {loading ? (
        <div className='flex items-center justify-center h-96'>
          <LoadingIndicator />
        </div>
      ) : (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {filteredUsers.map((user, index) => (
            <UserCard key={index} user={user} />
          ))}
        </div>
      )}
      <Pagination paginate={paginate} currentPage={currentPage} />
    </div>
  )
}

export default Listing
