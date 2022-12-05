const candyColors = [
  { color: 'Blue', css: 'bg-blue-400' },
  { color: 'Green', css: 'bg-green-500' },
  { color: 'Red', css: 'bg-red-500' },
  { color: 'Purple', css: 'bg-pink-500' },
  { color: 'Yellow', css: 'bg-yellow-200' },
]

const CandyColors = () => {
  return (
    <>
      <div className='font-fredoka text-xl mt-8 text-custom-purple font-bold'>
        Color
      </div>
      <div className='flex flex-col gap-3 mt-3'>
        {candyColors.map((item, index) => {
          return (
            <div
              className='flex font-poppins font-medium text-custom-purple-lite items-center gap-2'
              key={index}
            >
              <div
                className={`${item.css} h-[17px] w-[17px] rounded-full`}
              ></div>
              <div>{item.color}</div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default CandyColors
