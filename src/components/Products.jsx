import Product from './Product'
import react from 'react'

const Products = ({ productData, handleprodcut }) => {
    return (
        <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8">

            {/* Heading */}
            <div className="mb-10 text-center">
                <h1 className="font-acme text-4xl font-bold text-gray-900 sm:text-5xl">
                    Our Products
                </h1>

                <p className="mt-3 font-comfortaa text-sm text-gray-500 sm:text-base">
                    Discover products you'll love
                </p>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
                {productData.map((product) => {
                    return <Product product={product} key={product.id} handleprodcut={handleprodcut} />
                })}
            </div>

        </section >
    )
}

export default Products