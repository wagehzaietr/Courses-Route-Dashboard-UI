
import Courses from './Courses'

function Coursetopics () {
  return (
    <div className='ml-4'>
      <div className='  rounded-lg p-4 shadow-sm'>
        <h2 className='text-xl font-semibold mb-2'>Topics for This Course</h2>

        {/* Progress */}
        <div className='relative mb-4'>
          <div className='flex justify-between items-center text-sm mb-1'>
            <span>You</span>
            <span>63%</span>
          </div>
          <div className='w-full bg-gray-200 rounded-full h-2'>
            <div
              className='bg-green-500 h-2 rounded-full'
              style={{ width: '63%' }}
            ></div>
          </div>
        </div>

        {/* Week 1-4 */}
      </div>
          <div className='px-3'>
            <Courses week="Week 1-4"/>
          </div>
          <br />
          <br />
          <br />
          <br />
          <div className='px-3'>
            <Courses week="Week 5-8" />
          </div>
    </div>
  )
}

export default Coursetopics
