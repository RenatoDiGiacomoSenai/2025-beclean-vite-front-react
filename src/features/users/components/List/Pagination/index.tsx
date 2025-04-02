import { UsersData } from '@features/users/services'
import { useEffect, useState } from 'react'

interface UserPaginationProps {
  page: number | undefined
  pagination: UsersData['pagination'] | undefined
  pageCount: number
  setPageCount: React.Dispatch<React.SetStateAction<number>>
}

function UserPagination({
  pagination,
  page,
  pageCount,
  setPageCount,
}: UserPaginationProps) {
  const [totalPages, setTotalPages] = useState<number[]>([])

  {
    /*
    !!Info sobre as variáveis!!
    'pagination' é o retorno da API, que contém informações sobre a paginação.
    'page' é o número da página atual.
    'pageCount' é o número total de páginas.
   */
  }

  useEffect(() => {
    const TotalPagesArray = []

    if (pagination?.pageCount) {
      for (let i = 1; i <= pagination?.pageCount; i++) {
        TotalPagesArray.push(i)
        setTotalPages(TotalPagesArray)
        console.warn(totalPages)
      }
    }
    

  }, [pageCount])

  console.warn(totalPages)

  return (
    <div className="flex justify-center align-middle gap-2 items-center">


      {totalPages.map((pageIndex, index) => (
        <button
          key={index}
          onClick={() => setPageCount(pageIndex)}
          disabled={page === pageIndex}
          className={` py-1 px-3 rounded-md border-zinc-600 border-2 ${
            page === pageIndex ? 'bg-zinc-600 text-white' : 'text-zinc-500'
          }`}
        >
          {pageIndex}
        </button>
      ))}
    </div>
  )
}

export default UserPagination
