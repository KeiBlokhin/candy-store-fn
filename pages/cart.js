import RecommendedProducts from '../components/RecomendedProducts'
import Layout from '../components/Layout'
import Promocode from '../components/cart/Promocode'
import Subtotal from '../components/cart/Subtotal'
import CartItem from '../components/cart/CartItem'

const orderData = [
  { name: ' Jelly Candy', image: '/14.png', inStock: true, price: 19.23 },
  { name: ' Sugar Gum', image: '/15.png', inStock: true, price: 13.45 },
]

const Cart = () => {
  return (
    <Layout>
      <div className='bg-custom'>
        <div className='px-3 w-100 mx-auto xl:w-4/6'>
          <div className='grid grid-cols-1 lg:grid-cols-3 mb-24 gap-3'>
            <div className='col-span-2'>
              <div className='border-2 rounded-3xl border-custom-gray p-5 mb-4 md:mb-0 mr-0 bg-white'>
                <div className='mb-6 font-fredoka font-bold text-2xl text-custom-purple'>
                  Products
                </div>
                {orderData.map((item, index) => {
                  return (
                    <CartItem
                      key={index}
                      name={item.name}
                      image={item.image}
                      inStock={item.inStock}
                      price={item.price}
                    />
                  )
                })}
              </div>
            </div>
            <div>
              <Promocode />
              <Subtotal />
            </div>
          </div>
          <RecommendedProducts />
        </div>
      </div>
    </Layout>
  )
}

export default Cart
