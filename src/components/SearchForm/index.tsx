import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { SearchFormContainer } from './styles'

interface SearchFomrProps {
  publicationNumber: number
  getPosts: (query?: string) => Promise<void>
}

const searchFomrSchema = z.object({
  search: z.string(),
})

type SearchFomrType = z.infer<typeof searchFomrSchema>

export function SearchFomr({ publicationNumber, getPosts }: SearchFomrProps) {
  const { register, handleSubmit } = useForm<SearchFomrType>({
    resolver: zodResolver(searchFomrSchema),
  })

  async function handleSubmitSearchFomr(data: SearchFomrType) {
    await getPosts(data.search)
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSubmitSearchFomr)}>
      <header>
        <strong>Publicação</strong>
        <span>{publicationNumber} publicações</span>
      </header>

      <input
        type="text"
        placeholder="Buscar conteúdo"
        {...register('search')}
      />
    </SearchFormContainer>
  )
}
