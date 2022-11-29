import Image from 'next/image'

const ProductGalllery = () => {
  return (
    <div className='md:col-span-2 relative xl:order-1 order-1 xl:col-span-5 border-2 rounded-2xl border-slate-400 p-4 bg-white'>
      <div className='flex justify-end'>
        <Image src='/arrows-expand.svg' width={20} height={20} alt='arrow' />
      </div>
      <div className='grid grid-rows-12 h-full'>
        <div className='row-span-8'>
          <div className='h-full justify-center flex item-center align-middle'>
            <Image src='/candy.png' width={350} height={220} alt='product' />
          </div>
        </div>
        <div className='row-span-4'>
          <div className='flex pb-4 gap-4 h-full jusitfy-center items-center'>
            <div className='justify-center item-center'>
              <Image src='/26.png' width={100} height={100} alt='product' />
            </div>
            <div className='justify-center item-center'>
              <Image
                className='w-52 md:w-20 lg:w-full'
                src='/23.png'
                width={100}
                height={100}
                alt='product'
              />
            </div>
            <div className='justify-center item-center'>
              <Image
                className='w-52 md:w-20 lg:w-full'
                src='/24.png'
                width={100}
                height={100}
                alt='product'
              />
            </div>
            <div className='justify-center item-center'>
              <Image src='/25.png' width={100} height={100} alt='product' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductGalllery
