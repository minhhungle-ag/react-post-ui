import { useMutation, useQuery, useQueryClient } from 'react-query'
import { contactApi } from '../api/contactApi'

export function useContact(params) {
  const queryKey = ['/contacts', params]
  const queryClient = useQueryClient()

  const { data, isLoading, error } = useQuery(queryKey, () => contactApi.getAll(params))

  const addMutation = useMutation((data) => contactApi.add(data), {
    onSuccess: () => queryClient.invalidateQueries(queryKey),
  })

  return {
    isLoading,
    error,

    contactList: data?.data,
    pagination: data?.pagination,
    addMutation,
  }
}
