import { Link, Outlet } from '@tanstack/react-router'

import { navItems } from '../model/navigation'

export function InventoryPage() {
  return (
    <div className="flex flex-col space-y-4 text-white">
      <nav>
        <ul className="flex">
          {navItems.map(item => (
            <li key={item.label}>
              <Link
                {...item}
                to={item.to}
                className="px-[7px] py-[8px]"
                activeProps={{ className: 'text-primary' }}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <Outlet />
    </div>
  )
}
