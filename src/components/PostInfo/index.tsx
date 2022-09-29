import { BsBoxArrowUpRight } from 'react-icons/bs'
import { FaCalendar, FaChevronLeft, FaComment, FaGithub } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { PostInfoContainer } from './styles'

export function PostInfo() {
  return (
    <PostInfoContainer>
      <header>
        <Link to="/">
          <FaChevronLeft />
          VOLTAR
        </Link>
        <a>
          VER NO GITHUB
          <BsBoxArrowUpRight />
        </a>
      </header>

      <p>JavaScript data types and data structures</p>

      <ul>
        <li>
          <FaGithub />
          <span> manuncorrea</span>
        </li>
        <li>
          <FaCalendar />
          <span>Há 1 dia</span>
        </li>
        <li>
          <FaComment />
          <span>5 comentários</span>
        </li>
      </ul>
    </PostInfoContainer>
  )
}
