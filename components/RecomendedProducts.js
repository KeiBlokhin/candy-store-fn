import Image from 'next/image'
import recomendedProducts from '../data/recomendedProducts'
import Product from './Product'

const RecomendedProducts = () => {
  return (
    <section className='mb-24'>
      <div>
        <div className='mb-6 font-fredoka text-2xl'>
          <div className='flex justify-center -mb-1'>
            <Image
              className='h-5'
              src='/heading-icon.svg'
              alt='heading icon'
              width={20}
              height={20}
            />
          </div>
          <div className='text-center'>
            <span className='text-red-500 font-semibold'>Recommended</span>{' '}
            <span className='text-custom-purple font-semibold'>Products</span>
          </div>
        </div>
        <div className='grid gap-5 grid-cols-2 md:grid-cols-3 xl:grid-cols-4'>
          {recomendedProducts.map((product, index) => {
            return (
              <Product
                name={product.name}
                price={product.price}
                image={product.image}
                key={index}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default RecomendedProducts
