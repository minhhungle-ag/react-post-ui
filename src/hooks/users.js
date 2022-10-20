import { useMutation, useQuery, useQueryClient } from 'react-query'
import { userApi } from '../api/userApi'

export function useUsers(params) {
  const queryKey = ['/user', params]
  const queryClient = useQueryClient()

  const { data, isLoading, error } = useQuery(queryKey, () => userApi.getAll(params))

  const addMutation = useMutation(userApi.add, {
    onSuccess: () => queryClient.invalidateQueries(queryKey),
  })
  const updateMutation = useMutation(userApi.update, {
    onSuccess: () => queryClient.invalidateQueries(queryKey),
  })

  return {
    isLoading,
    error,
    userList: data?.data,
    pagination: data?.pagination,
    addMutation,
    updateMutation,
  }
}
