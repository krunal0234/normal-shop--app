import { ShoppingCart } from 'lucide-react'


const Product = ({ product, handleprodcut }) => {
    return (
        <div className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">

            {/* Product Image */}
            <div className="relative flex h-56 items-center justify-center overflow-hidden bg-gray-50 p-5">
                <span className="absolute left-3 top-3 rounded-full bg-red-500 px-3 py-1 font-comfortaa text-xs font-bold text-white">
                    {product.discount}% OFF
                </span>

                <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-contain transition duration-500 group-hover:scale-110"
                />
            </div>

            {/* Product Details */}
            <div className="p-5">

                <h2 className="font-acme text-xl text-gray-900">
                    {product.name}
                </h2>

                {/* Prices */}
                <div className="mt-3 flex items-center gap-3">
                    <span className="font-comfortaa text-lg font-bold text-gray-900">
                        ₹{product.discountedPrice}
                    </span>

                    <span className="font-comfortaa text-sm text-gray-400 line-through">
                        ₹{product.price}
                    </span>
                </div>

                {/* Add to Cart */}
                <button onClick={() => handleprodcut(product)}
                    className="mt-5 flex w-[60%] items-center justify-center gap-2 rounded-xl bg-custom px-4 py-3 font-comfortaa text-sm transition duration-300 hover:bg-customs hover:font-bold active:scale-95"
                >
                    <span>Add to Cart</span>
                    <ShoppingCart size={20} />
                </button>
            </div>
        </div>
    )
}

export default Product