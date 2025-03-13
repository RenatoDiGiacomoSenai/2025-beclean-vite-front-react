// import {
//     AnalysisListQuery,
//     useAnalysis,
//   } from '@features/analysis/services'
//   import { useState } from 'react'

import { SearchInput } from "@istic-ui/react"

  
  function UserFilters() {
    // const [query, setQuery] = useState<AnalysisListQuery>()
    // const { refetch } = useAnalysis(query)
  
    // const handleSearch = (search: string) => {
    //   setQuery((prev) => ({ ...prev, search }))
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
          onChange={() => {console.error('Implement me!')}}
        />
      </div>
    )
  }
  
  export default UserFilters
  