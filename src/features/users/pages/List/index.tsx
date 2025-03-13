import { createRoute } from '@tanstack/react-router'
import { PrivateRoutes } from '@shared/layouts/PrivateLayout'
import AddUserBtn from '@features/users/components/AddUserBtn'
import UserFilters from '@features/users/components/Filter'
import UserList from '@features/users/components/List'

function ListUsersPage() {
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
          <UserFilters />
          <AddUserBtn />
        </div>
      </div>
      <UserList/>
    </div>
  )
}

export const LIST_USERS_PAGE_ROUTE = '/users'

export const ListUsersRoute = createRoute({
  path: LIST_USERS_PAGE_ROUTE,
  getParentRoute: () => PrivateRoutes,
  component: ListUsersPage,
})
