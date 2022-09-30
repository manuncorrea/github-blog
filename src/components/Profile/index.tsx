import { useCallback, useEffect, useState } from 'react'
import { BsBoxArrowUpRight } from 'react-icons/bs'
import { FaGithub, FaUserFriends } from 'react-icons/fa'
import { api } from '../../lib/axios'
import { ProfolieContainer } from './styles'

interface ProfolieProps {
  avatarUrl: string
  htmlUrl: string
  name: string
  bio: string
  login: string
  followers: number
}

export function Profolie() {
  const [profolie, setProfolie] = useState<ProfolieProps>()

  const fecthProfile = useCallback(async () => {
    const response = await api.get('users/manuncorrea')
    const {
      avatar_url: avatarUrl,
      html_url: htmlUrl,
      name,
      bio,
      login,
      followers,
    } = response.data

    setProfolie({ avatarUrl, htmlUrl, name, bio, login, followers })
  }, [])

  useEffect(() => {
    fecthProfile()
  }, [fecthProfile])

  console.log(profolie?.avatarUrl)

  return (
    <ProfolieContainer>
      <img src={profolie?.avatarUrl} alt="" srcSet="" />
      <div>
        <header>
          <h2>{profolie?.name}</h2>
          <a href={profolie?.htmlUrl} target={'_blank'} rel="noreferrer">
            <span>GiTHUB</span>
            <BsBoxArrowUpRight />
          </a>
        </header>
        <p>{profolie?.bio}</p>

        <ul>
          <li>
            <span>
              <FaGithub />
              {profolie?.login}
            </span>
          </li>
          <li>
            <span>
              <FaUserFriends />
              {profolie?.followers} seguidores
            </span>
          </li>
        </ul>
      </div>
    </ProfolieContainer>
  )
}
