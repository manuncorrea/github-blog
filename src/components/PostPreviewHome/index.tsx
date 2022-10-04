import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/esm/locale/pt-BR/index.js'
import { PostHomeProps } from '../../pages/Home'
import { PostHomeContainer } from './styles'

interface PostProps {
  posts: PostHomeProps
}

export function PostPreviewHome({ posts }: PostProps) {
  return (
    <PostHomeContainer to={`/post/${posts.number}`}>
      <header>
        <h3>{posts.title}</h3>
        <span>
          {formatDistanceToNow(new Date(posts.created_at), {
            locale: ptBR,
            addSuffix: true,
          })}
        </span>
      </header>

      <p>{posts.body}</p>
    </PostHomeContainer>
  )
}
