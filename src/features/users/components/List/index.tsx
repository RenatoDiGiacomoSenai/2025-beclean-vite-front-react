import { useUsers } from '@features/users/services'
import { ActionIcon, DropdownMenu, Table } from '@istic-ui/react'

function UserList() {
  const { users, loading } = useUsers()

  return (
    <Table
      classNames={{
        bodyCell: 'bg-white',
        bodyRow: 'bg-white hover:bg-brand-50',
        headCell: 'bg-neutral-50 text-muted text-xs',
      }}
      columns={[
        {
          index: 'name',
          label: 'Nome',
        },
        {
          index: 'email',
          label: 'E-Mail',
        },
        {
          index: 'type',
          label: 'Tipo',
        },
        {
          index: 'action',
          label: '',
          align: 'right',
          render: () => (
            <div className='flex justify-end'>
              <ActionIcon iconName="more-2" />
              {/* <DropdownMenu
                
              /> */}
            </div>
          ),
        },
      ]}
      data={users || []}
      isLoading={loading}
    />
  )
}

export default UserList

/*
 {
      "id": "d5f7a5ef-b2f3-4bde-b8c3-5bfb17dd998b",
      "name": "John DOe",
      "email": "john@example.com",
      "type": "ADMIN",
      "createdAt": "2025-01-01T00:00:00.000Z",
      "modifiedAt": "2025-01-01T00:00:00.000Z",
      "deletedAt": null
    }
*/
