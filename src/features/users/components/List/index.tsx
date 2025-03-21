import { useState } from 'react'
import { ActionIcon, DropdownMenu, Table } from '@istic-ui/react'
import { UserTypes } from '@features/users/services'

import ConfirmationModal from '../ConfirmationModal'
import EditUserModal from '../EditUserModal'


interface UserListProps {
  users: UserTypes[]
  loading: boolean
}



function UserList(props: UserListProps) {
  const { users, loading } = props

  const [dataUser, setDataUser] = useState<UserTypes | null>(null)
  const [editUserModal, setEditUserModal] = useState(false)

  const [dataUserDelete, setDataUserDelete] = useState<UserTypes | null>(
    null,
  )
  const [modalConfirmationModal, setModalConfirmationModal] = useState(false)

  const handleItemModal = (item: UserTypes | null) => {
    setModalConfirmationModal(true)
    setDataUserDelete(item)
  }

  const handleUserData = (item: UserTypes | null) => {
    setEditUserModal(true)
    setDataUser(item)
  }

  return (
    <>
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
                      onClick: () => handleUserData(item),
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
                      onClick: () => handleItemModal(item),
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
        data={users || []}
        isLoading={loading}
      />
      <EditUserModal
        modal={editUserModal}
        setModal={setEditUserModal}
        dataUser={dataUser}
      />
      <ConfirmationModal
        modal={modalConfirmationModal}
        setModal={setModalConfirmationModal}
        dataUser={dataUserDelete}
      />
    </>
  )
}

export default UserList
