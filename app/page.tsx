import { getMatchesFootball } from '@/api'
import Image from 'next/image'
//  import football from '../data.json'

export default async function Home() {
  const football = await getMatchesFootball()

  if (football) {
    return (
      <main className='flex min-h-screen flex-col items-center justify-between p-24'>
        {/* <div dangerouslySetInnerHTML={{ __html: football[0].embed }} /> */}
        <div className='w-full flex flex-wrap gap-4 justify-center items-center p-4 '>
          {football.map((el: any, index: number) => (
            <div
              key={index}
              className='w-[300px] h-[218px] shadow-2xl '
            >
              
              <Image
                src={el.thumbnail}
                alt={el.title}
                width={300}
                height={158}
              />
              <div className='h-[30px] items-center px-2' >{el.title}</div>
              <div className='h-[30px] items-center px-2' >{el.date}</div>
            </div>
          ))}
        </div>
      </main>
    )
  } else {
    return <div>Error loading data</div>
  }
}
