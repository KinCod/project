import React from 'react'
import Story from './Story.js'

const Home = () => {
  return (
    <div className='bg-gray-100 w-full flex flex-col items-center '>
      <div className='flex justify-between mx-[3%] py-10 w-5/6'>
        <div className='font-bold text-2xl'>Adam Cooper Team</div>
        <button type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Dark</button>
      </div>
      <div className=' storyboard w-4/5 bg-white mb-20 rounded-lg'>

        <div className='top flex justify-between mx-5 mt-5'>
          <div className='left flex space-x-2 justify-center items-center'>
            <img src="./folder.ico" className='w-8 h-9' alt="" />
            <div>
              <div className='font-semibold'>Default Project</div>
              <div className='font-thin text-xs'> 1 Storyboard</div>
            </div>
          </div>
          <div className='right flex space-x-4 items-center'>
            <img src="./dots.png" className='cursor-pointer w-5 h-4' alt="" />
            <img src="./arrow.ico" className='cursor-pointer w-3 h-3' alt="" />
          </div>
        </div>

        <div className='grid grid-cols-3'>
          <Story/>
          <div className='bg-gray-200 max-w-sm h-[330px] max-h-sm m-10 rounded-lg flex justify-center items-center text-gray-200'>
            <img src="./pluscircle.svg" className='w-2/5' alt="" />
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Home
