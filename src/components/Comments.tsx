import { FaArrowRight } from 'react-icons/fa6'

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
  return (
    <div className='flex flex-col justify-center gap-2'>
      {users.map((user, i) => (
        <div key={i} className='flex items-center mb-6 gap-2 space-y-3 '>
          <img
            src={user.image}
            alt={user.name}
            className='w-20 h-20 rounded-full mr-4 object-cover mt-4'
          />
          <div className=''>
            <h3 className='text-lg font-semibold'>{user.name}</h3>
            <p className='text-sm text-gray-500 mb-3'>{user.createdat}</p>
            <p className='text-gray-600 text-sm'>{user.comment}</p>
          </div>
        </div>
      ))}
      <textarea
        placeholder='Add a comment'
        className=' border-gray-300 rounded-md px-4 py-2 w-full h-48 border '
      />
      <div className='flex gap-2'>
        <button
          type='submit'
          className='bg-green-500 flex justify-center items-center gap-2 text-white text-md px-4 py-4 rounded-md w-[260px]'
        >
          Submit Review <FaArrowRight size={15} />
        </button>
      </div>
    </div>
  )
}

export default Comments
