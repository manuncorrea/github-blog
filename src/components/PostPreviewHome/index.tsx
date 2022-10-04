import { PostHomeProps } from '../../pages/Home'
import { PostHomeContainer } from './styles'

interface PostProps {
  posts: PostHomeProps
}

export function PostPreviewHome({ posts }: PostProps) {
  return (
    <PostHomeContainer>
      <header>
        <h3>{posts.title}</h3>
        <span>Há 1 dia</span>
      </header>

      <p>{posts.body}</p>
    </PostHomeContainer>
  )
}
