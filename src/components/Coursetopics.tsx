
import Courses from './Courses'
import Progress from './Progress'

function Coursetopics () {

  return (
    <div className='ml-4'>
      <div className='  rounded-lg p-4 shadow-sm'>
        <h2 className='text-xl font-semibold mb-2'>Topics for This Course</h2>

        {/* Progress */}
       <Progress/>
       

        {/* Week 1-4 */}
      </div>
      <div className='px-3'>
        <Courses week='Week 1-4' />
      </div>
      <br />

      <div className='px-3'>
        <Courses week='Week 5-8' />
      </div>
    </div>
  )
}

export default Coursetopics
