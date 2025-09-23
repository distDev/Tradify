import { Link } from '@tanstack/react-router'
import { Gift, Store, User } from 'lucide-react'

export function BottomNav() {
  return (
    <nav className="fixed bottom-0 w-[428px] bg-[#1B1B1B] text-white text-[10px] pt-3 pb-[30px] px-10">
      <ul className="flex justify-between">
        <li>
          <Link to="/" className="flex flex-col gap-1 items-center">
            <Store />
            <span>Trade</span>
          </Link>
        </li>
        <li>
          <Link to="/" className="flex flex-col gap-1 items-center">
            <Gift />
            <span>My gifts</span>
          </Link>
        </li>
        <li>
          <Link to="/" className="flex flex-col gap-1 items-center">
            <User />
            <span>Profile</span>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
