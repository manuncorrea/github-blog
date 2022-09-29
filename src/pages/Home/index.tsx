import { PostHome } from '../../components/PostHome'
import { Profolie } from '../../components/Profile'
import { SearchFomr } from '../../components/SearchForm'
import { PostContent } from './styled'

export function Home() {
  return (
    <div className="container">
      <Profolie />
      <SearchFomr />
      <PostContent>
        <PostHome />
        <PostHome />
        <PostHome />
        <PostHome />
      </PostContent>
    </div>
  )
}
