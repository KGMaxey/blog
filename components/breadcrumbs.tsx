'use client'
import Link from "next/link"
import { useSelectedLayoutSegments } from "next/navigation"
import { allPosts } from 'contentlayer/generated'

const BreadCrumbs = () => {
  const segments = useSelectedLayoutSegments().filter(segment => !segment.startsWith('('))

  if (segments.length === 0) {
    return (
      <div className="overflow-hidden text-ellipsis">
        <span className='text-sm text-fg4'>Home</span>
      </div>
    )
  } else if (segments.length === 1) {
    const title = segments[0]
    return (
      <div>
        <Link href={'/'} className='text-sm text-blue1 hover:text-orange2 after:content-[">"] after:px-2 after:text-fg4 after:text-xs'>Home</Link>
        <span className='text-sm text-fg4 capitalize'>{title}</span>
      </div>
    )
  } else {
    const post = allPosts.find(post => post._raw.flattenedPath === segments[1])

    if (segments[0] === 'posts' && !!post) {
      return (
        <div className="overflow-hidden text-ellipsis">
          <Link href={'/'} className='text-sm text-blue1 hover:text-orange2 after:content-[">"] after:px-2 after:text-fg4 after:text-xs'>Home</Link>
          <span className='text-sm text-fg4 whitespace-nowrap capitalize'>{post.title}</span>
        </div>
      )
    } else if (segments[0] === 'tags') {
      return (
        <div className="overflow-hidden text-ellipsis">
          <Link href={'/'} className='text-sm text-blue1 hover:text-orange2 after:content-[">"] after:px-2 after:text-fg4 after:text-xs'>Home</Link>
          <Link href={`/tags`} className='text-sm text-blue1 hover:text-orange2 after:content-[">"] after:px-2 after:text-fg4 after:text-xs'>Tags</Link>
          <span className='text-sm text-fg4 whitespace-nowrap'>{segments[1]}</span>
        </div>
      )
    } else {
      return (
        <div className="overflow-hidden text-ellipsis">
          <Link href={'/'} className='text-sm text-blue1'>Home</Link>
        </div>
      )
    }
  }
}

export default BreadCrumbs