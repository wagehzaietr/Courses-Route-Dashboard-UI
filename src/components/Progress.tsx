
import { useState } from 'react'
import { motion } from 'framer-motion'
import { toast } from 'react-hot-toast'

function Progress() {
      const totalTopics = 8
  const [completedTopics, setCompletedTopics] = useState(5)

  const progress = Math.round((completedTopics / totalTopics) * 100)

  // Simulate progress change (for demo)
  const handleCompleteMore = () => {
    setCompletedTopics(prev => (prev < totalTopics ? prev + 1 : prev))
    if (completedTopics < totalTopics) {
      toast.success('Topic Marked as Complete')
    }
  }
  return (
    <div>
                {/* Progress */}
        <div className='relative mb-4'>
          <div className='flex justify-between items-center text-sm mb-1'>
            <span>You</span>
            <span>{progress}%</span>
          </div>
          <div className='w-full bg-gray-200 rounded-full h-2'>
            <motion.div
              className='bg-green-500 h-2 rounded-full'
              style={{ width: '63%' }}
              initial={{ width: '0%' }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 1 }}
            ></motion.div>
          </div>
        </div>
        <div className='flex  justify-between'>
          <button
            className='flex justify-center items-center text-sm gap-2 text-white md:text-md px-4 py-3 rounded-md bg-green-400'
            onClick={handleCompleteMore}
            disabled={completedTopics > totalTopics}
          >
            Mark Next Topic as Complete
          </button>
        </div>
    </div>
  )
}

export default Progress