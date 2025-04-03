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
  setPageCount,
}: UserPaginationProps) {
  const [totalPages, setTotalPages] = useState<number[]>([])

  useEffect(() => {
    if (pagination?.pageCount) {
      const TotalPagesArray = Array.from({ length: pagination.pageCount }, (_, i) => i + 1)
      setTotalPages(TotalPagesArray)
    }
  }, [pagination?.pageCount])

  // Lógica para exibir paginação encurtada
  const maxVisiblePages = 5
  const lastPage = pagination?.pageCount || 1
  let displayedPages: (number | string)[] = []

  if (lastPage <= maxVisiblePages) {
    displayedPages = totalPages
  } else {
    if (page && page <= 3) {
      displayedPages = [1, 2, 3, 4, 5, '...', lastPage]
    } else if (page && page >= lastPage - 2) {
      displayedPages = [1, '...', lastPage - 4, lastPage - 3, lastPage - 2, lastPage - 1, lastPage]
    } else {
      displayedPages = [1, '...', page! - 1, page!, page! + 1, '...', lastPage]
    }
  }

  return (
    <div className="flex justify-center align-middle gap-2 items-center">
      {/* Botão de página anterior */}
      <button
        onClick={() => setPageCount((prev) => Math.max(1, prev - 1))}
        disabled={page === 1}
        className="py-1 px-3 rounded-md border-2 border-zinc-600 text-zinc-500"
      >
        &lt;
      </button>

      {displayedPages.map((pageIndex, index) =>
        pageIndex === '...' ? (
          <span key={index} className="py-1 px-3 text-zinc-500">
            ...
          </span>
        ) : (
          <button
            key={index}
            onClick={() => setPageCount(pageIndex as number)}
            disabled={page === pageIndex}
            className={`py-1 px-3 rounded-md border-2 ${
              page === pageIndex ? 'bg-zinc-600 text-white' : 'border-zinc-600 text-zinc-500'
            }`}
          >
            {pageIndex}
          </button>
        )
      )}

      {/* Botão de próxima página */}
      <button
        onClick={() => setPageCount((prev) => Math.min(lastPage, prev + 1))}
        disabled={page === lastPage}
        className="py-1 px-3 rounded-md border-2 border-zinc-600 text-zinc-500"
      >
        &gt;
      </button>
    </div>
  )
}

export default UserPagination
