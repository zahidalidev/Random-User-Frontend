export interface User {
  name: {
    title: string
    first: string
    last: string
  }
  phone: string
  location: {
    city: string
    state: string
    country: string
    postcode: number
    coordinates: {
      latitude: string
      longitude: string
    }
  }
  picture: {
    large: string
  }
  nat: string
}

export interface UserCardProps {
  user: User
}

export interface FiltersProps {
  selectedGender: string
  onFilterChange: (selectedGender: string) => void
}

export interface PaginationProps {
  paginate: (pageNumber: number) => void
  currentPage: number
}

export interface SearchProps {
  onSearch: (searchTerm: string) => void
}
