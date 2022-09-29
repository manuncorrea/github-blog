import { BsBoxArrowUpRight } from 'react-icons/bs'
import { FaGithub, FaUserFriends } from 'react-icons/fa'
import { ProfolieContainer } from './styles'

export function Profolie() {
  return (
    <ProfolieContainer>
      <img
        src="https://avatars.githubusercontent.com/u/15049865?v=4"
        alt=""
        srcSet=""
      />

      <div>
        <header>
          <h2>Emanuele Correa</h2>
          <a href="" target={'_blank'}>
            <span>GiTHUB</span>
            <BsBoxArrowUpRight />
          </a>
        </header>
        <p>
          Olá meu nome é Emanuele, tenho 28 anos e sou formada em Ciências da
          Computação. Dev Full Stack Júnior
        </p>

        <ul>
          <li>
            <span>
              <FaGithub />
              manuncorre
            </span>
          </li>
          <li>
            <span>
              <FaUserFriends />
              60 seguidores
            </span>
          </li>
        </ul>
      </div>
    </ProfolieContainer>
  )
}
