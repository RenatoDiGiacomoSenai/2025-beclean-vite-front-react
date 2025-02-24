import { Link } from '@tanstack/react-router'
import logo from '@assets/logo.png'

const { VITE_APP_NAME, VITE_HOME_PAGE } = import.meta.env

function Logo() {
  return (
    <div className="h-24 bg-brand-50 flex justify-center">
      <Link to={VITE_HOME_PAGE || '/users'}>
        <img src={logo} className="size-[94px]" alt={VITE_APP_NAME} />
      </Link>
    </div>
  )
}

export default Logo
