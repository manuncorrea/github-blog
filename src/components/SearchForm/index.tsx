import React, { useContext, useState } from 'react'
import { PostsContext } from '../../context/PostsContext'
import { SearchFormContainer } from './styles'

export function SearchFomr() {
  const { posts, searchPosts } = useContext(PostsContext)
  const [input, setInput] = useState<string>()

  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault()
    searchPosts(input)
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInput(e.target.value)
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit}>
      <header>
        <strong>Publicação</strong>
        <span>{posts?.length} publicações</span>
      </header>

      <input
        type="text"
        placeholder="Buscar conteúdo"
        onChange={handleChange}
        value={input}
      />
    </SearchFormContainer>
  )
}
