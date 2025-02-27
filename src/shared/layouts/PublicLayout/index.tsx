import { useEffect } from 'react'
import { createRoute,Outlet, useNavigate } from '@tanstack/react-router'
import { rootRoute } from '@settings/tanstack-router'
// import { LOGIN_PAGE_ROUTE } from '@shared/authentication/pages'
import { useAuth } from '@shared/authentication/context'
import logo from '@assets/login-logo.svg'

const { VITE_APP_NAME, VITE_HOME_PAGE } = import.meta.env

function PublicLayout() {
  const { authenticated } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (authenticated) {
      navigate({ to: VITE_HOME_PAGE })
    }
  }, [authenticated])

  return (
    <div className="bg-white h-full grid grid-cols-1 md:grid-cols-2">
      <div className=" flex justify-center items-center row-span-1 p-6 ">
        <div className="bg-neutral-200 flex justify-center w-full h-full items-center rounded-xl">
          <img
            src={logo}
            alt={VITE_APP_NAME}
            className="w-[250px] h-[75px] md:w-[497px] md:h-[149px]"
          />
        </div>
      </div>
      <div className="bg-white flex justify-center items-start md:items-center row-span-3 md:row-span-1 p-8">
        <Outlet />
      </div>
    </div>
  )
}

export const PublicRoutes = createRoute({
  id: '_public-layout',
  getParentRoute: () => rootRoute,
  component: PublicLayout,
})
