import { useState } from 'react'
import { ActionIcon, DropdownMenu, Table } from '@istic-ui/react'
import { UsersData, UserTypes } from '@features/users/services'

import ConfirmationModal from '../ConfirmationModal'
import EditUserModal from '../EditUserModal'

import UserPagination from './Pagination'

// import UserPagination from './Pagination'

function UserList({
  users,
  loadingUsers,
  page,
  pagination,
  pageCount,
  setPageCount,
}: {
  users: UsersData['users'] | []
  loadingUsers: boolean
  page: number | undefined
  pagination: UsersData['pagination'] | undefined
  pageCount: number
  setPageCount: React.Dispatch<React.SetStateAction<number>>
}) {
  const [modal, setModal] = useState(false)
  const [userEditModal, setUserEditModal] = useState(false)

  const [dataUserEdit, setDataUserEdit] = useState<UserTypes>()
  const [dataUserDelete, setDataUserDelete] = useState<UserTypes>()

  const handleUserDeleteData = (item: UserTypes) => {
    setModal(!modal)
    setDataUserDelete(item)
  }

  const handleUserEditData = (item: UserTypes) => {
    setUserEditModal(!userEditModal)
    setDataUserEdit(item)
  }

  return (
    <>
      <Table<UserTypes>
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
            render: (item: UserTypes) => (
              <div className="flex justify-end">
                <DropdownMenu
                  position="left"
                  align={'bottom'}
                  items={[
                    {
                      iconName: 'edit-box',
                      label: 'Editar Usuário',
                      id: 'edit',
                      onClick: () => handleUserEditData(item),
                    },
                    {
                      iconName: 'lock',
                      label: 'Inativar Usuário',
                      id: 'lock',
                      onClick: () => console.warn('item', item),
                    },
                    {
                      iconName: 'trash',
                      label: 'Excluir Usuário',
                      id: 'deleteOption',
                      onClick: () => handleUserDeleteData(item),
                    },
                  ]}
                  mainItem={
                    <ActionIcon
                      type="button"
                      variant="subtle"
                      iconName="more-2"
                    />
                  }
                />
              </div>
            ),
          },
        ]}
        data={Array.isArray(users) ? users : []}
        isLoading={loadingUsers}
      />
      <EditUserModal
        modal={userEditModal}
        setModal={setUserEditModal}
        users={dataUserEdit}
      />

      {/* Modal de confirmação de exclusão */}
      <ConfirmationModal
        modal={modal}
        setModal={setModal}
        userId={dataUserDelete?.id}
      />
      <UserPagination
        page={page}
        pagination={pagination}
        setPageCount={setPageCount}
        pageCount={pageCount}
      />
    </>
  )
}

export default UserList
