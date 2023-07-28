import PostCard from '@/components/postcard'
import SideBar from '@/components/sidebar'
import { allPosts } from 'contentlayer/generated'
import { parseISO } from 'date-fns'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'KGMaxey.com',
  description: 'Dev Blog',
}

export default async function Home() {

  const sorted = allPosts.sort((a, b) => parseISO(a.date).valueOf() - parseISO(b.date).valueOf())
  const tmp = Array(100).fill('').map((_, index) => {
    return sorted[index % sorted.length]
  })

  return (
    <div className='flex justify-center mt-8'>
      <div className='grow shrink xl:pr-16 mt-8'>
        <ul>
          {tmp.map(post => {
            return (
              // <li key={post._id}>
              //   <Link href={post.url}>
              //     {post.title}
              //   </Link>
              // </li>
              <PostCard key={post._id} post={post} />
            )
          })}
        </ul>
      </div>
      <SideBar />
    </div>
  )
}