import { notFound } from 'next/navigation'
import Image from 'next/image'
import ReactMarkdown from 'react-markdown'
import { getMatchesFootball } from '@/api'
import Link from 'next/link'

const ProductId = async ({ params }: { params: { id: string } }) => {
  const football = await getMatchesFootball()
  const id = Number(params.id)

  const itemId = football.find((item: any) => item.competition.id === id)
  if (!itemId) {
    return notFound()
  }
  console.log(itemId.thumbnail)
  return (
    <main className='min-h-[calc(100vh-80px)]  grid grid-cols-2 max-lg:grid-cols-1 gap-4 px-24 py-12 max-lg:px-6'>
      <div className=' flex items-center justify-center '>
        <Image
          src={
            itemId.thumbnail !== null || itemId.thumbnail !== undefined ? itemId.thumbnail
              : '/images/football.svg'
          }
          alt={itemId.title}
          width={360}
          height={360}
          loading="lazy"
          style={{
            width: '360px',
            height: '360px',
            objectFit: 'cover',
          }}
        />
      </div>
      <div className='flex flex-col items-start justify-center gap-4  '>
        <div className='text-2xl'>Football match : {itemId.title}</div>
        <div>
          Game date and time : {itemId.date.substring(0, 10)}{' '}
          {itemId.date.substring(11, 16)}
        </div>
        <div>Competition : {itemId.competition.name}</div>

        <Link
          target='_blank'
          href={itemId.side1.url}
          className='border-2 border-b-blue-400'
        >
          Team page : {itemId.side1.name}
        </Link>
        <Link
          target='_blank'
          href={itemId.side2.url}
          className='border-2 border-b-blue-400'
        >
          Team page : {itemId.side2.name}
        </Link>
      </div>
    </main>
  )
}

export default ProductId
