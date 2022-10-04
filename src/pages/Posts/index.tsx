import { useCallback, useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import { useParams } from 'react-router-dom'
import { PostInfo } from '../../components/PostInfo'
import { Environment } from '../../environment'
import { api } from '../../lib/axios'
import { ProfileContainer } from './styles'

interface PostData {
  html_url: string
  number: number
  title: string
  body: string
  created_at: string
  comments: number
  user: {
    login: string
  }
}

const username = Environment.GITHUB_USERNAME
const repository = Environment.GITHUB_REPOSITORY
export function Posts() {
  const { id } = useParams()

  const [information, setInformation] = useState<PostData>({} as PostData)

  const getPost = useCallback(async () => {
    const response = await api.get(
      `repos/${username}/${repository}/issues/${id}`,
    )
    setInformation(response.data)
  }, [id])

  useEffect(() => {
    getPost()
  }, [])

  console.log(information)

  return (
    <>
      <div className="container">
        <PostInfo post={information} />
      </div>

      <ProfileContainer className="container">
        <ReactMarkdown>{information.body}</ReactMarkdown>
      </ProfileContainer>
    </>
  )
}
