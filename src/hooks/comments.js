import { useMutation, useQuery, useQueryClient } from 'react-query'
import { commentApi } from '../api/commentApi'

export function useComments(params) {
  const queryKey = ['/comments', params]
  const queryClient = useQueryClient()

  const { data, isLoading, error } = useQuery(queryKey, () => commentApi.getAll(params))

  const addMutation = useMutation((data) => commentApi.add(data), {
    onSuccess: () => queryClient.invalidateQueries(queryKey),
  })

  return {
    isLoading,
    error,

    commentList: data?.data,
    pagination: data?.pagination,
    addMutation,
  }
}
