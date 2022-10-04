import { useCallback, useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import { useParams } from 'react-router-dom'
import { PostInfo } from '../../components/PostInfo'
import { api } from '../../lib/axios'
import { ProfileContainer } from './styles'

interface PostProps {
  title: string
  html_url: string
  comments: number
  created_at: string
  body: string
  user: {
    login: string
  }
}

export function Posts() {
  const params = useParams()
  const [post, setPost] = useState<PostProps>({} as PostProps)

  const getPost = useCallback(async () => {
    const response = await api.get(
      `repos/manuncorrea/github-blog/issues/${params.number}`,
    )

    setPost(response.data)
  }, [params.number])

  useEffect(() => {
    getPost()
  }, [getPost])

  console.log(post)

  return (
    <>
      <div className="container">
        <PostInfo post={post} />
      </div>

      <ProfileContainer className="container">
        <ReactMarkdown>{post.body}</ReactMarkdown>
      </ProfileContainer>
    </>
  )
}
