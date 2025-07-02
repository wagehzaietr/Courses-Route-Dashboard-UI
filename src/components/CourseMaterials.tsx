
import CourseItems from './CourseItems'
import { courseDetails1,  courseDetailsColumn2} from '../data/CourseData'


const CourseMaterials = () => {
  return (
    <div className='font-sans text-gray-800 grid grid-cols-1 md:grid-cols-2 gap-10 p-4 mt-4'>
      <div>
        <div className='space-y-3'>
        {courseDetails1.map((item, i) => (
          <CourseItems key={i} icon={item.icon} label={item.label} value={item.value} />
        ))}
        </div>
      </div>
      <div>
        <div className=' space-y-3'>
        {courseDetailsColumn2.map((item, i) => (
          <CourseItems key={i} icon={item.icon} label={item.label} value={item.value} />
        ))}
        </div>
      </div>
    </div>
  )
}

export default CourseMaterials
