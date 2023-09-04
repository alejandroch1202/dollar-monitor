export const Wait = (): JSX.Element => {
  return (
    <li key='Banco Central de Venezuela' className='max-w-sm mx-auto md:mx-0 py-10 px-6 bg-gray-800 text-center rounded-lg xl:px-10'>
    <div className='space-y-6'>
      <h3 className='text-white text-xl font-bold'></h3>
      <div className='mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56 bg-gray-400'></div>
      <div className='space-y-2 xl:flex xl:items-center xl:justify-between'>
        <div className='w-full font-medium text-lg leading-6 space-y-2'>
          <p className='text-white border font-bold inline-block rounded-lg p-2 text-2xl'>Loading...</p>
          <p className='text-indigo-400 py-2'></p>
        </div>
      </div>
    </div>
  </li>
  )
}
