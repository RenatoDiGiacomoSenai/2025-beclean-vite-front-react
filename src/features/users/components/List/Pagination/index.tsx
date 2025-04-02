import { UsersData } from '@features/users/services'
import { Button } from '@istic-ui/react'
import { useEffect } from 'react'

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
  useEffect(() => {
    console.warn(pagination?.pageCount)
    console.warn(page)
    console.warn(pagination)
  }, [pageCount])

  return (
    <div className="flex justify-center align-middle gap-2 items-center">
      
      <button>
        <span className="text-sm text-gray-500">
          {pagination?.page} de {pagination?.pageCount}
        </span>
      </button>

      <Button
        onClick={() => setPageCount(1)}
        variant="outline"
        label="1"
        size="xs"
      />

      <Button
        onClick={() => setPageCount(2)}
        variant="outline"
        label="2"
        size="sm"
      />
    </div>
  )
}

export default UserPagination
