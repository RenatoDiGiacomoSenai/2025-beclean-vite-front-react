'use client'
import React from 'react'
import { createRoute } from '@tanstack/react-router'
import { PrivateRoutes } from '@shared/layouts/PrivateLayout'
import AddUserBtn from '@features/users/components/AddUserBtn'
import UserFilters from '@features/users/components/Filter'
import UserList from '@features/users/components/List'
import { UsersListQuery, useUsers } from '@features/users/services'
import CreationUserModal from '@features/users/components/UserModal'

function ListUsersPage() {
  const [pageCount, setPageCount] = React.useState(1)
  const [query, setQuery] = React.useState<UsersListQuery>({})
  const [modal, setModal] = React.useState<boolean>(false)

  const { users, loadingUsers, page, pagination } = useUsers(query, pageCount)

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
          {/*  Componente de filtro de usuários */}
          <UserFilters setQuery={setQuery} />

          {/*  Componente De abertura do modal de criação de usuário */}
          <AddUserBtn setModal={setModal} modal={modal} />
        </div>
      </div>

      {/* Componente de listagem de usuários */}
      <UserList
        users={users || []}
        loadingUsers={loadingUsers}
        pagination={pagination}
        page={page}
        pageCount={pageCount}
        setPageCount={setPageCount}
      />

      {/* Modal de criação de usuário */}
      <CreationUserModal modal={modal} setModal={setModal} />
    </div>
  )
}

export const LIST_USERS_PAGE_ROUTE = '/users'

export const ListUsersRoute = createRoute({
  path: LIST_USERS_PAGE_ROUTE,
  getParentRoute: () => PrivateRoutes,
  component: ListUsersPage,
})
