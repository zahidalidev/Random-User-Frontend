import { useState, useEffect, FC } from 'react'

import { fetchUsers } from '../services/userService'
import { Filters, LoadingIndicator, Pagination, Search, UserCard } from '../components'
import { User } from '../types'

const Listing: FC = () => {
  const [users, setUsers] = useState<User[]>([])
  const [filteredUsers, setFilteredUsers] = useState<User[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedGender, setSelectedGender] = useState('')
  const usersPerPage = 9
  const [searchTimeout, setSearchTimeout] = useState<NodeJS.Timeout | null>(null)
  const [loading, setLoading] = useState(false)

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

  useEffect(() => {
    const savedCurrentPage = sessionStorage.getItem('currentPage')
    const savedSelectedGender = sessionStorage.getItem('selectedGender')

    if (savedCurrentPage) setCurrentPage(Number(savedCurrentPage))
    if (savedSelectedGender) setSelectedGender(savedSelectedGender)
  }, [])

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber)
    sessionStorage.setItem('currentPage', String(pageNumber))
  }

  const handleFilterChange = (selectedGender: string) => {
    setSelectedGender(selectedGender)
    sessionStorage.setItem('selectedGender', selectedGender)
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
