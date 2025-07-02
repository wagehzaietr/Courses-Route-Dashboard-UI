import { FaArrowRight } from 'react-icons/fa6'
import Courses from './Courses'
import { useState } from 'react'

const initialUsers  = [
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

const newUserComment: {
    name: string;
    comment: string;
    image: string;
    createdAt: string;
}

function Comments () {
  const [users, setUsers] = useState(initialUsers as [])
  const [newComment, setNewComment] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newComment.trim()) return

    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      const newUserComment = {
        name: 'Current User',
        comment: newComment,
        image: '/default-user.avif', // Replace with your default user image
        createdAt: new Date().toISOString().split('T')[0] // YYYY-MM-DD format
      }

      setUsers( [newUserComment, ...users])
      setNewComment('')
      setIsSubmitting(false)
    }, 500)
  }

  return (
    <div className='flex flex-col justify-center gap-2'>
      {users.map((user, i) => (
        <div key={i} className='flex items-start gap-4'>
          <img
            src={user.image}
            alt={user.name}
            className='w-12 h-12 rounded-full object-cover'
          />
          <div className='flex-1'>
            <div className='flex items-center gap-2'>
              <h3 className='text-lg font-semibold'>{user.name}</h3>
              <span className='text-sm text-gray-500'>{user.createdAt}</span>
            </div>
            <p className='text-gray-600 mt-1'>{user.comment}</p>
          </div>
        </div>
      ))}
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder='Add a comment'
          className=' border-gray-300 rounded-md px-4 py-2 w-full h-48 border '
          value={newComment}
          onChange={e => setNewComment(e.target.value)}
          disabled={isSubmitting}
        />
        <div className='flex gap-2'>
 <button
            type='submit'
            disabled={!newComment.trim() || isSubmitting}
            className={`flex justify-center items-center gap-2 text-white text-md px-4 py-3 rounded-md w-[300px] ${
              isSubmitting || !newComment.trim() ? 'bg-green-400' : 'bg-green-500 hover:bg-green-600'
            }`}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Review'} <FaArrowRight size={15} />
          </button>
        </div>
      </form>

      <section className='block md:hidden'>
        <Courses week='Week 1-4' />
        <Courses week='Week 5-8' />
      </section>
    </div>
  )
}

export default Comments
