import bestSellersData from '../data/bestSellersData'
import Image from 'next/image'
import Link from 'next/link'

const BestSellers = () => {
  return (
    <section className='mb-14 xl:-mt-14'>
      <div className='px-3 md:px-7 w-100 mx-auto xl:w-4/6'>
        <div className='mb-10 font-fredoka text-2xl'>
          <div className='text-center'>
            <div className='flex justify-center -mb-1'>
              <Image
                className='h-5'
                src='/heading-icon.svg'
                alt='candy'
                width={20}
                height={20}
              />
            </div>
            <span className='text-red-500 font-semibold'>Best</span>{' '}
            <span className='font-semibold text-custom-purple'>Sellers</span>
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3'>
          {bestSellersData.map((data, key) => {
            return (
              <div key={key}>
                <div>
                  <div className='mb-10 flex flex-col justify-center align-middle'>
                    <div className='bg-white  border border-gray-300  mx-auto rounded-full h-48 w-48'>
                      <Image
                        src={data.image}
                        className='w-full h-full'
                        height={270}
                        width={270}
                        alt='candy'
                      />
                    </div>
                    <div className='mt-2 font-fredoka text-xl text-center font-semibold text-custom-purple'>
                      {data.title}
                    </div>
                    <div className='text-center text-red-500 text-lg  font-bold '>
                      {data.price}
                    </div>
                    <div className='mt-6 text-center'>
                      <Link
                        href=''
                        className={`${data.btnLayout.textColor} ${data.btnLayout.bgColor} px-8 py-5 text-sm font-semibold rounded-full box-content`}
                      >
                        Watch more
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default BestSellers
