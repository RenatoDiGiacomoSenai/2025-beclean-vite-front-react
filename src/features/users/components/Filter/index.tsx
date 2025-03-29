import { useState } from 'react'
import { SearchInput } from '@istic-ui/react'
import { UsersListQuery, useUsers } from '@features/users/services'

function UserFilters() {
  const [query, setQuery] = useState<UsersListQuery>()
  const { refetch } = useUsers()

  const handleSearch = (search: string) => {
    setQuery((prev) => ({ ...prev, search }))
    refetch()
  }

  return (
    <div className="flex flex-col-reverse md:flex-row justify-end gap-4 py-4">
      <SearchInput
        placeholder="Pesquise por título"
        iconProps={{
          name: 'search',
          position: 'right',
        }}
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  )
}

export default UserFilters
