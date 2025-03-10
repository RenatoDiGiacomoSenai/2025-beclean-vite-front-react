import { Link } from '@tanstack/react-router'
import logo from '@assets/logo.svg'

const { VITE_APP_NAME, VITE_HOME_PAGE } = import.meta.env

function Logo() {
  return (
    <div className="h-24 flex justify-center">
      <Link className='flex items-center' to={VITE_HOME_PAGE || '/users'}>
        <img src={logo} className="size-[64px]" alt={VITE_APP_NAME} />
      </Link>
    </div>
  )
}

export default Logo
