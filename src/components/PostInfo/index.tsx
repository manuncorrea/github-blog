import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/esm/locale/pt-BR/index.js'
import { BsBoxArrowUpRight } from 'react-icons/bs'
import { FaCalendar, FaChevronLeft, FaComment, FaGithub } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { PostData } from '../../pages/Posts'
import { PostInfoContainer } from './styles'
interface PostInfoProps {
  post: PostData
}

export function PostInfo({ post }: PostInfoProps) {
  return (
    <PostInfoContainer>
      <header>
        <Link to="/">
          <FaChevronLeft />
          VOLTAR
        </Link>
        <a href={post.html_url}>
          VER NO GITHUB
          <BsBoxArrowUpRight />
        </a>
      </header>

      <p>{post?.title}</p>

      <ul>
        <li>
          <FaGithub />
          <span>manuncorrea</span>
        </li>
        <li>
          <FaCalendar />
          <span>
            {post?.created_at &&
              formatDistanceToNow(new Date(post?.created_at), {
                locale: ptBR,
                addSuffix: true,
              })}
          </span>
        </li>
        <li>
          <FaComment />
          <span>{post?.comments} comentários</span>
        </li>
      </ul>
    </PostInfoContainer>
  )
}
