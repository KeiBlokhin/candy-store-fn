const catergoryMenu = [
  { item: 'Sugar candy', qty: 32 },
  { item: 'Sugar Lollypop', qty: 123 },
  { item: 'Chewing Gum', qty: 56 },
  { item: 'Jelly Candy', qty: 15 },
  { item: "M&M's", qty: 3 },
]

const Category = () => {
  return (
    <>
      <div className='font-fredoka text-xl mt-2 font-bold'>Category</div>
      <div className='flex flex-col gap-3 mt-3'>
        {catergoryMenu.map((candy, index) => {
          return (
            <div
              className='flex justify-between font-poppins font-medium text-custom-purple-lite'
              key={index}
            >
              <span>
                <span className='text-red-500 mr-2'>•</span>
                {candy.item}
              </span>
              <span className='text-red-500 h-[22px] font-extrabold bg-custom mt-1 rounded-full px-2 text-sm'>
                {candy.qty}
              </span>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Category
