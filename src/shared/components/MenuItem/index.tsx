import { Link, useLocation } from '@tanstack/react-router'

export interface MenuItemProps {
  label: string
  to: string
  icon: React.ReactNode
}

function MenuItem({ icon, label, to }: Readonly<MenuItemProps>) {
  const pathname = useLocation({
    select: (state) => state.pathname,
  })

  return (
    <Link to={to}>
      <div
        className={`text-brand-500 flex items-center p-4 ${pathname.includes(to) ? 'bg-brand-50 border-r-4 border-r-brand-500' : ''} hover:bg-brand-50`}
      >
        <span className="text-2xl">{icon}</span>
        <span className="ml-2 text-sm font-bold">{label}</span>
      </div>
    </Link>
  )
}

export default MenuItem
