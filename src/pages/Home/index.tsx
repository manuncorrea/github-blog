import { useCallback, useEffect, useState } from 'react'
import { PostPreviewHome } from '../../components/PostPreviewHome'
import { Profolie } from '../../components/Profile'
import { SearchFomr } from '../../components/SearchForm'
import { Environment } from '../../environment'
import { PostData } from '../../interface/PostsData'
import { api } from '../../lib/axios'
import { PostContent } from './styled'

const username = Environment.GITHUB_USERNAME
const repository = Environment.GITHUB_REPOSITORY

export function Home() {
  const [posts, setPosts] = useState<PostData[]>([])

  const getPosts = useCallback(async (query: string = '') => {
    const getParameter = query
      ? `/search/issues?q=${query}%20repo:${username}/${repository}`
      : `/search/issues?q=%20repo:${username}/${repository}`
    const response = await api.get(getParameter)
    setPosts(response.data.items)
  }, [])

  useEffect(() => {
    getPosts()
  }, [])

  return (
    <div className="container">
      <Profolie />
      <SearchFomr />
      <PostContent>
        {posts.map((post) => {
          return <PostPreviewHome key={post.number} posts={post} />
        })}
      </PostContent>
    </div>
  )
}
