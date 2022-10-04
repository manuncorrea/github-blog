import React, { ReactNode } from 'react'
import { apiPosts } from '../lib/axios'

interface Post {
  title: string
  body: string
  created_at: string
  number: number
}

interface PostContextType {
  posts: Post[] | undefined
  searchPosts: (query?: string) => void
}

interface PostContextProvider {
  children: ReactNode
}

export const PostsContext = React.createContext({} as PostContextType)

export const PostsContextProvider = ({ children }: PostContextProvider) => {
  const [posts, setPosts] = React.useState<Post[]>()

  async function searchPosts(query?: string) {
    const url =
      query === undefined
        ? 'repo:manuncorrea/github-blog'
        : `${query}repo:manuncorrea/github-blog`
    const response = await apiPosts.get('', {
      params: {
        q: url,
      },
    })

    const postsResp: Post[] = response.data.items.map((post: any) => {
      return {
        title: post.title,
        created_at: post.created_at,
        body: post.body,
        number: post.number,
      }
    })
    setPosts([...postsResp])
  }

  React.useEffect(() => {
    searchPosts()
  }, [])

  return (
    <PostsContext.Provider value={{ posts, searchPosts }}>
      {children}
    </PostsContext.Provider>
  )
}
