'use client'
import React, { useEffect } from 'react'
import { createRoute } from '@tanstack/react-router'
import { PrivateRoutes } from '@shared/layouts/PrivateLayout'
import AddUserBtn from '@features/users/components/AddUserBtn'
import UserFilters from '@features/users/components/Filter'
import UserList from '@features/users/components/List'
import CreationUserModal from '@features/users/components/UserModal'
import { UserDataProps, UserRoles, useUsers } from '@features/users/services'
import userService from '@features/users/services/user.service'
import { useToast } from '@shared/context'

function ListUsersPage() {
  const { users, loading } = useUsers()
  const { showToast } = useToast()

  const [modal, setModal] = React.useState<boolean>(false)
  const [data, setData] = React.useState<UserDataProps>({
    name: '',
    email: '',
    password: 'Admin@123',
    type: 'string' as UserRoles,
  })

  useEffect(() => {
    setData((prev: UserDataProps) => ({ ...prev, type: prev.type }))
  }, [])

  const handleCreateUser = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      userService.createUser(data, showToast, setModal)
    } catch (error) {
      throw new Error(
        typeof error === 'string' ? error : 'An unknown error occurred',
      )
    }
  }

  return (
    <div className="flex flex-col gap-4 h-full">
      <div className="flex justify-between items-center gap-9 ">
        <div className="flex flex-col gap-8">
          <div>
            <h1 className=" text-2xl font-bold text-neutral-900">Usuários</h1>
            <p className="text-gray-500">
              Gerencie todos os usuários associados a plataforma.
            </p>
          </div>
        </div>
        <div className="flex justify-between gap-2 items-center align-middle">
          {/*
          Componente de filtro de usuários
          */}
          <UserFilters />
          {/*
          Botão de adicionar usuário
          */}

          <AddUserBtn setModal={setModal} modal={modal} />
        </div>
      </div>

      {/*
        Componente de listagem de usuários
        */}
      <UserList loading={loading} users={users} />

      {/*
        Modal de criação de usuário
      */}
      <CreationUserModal
        createUser={setData}
        sendForm={(e) => handleCreateUser(e!)}
        modal={modal}
        setModal={setModal}
      />
    </div>
  )
}

export const LIST_USERS_PAGE_ROUTE = '/users'

export const ListUsersRoute = createRoute({
  path: LIST_USERS_PAGE_ROUTE,
  getParentRoute: () => PrivateRoutes,
  component: ListUsersPage,
})
