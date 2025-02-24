import { RiMenu2Fill } from 'react-icons/ri'

import UserDropdown from '../UserDropdown'

interface HeaderProps {
  toggle: () => void
}

function Header({ toggle }: Readonly<HeaderProps>) {
  return (
    <header className="bg-white px-12 py-6 h-24 flex justify-between items-center border-b">
      <div className="hidden md:block"></div>
      <button
        className="md:hidden text-2xl text-brand-600"
        type="button"
        onClick={toggle}
      >
        <RiMenu2Fill />
      </button>
      <UserDropdown />
    </header>
  )
}

export default Header
