import React from 'react'

import { products } from '../data/Index'
import PopularProductsCards from '../components/PopularProductsCards'

const PopularProducts = () => {
  return (
    <section id='products' className='max-container max-sm:mt-12'>
      <div className='flex flex-col justify-start gap-5'>
            <h2 className='text-4xl font-palanquin font-bold'>Our <span className='text-coral-red inline-block'>Popular</span> products</h2>
            <p className='font-montserrat text-slate-gray italic xl:max-w-lg lg:max-w-md'>As a community-first sneaker and streetwear boutique in India, we aim to be zeitgeists.</p>
      </div>

        <div className='mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6'>
            {products.map((product) => (
                <PopularProductsCards key={product.name} imgURL={product.imgURL} name={product.name} price={product.price}/>
            ))}

        </div>

    </section>
  )
}

export default PopularProducts
