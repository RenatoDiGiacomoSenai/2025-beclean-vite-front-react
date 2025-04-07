
import { SearchInput } from '@istic-ui/react'
import { UsersListQuery } from '@features/users/services'

function UserFilters({
  setQuery,
}: {
  setQuery: React.Dispatch<React.SetStateAction<UsersListQuery>>
}) {
  // const handleSearch = (name: string) => {
  //   setQuery((prev) => ({ ...prev, name }))
  //   refetch()
  // }

  return (
    <div className="flex flex-col-reverse md:flex-row justify-end gap-4 py-4">
      <SearchInput
        placeholder="Pesquise por título"
        iconProps={{
          name: 'search',
          position: 'right',
        }}
        onChange={(e) => {
          const value = e.target.value;
          setTimeout(() => {
            setQuery((prev) => ({ ...prev, name: value }));
          }, 600); // Delay to simulate "stop typing" behavior
        }}
      />
    </div>
  )
}

export default UserFilters
