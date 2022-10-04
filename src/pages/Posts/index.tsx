import { useCallback, useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import { useParams } from 'react-router-dom'
import { PostInfo } from '../../components/PostInfo'
import { Environment } from '../../environment'
import { PostData } from '../../interface/PostsData'
import { api } from '../../lib/axios'
import { ProfileContainer } from './styles'

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
