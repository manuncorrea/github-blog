import React, { useCallback, useState } from 'react'
import { ReactNode } from 'react-markdown/lib/react-markdown'
import { Environment } from '../environment'
import { api } from '../lib/axios'

interface PostProps {
  number: number
  tilte: string
  created_at: string
  body: string
}

interface PostsContextType {
  posts: PostProps[] | undefined
  fetchPosts: (query?: string) => void
}

interface PostsContextProviderProps {
  children: ReactNode
}

const username = Environment.GITHUB_USERNAME
const repository = Environment.GITHUB_REPOSITORY

export const PostsContext = React.createContext({} as PostsContextType)

export function PostsContextProvider({ children }: PostsContextProviderProps) {
  const [posts, setPosts] = useState<PostProps[]>()

  const fetchPosts = useCallback(async (query?: string) => {
    const response = await api.get(
      `/search/issues?q=${query}%20label:published%20repo:${username}/${repository}`,
      {
        params: {
          q: query,
        },
      },
    )
    setPosts(response.data)
  }, [])
  return (
    <PostsContext.Provider value={{ posts, fetchPosts }}>
      {children}
    </PostsContext.Provider>
  )
}
