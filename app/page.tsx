import { getMatchesFootball } from '@/api'
import Search from '@/components/Search'
import Image from 'next/image'
import Link from 'next/link'

//  import football from '../data.json'

export default async function Home() {
  const football = await getMatchesFootball()
  const newFootball =football.filter((el: any) => (el.title).toLowerCase().includes(('').toLowerCase()))
  if (football) {
    return (
      <main className='flex min-h-screen flex-col items-center justify-between px-24 py-8'>
        {/* <div dangerouslySetInnerHTML={{ __html: football[0].embed }} /> */}
       <div>
         <h1 className='text-3xl'>Current Football Matches</h1>
         <Search />
         </div>
        <div className='w-full flex flex-wrap gap-4 justify-center items-center p-4 '>
          {newFootball.map((el: any, index: number) => (
            <Link
              href={`/card/${el.competition.id}`}
              key={index}
            >
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
                <div className='h-[30px] items-center px-2'>{el.title}</div>
                <div className='h-[30px] items-center px-2'>
                  {el.date.substring(0, 10)} {el.date.substring(11, 16)}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    )
  } else {
    return <div>Error loading data</div>
  }
}
