import {
  FaBars,
  FaRegCommentDots,
  FaQuestionCircle,
  FaUser
} from 'react-icons/fa'

function Icons({}) {
  return (
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
  )
}

export default Icons