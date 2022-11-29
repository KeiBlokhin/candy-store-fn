const Price = () => {
  return (
    <>
      <div className='font-fredoka text-xl mt-7'>Price</div>
      <div className='flex justify-between mt-3 gap-4'>
        <div>
          <div className='text-sm mb-1'>From</div>
          <div className='flex flex-row gap-3 bg-custom font-semibold form-select w-full rounded-full appearance-none overflow-hidden text-base text-gray-700 bg-clip-padding bg-no-repeat border border-solid border-custom-gray transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'>
            <input
              type='number'
              className='text-center border-0 bg-custom focus:ring-0 outline-0 w-full'
            />
          </div>
        </div>
        <div>
          <div className='text-sm mb-1'>To</div>
          <div className='flex flex-row gap-3 bg-custom font-semibold form-select w-full rounded-full appearance-none overflow-hidden text-base text-gray-700 bg-clip-padding bg-no-repeat border border-solid border-custom-gray transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'>
            <input
              type='number'
              className='text-center border-0 bg-custom focus:ring-0 outline-0 w-full'
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Price
