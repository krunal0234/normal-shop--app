
import { ShoppingCart } from 'lucide-react'

const Cart = ({ cart, totalItems }) => {
    // Calculate total price
    const total = cart.reduce((sum, item) => {
        return sum + Number(item.discountedPrice) * (item.count || 1)
    }, 0)

    return (
        <section className="mx-auto max-w-5xl px-5 py-12">

            {/* Cart Heading */}
            <div className="mb-8 flex items-center gap-3">
                <ShoppingCart size={30} />

                <h1 className="font-acme text-3xl text-gray-900">
                    Your Cart
                </h1>

                {/* CHANGED: Use totalItems prop */}
                <span className="rounded-full bg-custom px-3 py-1 font-comfortaa text-sm">
                    {totalItems} items
                </span>
            </div>

            {/* Empty Cart */}
            {cart.length === 0 ? (
                <div className="rounded-2xl border border-gray-200 bg-gray-50 px-6 py-12 text-center">
                    <ShoppingCart
                        size={48}
                        className="mx-auto mb-4 text-gray-400"
                    />

                    <h2 className="font-acme text-2xl text-gray-800">
                        Your cart is empty
                    </h2>

                    <p className="mt-2 font-comfortaa text-sm text-gray-500">
                        Add some products to get started!
                    </p>
                </div>
            ) : (
                <>
                    {/* Cart Products */}
                    <div className="space-y-4">
                        {cart.map((item) => (
                            <div
                                key={item.id}
                                className="flex flex-col gap-4 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition hover:shadow-md sm:flex-row sm:items-center"
                            >
                                {/* Product Image */}
                                <div className="flex h-28 w-full items-center justify-center rounded-xl bg-gray-50 p-3 sm:w-32">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="h-full w-full object-contain"
                                    />
                                </div>

                                {/* Product Details */}
                                <div className="flex-1">
                                    <h2 className="font-acme text-xl text-gray-900">
                                        {item.name}
                                    </h2>

                                    <p className="mt-2 font-comfortaa text-sm text-gray-500">
                                        Quantity: {item.count || 1}
                                    </p>
                                </div>

                                {/* Product Price */}
                                <div className="sm:text-right">
                                    <p className="font-comfortaa text-lg font-bold text-gray-900">
                                        ₹{Number(item.discountedPrice) * (item.count || 1)}
                                    </p>

                                    {/* CHANGED: Price for one item */}
                                    <p className="mt-1 font-comfortaa text-sm text-gray-400">
                                        ₹{item.discountedPrice} each
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Cart Total */}
                    <div className="mt-8 rounded-2xl bg-custom p-6">
                        <div className="flex items-center justify-between gap-4">
                            <h2 className="font-acme text-2xl text-gray-900">
                                Total Price
                            </h2>

                            <p className="font-comfortaa text-2xl font-bold text-gray-900">
                                ₹{total}
                            </p>
                        </div>

                        <button className="mt-5 w-full rounded-xl bg-gray-900 px-5 py-3 font-comfortaa font-bold text-white transition hover:bg-gray-700 active:scale-95">
                            Proceed to Checkout
                        </button>
                    </div>
                </>
            )}
        </section>
    )
}

export default Cart
