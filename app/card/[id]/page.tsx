import { notFound } from 'next/navigation'
import Image from 'next/image'
import ReactMarkdown from 'react-markdown'
import { getMatchesFootball } from '@/api'

const ProductId = async ({ params }: { params: { id: string } }) => {
  const football = await getMatchesFootball()
  const id = Number(params.id)

  const itemId = football.find((item: any) => item.competition.id === id)
  if (!itemId) {
    return notFound()
  }
  return (
    <main className='min-h-[calc(100vh-80px)]  grid grid-cols-2 max-lg:grid-cols-1 gap-4 px-24 py-12 max-lg:px-6'>
      <div className=' flex items-center justify-center '>
        <Image
          src={itemId.thumbnail}
          alt={itemId.title}
          width={360}
          height={360}
          style={{
            width: '360px',
            height: '360px',
            objectFit: 'cover',
          }}
        />
      </div>
      <div className='flex flex-col items-start justify-between p-4 '>
        <div className='text-2xl'>{itemId.title}</div>
       <div>{itemId.embed}</div>
      </div>
    </main>
  )
}

export default ProductId
