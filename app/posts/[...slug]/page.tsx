import { format, parseISO } from 'date-fns'
import { allPosts } from 'contentlayer/generated'
import TOC from '@/components/toc'
import Post from '@/components/post'
import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTag } from '@fortawesome/free-solid-svg-icons'

export const dynamicParams = false

export const generateStaticParams = async () => allPosts.map((post) => {
  const slug = post._raw.flattenedPath.split('/')
  return { slug }
})

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)
  return !!post ? { title: post.title } : { title: 'KGMaxey.com' }
}

const PostLayout = ({ params }: { params: { slug: string[] } }) => {
  const combinedSlug = params.slug.reduce((acc, val) => `${acc}/${val}`)
  const post = allPosts.find((post) => post._raw.flattenedPath === combinedSlug)

  if (!post) {
    // TODO: KGM - We should never get here due to dynamicParams 404 protection. Would be nice to clean this up
    const postList = allPosts.map(post => post._raw.flattenedPath)
    return <div>PROBLEM {params.slug} - {JSON.stringify(postList)}</div>
  }


  return (
    <div className='flex justify-center mt-8'>
      <div className='flex-1 max-w-full md:max-w-[calc(100%-var(--sidebar))] xl:max-w-[calc(100%-var(--sidebar-xl))] md:pr-16'>
        <article className="article py-8">
          <div className="mb-8 pb-4 border-dotted border-b-2">
            <h1 className='mb-4'>{post.title}</h1>
            <p className='text-fg3 font-light mt-2 mb-8 italic'>{post.description}</p>
            <div className="flex flex-wrap items-center my-2">
              <FontAwesomeIcon icon={faTag} size='sm' className='text-fg pb-2 mr-2 opacity-60' />
              {
                post.tags?.map(tag => (
                  <div key={tag} className="border border-fg4 px-1 mb-2 mr-2 text-sm hover:bg-blue1 hover:text-bg hover:underline hover:border-blue2">
                    <Link href={`/tags/${tag}`} className="whitespace-nowrap">{tag}</Link>
                  </div>
                ))
              }
            </div>
            <time dateTime={post.date} className="text-xs text-fg4 underline">
              <span className='text-fg4'>Posted </span>
              {format(parseISO(post.date), 'LLLL d, yyyy')}
            </time>
          </div>
          <Post post={post} />
        </article>
      </div>
      <TOC post={post} />
    </div>
  )
}

export default PostLayout