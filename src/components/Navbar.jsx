
import { NavLink } from 'react-router-dom'
import { ShoppingBag, ShoppingCart } from 'lucide-react'

const Navbar = ({ totalItems }) => {
    const linkStyle = ({ isActive }) =>
        `rounded-full px-4 py-2 font-comfortaa text-sm transition ${isActive
            ? 'bg-custom font-bold text-gray-900'
            : 'text-gray-600 hover:bg-gray-100'
        }`

    return (
        <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur-md">
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">

                {/* Logo */}
                <NavLink to="/" className="flex items-center gap-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-custom">
                        <ShoppingBag size={23} />
                    </div>

                    <span className="font-acme text-2xl text-gray-900">
                        ShopEase<span className="text-blue-600">.</span>
                    </span>
                </NavLink>

                {/* Navigation */}
                <div className="flex items-center gap-2 sm:gap-4">
                    <NavLink to="/" end className={linkStyle}>
                        Products
                    </NavLink>

                    <NavLink
                        to="/cart"
                        className={({ isActive }) =>
                            `flex items-center gap-2 rounded-full px-4 py-2 font-comfortaa text-sm font-bold transition ${isActive
                                ? 'bg-gray-900 text-white'
                                : 'bg-custom text-gray-900 hover:bg-gray-200'
                            }`
                        }
                    >
                        {/* CHANGED: Relative wrapper for badge */}
                        <span className="relative">
                            <ShoppingCart size={21} />

                            {/* NEW: Red quantity badge */}
                            {totalItems > 0 && (
                                <span className="absolute -right-3 -top-3 flex h-5 min-w-5 items-center justify-center rounded-full bg-red-600 px-1 text-xs font-bold text-white">
                                    {totalItems}
                                </span>
                            )}
                        </span>

                        Cart
                    </NavLink>
                    <NavLink to="/not-found">
                        Not Found
                    </NavLink>

                </div>
            </nav>
        </header>
    )
}

export default Navbar
