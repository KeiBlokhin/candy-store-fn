import { useState } from 'react'
import Product from '../components/Product'
import Layout from '../components/Layout'
import Image from 'next/image'
import productData from '../data/productsData'
import Category from '../components/collection/Category'
import CandyColors from '../components/collection/CandyColors'
import Pagination from '../components/collection/Pagination'
import Price from '../components/collection/Price'

const Collection = () => {
  const [showFilter, setShowFilter] = useState(false)
  return (
    <Layout>
      <div className='px-3 md:px-7 w-100 mx-auto xl:w-4/6 mt-14 xl:-mt-16 text-custom-purple'>
        {showFilter ? (
          <div className='mb-5'>
            <Image
              onClick={() => setShowFilter(false)}
              src='/cross1.png'
              alt='cross'
              width={18}
              height={18}
            />
          </div>
        ) : null}
        <div className='grid grid-cols-1 gap-4 xl:grid-cols-4 relative'>
          <div className='xl:block p-4 bg-white h-full border-custom-gray pb-6 border-[2px] rounded-[20px] w-full md:h-full hidden'>
            <Category />
            <CandyColors />
            <Price />
          </div>
          {showFilter ? (
            <>
              <div className='z-10 xl:block p-4 bg-white h-full border-custom-gray pb-6 border-[2px] rounded-[20px] absolute w-full md:w-[32%] md:h-full'>
                <Category />
                <CandyColors />
                <Price />
              </div>
            </>
          ) : null}
          <div className='col-span-3'>
            <div className='grid gap-4 grid-cols-2 md:grid-cols-3'>
              {showFilter ? null : (
                <div className='col-span-2 md:col-span-3'>
                  <div className='flex space-x-3 xl:space-x-0 relative'>
                    <div
                      className='xl:hidden pt-[13px] px-[14px] flex justify-between w-100 text-gray-400 rounded-full bg-white border-custom-gray border-[2px]'
                      onClick={() => setShowFilter(true)}
                    >
                      <Image
                        src='/filter.svg'
                        alt='filter'
                        width={28}
                        height={28}
                      />
                    </div>
                    <div className='flex w-full justify-between w-100 text-gray-400 rounded-full bg-white border-custom-gray border-[2px]'>
                      <div className='font-semibold p-3 pl-5'>
                        <span className='hidden md:inline'>Showing</span> 1-6 of
                        45 <span className='hidden md:inline'>results</span>
                      </div>
                      <div className='flex align-middle items-center mr-2 ml-3'>
                        <span className='hidden md:flex align-middle font-semibold'>
                          Sort:
                        </span>
                        <div>
                          <div className='fkex justify-center items-center ml-2'>
                            <div>
                              <select
                                className='bg-custom font-semibold form-select w-[100px] rounded-full appearance-none block px-3 py-1.5 text-base text-gray-700 bg-clip-padding bg-no-repeat border border-solid border-custom-gray transition east-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                                aria-label='Default select example'
                              >
                                <option value='3'>Price</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {productData.map((product, index) => {
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
        </div>
        <Pagination />
      </div>
    </Layout>
  )
}

export default Collection
