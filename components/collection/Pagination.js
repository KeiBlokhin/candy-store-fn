import Image from 'next/image'

const Pagination = () => {
  return (
    <div className='mt-4'>
      <div className='flex text-custom-purple justify-center w-100 rounded-full bg-white border-custom-gray border-[2px]'>
        <div className='flex flex-col items-center p-1'>
          <div className='flex'>
            <div className='h-8 md:h-10 w-8 md:w-10 mr-2 flex justify-center items-center rounded-full bg-custom cursor-pointer'>
              <Image
                src='/arrow-pagi-left.svg'
                alt='arrow'
                width={20}
                height={20}
              />
            </div>
            <div className='flex h-8 md:h-10 text-custom-purple font-medium rounded-full space-x-1'>
              <div className='w-8 md:w-10 flex justify-center items-center cursor-pointer leading-5 transition duration-150 ease-in bg-custom rounded-full'>
                1
              </div>
              <div className='w-8 md:w-10 flex justify-center items-center cursor-pointer leading-5 transition duration-150 ease-in bg-custom-red text-white rounded-full hover:bg-gray-700'>
                2
              </div>
              <div className='w-8 md:w-10 flex justify-center items-center cursor-pointer leading-5 transition duration-150 ease-in bg-custom rounded-full'>
                3
              </div>
              <div className='w-8 md:w-10 flex justify-center items-center cursor-pointer leading-5 transition duration-150 ease-in bg-custom rounded-full'>
                4
              </div>
              <div className='w-8 md:w-10 flex justify-center items-center cursor-pointer leading-5 transition duration-150 ease-in bg-custom rounded-full'>
                ...
              </div>
              <div className='w-8 md:w-10 flex justify-center items-center cursor-pointer leading-5 transition duration-150 ease-in bg-custom rounded-full'>
                15
              </div>
              <div className='h-8 md:h-10 w-8 md:w-10 mr-2 flex justify-center items-center rounded-full bg-custom cursor-pointer'>
                <Image
                  src='/arrow-pagi-right.svg'
                  alt='arrow'
                  width={20}
                  height={20}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pagination
