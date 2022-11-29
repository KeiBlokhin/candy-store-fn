import { useState } from 'react'
import Image from 'next/image'

const AddToCart = () => {
  const [qty, setQty] = useState(1)
  const qtyInc = () => {
    setQuantity(qty + 1)
  }
  const qtyDec = () => {
    if (qty > 0) {
      setQty(qty - 1)
    }
  }
  return (
    <div className='xl:col-span-3 xl:order-1 order-3 border-2 rounded-2xl flex flex-col gap-6 border-slate-400 bg-white p-5'>
      <div className='flex justify-between items-center'>
        <div className='text-sm text-custom-purple-lite'>Price:</div>
        <div className='text-custom-red-2 text-lg font-poppinsbold font-semibold'>
          $19.23
        </div>
      </div>
      <div className='flex justify-between items-center'>
        <div className='text-sm text-custom-purple-lite'>Color:</div>
        <div className='text-sm text-custom-purple-lite'>
          <div className='flex'>
            <div className='bg-blue-400 h-[17px] w-[17px] rounded-full'></div>
            <div className='ml-2'>Blue</div>
          </div>
        </div>
      </div>
      <div className='flex justify-between items-center'>
        <div className='text-sm text-custom-purple-lite'>Type:</div>
        <div className='text-custom-purple-lite text-sm'>Jelly Candy</div>
      </div>
      <div className='flex justify-between items-center'>
        <div className='text-sm text-custom-purple-lite'>Availability:</div>
        <div className='text-custom-red-2 text-lg font-poppinsbold font-semibold'>
          In Stock
        </div>
      </div>
      <div className='flex justify-between items-center -mt-1'>
        <div className='text-sm text-custom-purple-lite'>Size:</div>
        <div className='text-sm text-custom-purple-lite'>
          <select
            className='bg-custom  form-select w-[90px] rounded-full appearance-none block px-3 py-[4px] text-base text-gray-700 bg-clip-padding bg-no-repeat border border-solid border-custom-gray transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
            aria-label='Default select'
          >
            <option>Med</option>
            <option>GMed</option>
          </select>
        </div>
      </div>
      <div className='flex justify-between items-center -mt-3'>
        <div className='text-sm text-custom-purple-lite'>Quantity:</div>
        <div className='text-sm text-custom-purple-lite'>
          <div className='flex flex-row h-[31px]'>
            <button
              className='bg-custom border-custom-gray border text-color-1 rounded-l-[16px] w-[30px] px-2 cursor-pointer outline-none'
              onClick={qtyDec}
            >
              <span className='m-auto text-2xl font-thin'>-</span>
            </button>
            <input
              type='text'
              className='p-0 justify-center focus:outline-none w-[30px] text-center bg-white text-black border-custom-gray border-0 border-t border-b font-semibold text-md md:text-basecursor-default flex items-center outline-none'
              defaultValue={qty}
            ></input>
            <button
              className='bg-custom border-custom-gray border text-color-1 rounded-r-[16px] w-[30px] px-1 rounded-fullpr cursor-pointer outline-none'
              onClick={qtyInc}
            >
              <span className='m-auto text-2xl font-thin'>+</span>
            </button>
          </div>
        </div>
      </div>
      <div>
        <button
          type='button'
          className='flex justify-center items-center text-white bg-custom-pink focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-8 py-5 mr-2 dark:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'
        >
          <Image
            src='/bag-icon.svg'
            width={16}
            height={18}
            alt='shopping bag'
          />
          <span className='font-poppins text-white pl-2 font-semibold'>
            Add to Cart
          </span>
        </button>
      </div>
    </div>
  )
}

export default AddToCart
