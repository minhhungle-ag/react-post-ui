import { useQuery } from 'react-query'
import { postApi } from '../api/post'

export function usePosts(postId) {
  const queryKey = ['/post', postId]

  const { data, isLoading, error } = useQuery(queryKey, () => postApi.get(postId))

  return {
    post: data,
    isLoading,
    error,
  }
}
