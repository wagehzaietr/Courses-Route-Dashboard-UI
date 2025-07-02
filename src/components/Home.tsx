import  { useState } from 'react'
import {
  FaBars,
  FaRegCommentDots,
  FaQuestionCircle,
  FaUser
} from 'react-icons/fa'
import Coursetopics from './Coursetopics'
import heroimg from '/heroimg.webp'
import CourseMaterials from './CourseMaterials'
import Comments from './Comments'

function Home () {
  const [isplaying, setisplaying] = useState(false)

  return (
    <>
      <div className='container mx-auto mt-4 '>
        <h1 className='text-3xl px-4 md:px-0 md:text-4xl font-bold'>Starting SEO as your Home</h1>
        <div className='flex flex-wrap md:flex-nowrap mt-4 md:mt-8 justify-center '>
          <div className=' h-[520px] mx-4 md:mx-0 mt-6 w-full md:w-3/4 bg-black text-xl rounded-md'>
            {!isplaying ? (
              <div
                className='relative w-full h-full cursor-pointer '
                onClick={() => setisplaying(true)}
              >
                {/* Preview Image */}
                <img
                  src={heroimg}
                  alt='Video preview'
                  className='w-full h-full object-cover'
                />

                {/* Play Button Overlay */}
                <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-40'>
                  <div className='w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='w-8 h-8 text-red-500'
                      fill='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path d='M8 5v14l11-7z' />
                    </svg>
                  </div>
                </div>
              </div>
            ) : (
              <iframe
                className='w-full h-full rounded-lg'
                src='https://www.youtube.com/embed/FqwsbV5hItg?autoplay=1'
                title='YouTube video player'
                allow='autoplay; encrypted-media'
                allowFullScreen
              />
            )}
            <div className='flex gap-4 mt-4'>
              <div className='p-3 rounded-full hover:bg-black/20 hover:text-white transition-all cursor-pointer'>
                <FaBars size={20} />
              </div>
              <div className='p-3 rounded-full hover:bg-black/20 hover:text-white transition-all cursor-pointer'>
                <FaRegCommentDots size={20} />
              </div>
              <div className='p-3 rounded-full hover:bg-black/20 hover:text-white transition-all cursor-pointer'>
                <FaQuestionCircle size={20} />
              </div>
              <div className='p-3 rounded-full hover:bg-black/20 hover:text-white transition-all cursor-pointer'>
                <FaUser size={20} />
              </div>
            </div>
            <section className=' mt-8'>
              <h1 className='text-2xl font-bold'>Course Material</h1>
              <div>
              <CourseMaterials />
              </div>
            </section>
            <section className='p-4 mt-8'>
              <h1 className='text-2xl font-bold'>Comments</h1>
              <Comments/>
            </section>
          </div>
          <div className='w-3/2 mx-4 hidden md:block'>
            <Coursetopics />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
