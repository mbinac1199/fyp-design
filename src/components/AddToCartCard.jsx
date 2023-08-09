import React from 'react'

function AddToCartCard({item}) {
  return (
    <div>
        <img className='rounded-lg object-cover h-60 w-full' src={item.img} />
        <div className='px-3 pt-4'>
            <p className='font-medium text-xl'>{item.title}</p>
            <p className='font-bold'>${item.price}</p>
            <button className='mt-2 mb-3 transition-colors duration-200 border-2 border-orange-600 py-2 px-4 rounded-lg font-medium text-orange-600 hover:bg-orange-600 hover:text-white'>Add to cart</button>
        </div>
    </div>
  )
}

export default AddToCartCard