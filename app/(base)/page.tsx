import PostCard from '@/components/postcard'
import { allPosts } from 'contentlayer/generated'
import { parseISO } from 'date-fns'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'KGMaxey.com',
  description: 'Dev Blog',
}

export default async function Home() {
  const sorted = allPosts.sort((a, b) => parseISO(a.date).valueOf() - parseISO(b.date).valueOf())

  return (
    <ul>
      {sorted.map(post => {
        return (
          <PostCard key={post._id} post={post} />
        )
      })}
    </ul>
  )
}