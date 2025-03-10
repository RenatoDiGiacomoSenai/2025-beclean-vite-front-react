import { Link, useLocation } from '@tanstack/react-router'

export interface MenuItemProps {
  label: string
  to: string
}

function MenuItem({ label, to }: Readonly<MenuItemProps>) {
  const pathname = useLocation({
    select: (state) => state.pathname,
  })

  return (
    <Link to={to}>
      <div
        className={` text-neutral-500 flex items-center p-4  ${pathname.includes(to) ? 'text-neutral-900' : ''} hover:text-brand-500`}
      >
        <span className="text-sm font-bold">{label}</span>
      </div>
    </Link>
  )
}

export default MenuItem
