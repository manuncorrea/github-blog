import { PostInfo } from '../../components/PostInfo'
import { ProfileContainer } from './styles'

export function Posts() {
  return (
    <>
      <div className="container">
        <PostInfo />
      </div>

      <ProfileContainer className="container">
        <p>
          Programming languages all have built-in data structures, but these
          often differ from one language to another. This article attempts to
          list the built-in data structures available in JavaScript and what
          properties they have. These can be used to build other data
          structures. Wherever possible, comparisons with other languages are
          drawn.
        </p>
        <a href="">Dynamic typing </a>
        <p>
          JavaScript is a loosely typed and dynamic language. Variables in
          JavaScript are not directly associated with any particular value type,
          and any variable can be assigned (and re-assigned) values of all
          types:
        </p>

        <code>let foo = 42;</code>
      </ProfileContainer>
    </>
  )
}
