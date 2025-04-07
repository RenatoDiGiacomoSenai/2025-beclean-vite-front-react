import { RiMenu2Fill } from 'react-icons/ri'
import { menuItems } from '@settings/tanstack-router'

import UserDropdown from '../UserDropdown'
import Logo from '../Logo'
import MenuItem from '../MenuItem'

interface HeaderProps {
  toggle: () => void
}

function Header({ toggle }: Readonly<HeaderProps>) {
  return (
    <header className="bg-white px-12 py-6 h-24 flex justify-between items-center border-b">
      <div className="flex items-center">
        <Logo />
      </div>
      <div className="flex items-center space-x-3">
        {menuItems.map((item) => (
          <MenuItem key={item.to} {...item} />
        ))}
      </div>
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
