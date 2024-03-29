import type { fetchResult } from './utils/fetch'
import { useState, useEffect } from 'react'
import { fetchBcv, fetchMdv } from './utils/fetch'
import { Card } from './components/Card'
import { Wait } from './components/Wait'
import bcvImg from './assets/images/bcv.png'
import mdvImg from './assets/images/mdv.png'
import dtvImg from './assets/images/dtv.png'
import heart from './assets/icons/heart-light.svg'

export default function App (): JSX.Element {
  const [bcvData, setBcvData] = useState<fetchResult | false>(false)
  const [mdvData, setMdvData] = useState<fetchResult | false>(false)

  useEffect(() => {
    async function fetchData () {
      await Promise.all([fetchBcv(), fetchMdv()]).then(([bcv, mdv]) => {
        setBcvData(bcv)
        setMdvData(mdv)
      })
    }

    try {
      fetchData()
    } catch (error) {
      console.log(error)
    }
  }, [])

  return (
    <div className='min-h-screen bg-gray-900'>
      <div className='mx-auto py-8 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24'>
        <div className='space-y-10'>
          <div className='space-y-5 sm:space-y-4 w-full'>
            <h2 className='text-3xl font-extrabold text-white tracking-tight sm:text-4xl text-center'>Monitor Dólar</h2>
            <p className='text-xl text-gray-300 text-center'>Ahora puedes instalarla como una PWA.</p>
          </div>
          <ul role='list' className='space-y-4 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:grid-cols-3 lg:gap-8'>
            { mdvData !== false
              ? <Card title='Monitor Dólar Venezuela'
                image={mdvImg}
                price={mdvData.price}
                date={mdvData.date} />
              : <Wait /> }

            { bcvData !== false
              ? <Card
                title='Banco Central de Venezuela'
                image={bcvImg}
                price={bcvData.price}
                date={bcvData.date} />
              : <Wait /> }

            <Card
              title='Dólar Today'
              image={dtvImg}
              price={'0.00'}
              date={'Soon'}
            />
          </ul>
        </div>
      </div>
      <div className='text-gray-300 flex gap-1 my-0 justify-center'>Made with <img className='w-4' src={heart} alt='heart'/> by <a className='text-indigo-400' href='https://alejandroch.com'>alejandroch.com</a></div>
      <div className='text-gray-300 flex gap-1 my-0 justify-center pb-6'>Sources
        <a className='text-indigo-400' href='https://www.instagram.com/bcv.org.ve/'>@bcv.org.ve</a>
        <a className='text-indigo-400' href='https://www.instagram.com/enparalelovzla_oficial/'>@enparalelovzla_oficial</a></div>
    </div>
  )
}
