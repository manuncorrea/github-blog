import { useCallback, useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import { useParams } from 'react-router-dom'
import { PostInfo } from '../../components/PostInfo'
import { Environment } from '../../environment'
import { api } from '../../lib/axios'
import { ProfileContainer } from './styles'

interface PostsProps {
  title: string
  html_url: string
  comments: number
  created_at: string
  body: string
  user: {
    login: string
  }
}

const username = Environment.GITHUB_USERNAME
const repository = Environment.GITHUB_REPOSITORY

export function Posts() {
  const { id } = useParams()
  const [post, setPost] = useState<PostsProps>({} as PostsProps)

  const getPost = useCallback(async () => {
    const response = await api.get(
      `repos/${username}/${repository}/issues/${id}`,
    )

    setPost(response.data)
  }, [id])

  useEffect(() => {
    getPost()
  }, [getPost])

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
