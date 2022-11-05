import { useQuery } from 'react-query'
import { searchApi } from '../api/searchApi'

export function useSearch(params) {
  const queryKey = ['/search', params]
  const { data, isLoading, error } = useQuery(queryKey, () => searchApi.getAll(params))

  return {
    postList: data?.data,
    isLoading,
    error,
  }
}
