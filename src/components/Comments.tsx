import { FaArrowRight } from 'react-icons/fa6'
import Courses from './Courses'
import Progress from './Progress'
import toast from 'react-hot-toast'
import { useState } from 'react'


const users = [
  {
    name: 'Student Name: Mustafa Fathi :)',
    comment: 'Comment 1',
    image: '/user1.avif',
    createdat: '2022-01-01'
  },
  {
    name: 'Student Name: Mustafa Fathi :)',
    comment: 'lorem ipsum ',
    image: '/user2.avif',
    createdat: '2022-01-01'
  },
  {
    name: 'Student Name: Mustafa Fathi :)',
    comment:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, dolores.',
    createdat: '2022-01-01',
    image: '/user3.avif'
  }
]

function Comments () {
  const [input, setInput] = useState('')
  const handleComment = () => {
    setTimeout(() => {
      if(input){
        toast.success('Comment Added')
        setInput('')
      }
    }, 2000);
  }
  return (
    <div className='flex flex-col mt-4 justify-center gap-2'>
      {users.map((user, i) => (
        <div key={i} className='flex mt-4 items-start gap-4'>
          <img
            src={user.image}
            alt={user.name}
            className='w-20 h-20 rounded-full object-cover'
          />
          <div className='flex-1'>
            <div className='flex flex-col gap-2'>
              <h3 className='text-sm md:text-md font-semibold'>{user.name}</h3>
              <span className='text-sm text-gray-500'>{user.createdat}</span>
            </div>
            <p className='text-gray-600 mt-1 text-sm'>{user.comment}</p>
          </div>
        </div>
      ))}

      <textarea
        placeholder='Add a comment'
        value={input}
        onChange={e => setInput(e.target.value)}
        className=' border-gray-300 rounded-md px-4 py-2 w-full h-48 border mt-4 '
      />
      <div className='flex gap-2'>
        <button
          onClick={handleComment}
          type='submit'
          className='flex justify-center items-center gap-2 text-white text-md px-4 py-3 rounded-md w-[300px] bg-green-400'
        >
          Submit review
          <FaArrowRight size={15} />
        </button>
      </div>

      <section className='block md:hidden'>
        <Courses week='Week 1-4' />
        <Courses week='Week 5-8' />
        <div className='mt-4 px-2'>
          <Progress/>
        </div>
      </section>
    </div>
  )
}

export default Comments
