import { SearchFormContainer } from './styles'

export function SearchFomr() {
  return (
    <SearchFormContainer>
      <header>
        <strong>Publicação</strong>
        <span>6 publicações</span>
      </header>

      <input type="text" placeholder="Buscar conteúdo" />
    </SearchFormContainer>
  )
}
