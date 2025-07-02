import { FaFileAlt, FaLock } from 'react-icons/fa'

function Courses ({week}:{week:string}) {
  return (
    <div>
      <div className='mt-4 border md:px-4 py-2'>
        <h3 className='font-bold text-md p-2'>{week}</h3>
        <p className='text-sm text-gray-500 mb-2 p-2'>
          Advanced storytelling techniques for writers: Personas, Characters &
          Plots
        </p>

        <ul className='space-y-2 p-2'>
          {[
            'Introduction',
            'Course Overview',
            'Course Overview',
            'Course Exercise / Reference Files',
            'Code Editor Installation (Optional if you have one)',
            ' Embedding PHP in HTML',
          ].map((item, i) => (
            <li
              key={i}
              className='flex justify-between items-center p-2 border rounded hover:bg-gray-50'
            >
              <div className='flex items-center gap-2'>
                <FaFileAlt className='text-gray-500' />
                <span className='text-sm'>{item}</span>
              </div>
              <div className='flex items-center gap-2 text-xs'>
                {item.includes('Overview') && (
                  <>
                    <span className='bg-green-100 text-green-700 px-2 py-0.5 rounded-full'>
                      0 QUESTION
                    </span>
                    <span className='bg-red-100 text-red-700 px-2 py-0.5 rounded-full'>
                      10 MINUTES
                    </span>
                  </>
                )}
                <FaLock className='text-gray-400' />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Courses
