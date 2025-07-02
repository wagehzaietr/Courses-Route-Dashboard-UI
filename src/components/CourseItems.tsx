function CourseItems ({ icon: Icon, label, value }: any) {
  return (
    <>
      <div className='flex justify-between text-[16px] border-b pb-2'>
        <div className='flex justify-center items-center gap-2 '>
          <Icon />
          {label}
        </div>
        <h1>{value}</h1>
      </div>
    </>
  )
}

export default CourseItems
