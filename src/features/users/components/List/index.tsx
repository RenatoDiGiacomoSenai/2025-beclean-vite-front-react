import { SetStateAction, useState } from 'react'
import { ActionIcon, DropdownMenu, Table } from '@istic-ui/react'
import { UserTypes, useUsers } from '@features/users/services'


import EditUserModal from '../EditUserModal'

function UserList() {
  const [editUserModal, setEditUserModal] = useState(false)
  const [userId, setUserId] = useState<SetStateAction<UserTypes>>()

  const { users, loadingUsers } = useUsers()


  // const [dataUserDelete, setDataUserDelete] = useState<UserTypes | null>(null)


  // const handleItemModal = (item: UserTypes | null) => {
  //   setModalConfirmationModal(true)
  //   setDataUserDelete(item)
  // }

  const handleUserData = (item: UserTypes)=> {
    console.warn(item.id)
    console.warn(item)
    setUserId(item)
    setEditUserModal(true)
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
                      onClick: () => console.warn('IteDelete', item),
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
        isLoading={loadingUsers}
      />
      <EditUserModal
        modal={editUserModal}
        setModal={setEditUserModal}
        data={userId}
      />
      {/* <ConfirmationModal
        modal={modalConfirmationModal}
        setModal={setModalConfirmationModal}
        dataUser={dataUserDelete}
      /> */}
     
    </>
  )
}

export default UserList
