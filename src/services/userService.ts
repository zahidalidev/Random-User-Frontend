import instance from '.'
import { User } from '../types'

export const fetchUsers = async (
  page: number,
  resultsPerPage: number,
  gender: string
): Promise<User[]> => {
  try {
    const response = await instance.get('', {
      params: {
        gender: gender,
        page: page,
        results: resultsPerPage,
      },
    })
    return response.data.results
  } catch (error) {
    console.error('Error fetching users:', error)
    return []
  }
}
