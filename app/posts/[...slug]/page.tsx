import { format, parseISO } from 'date-fns'
import { allPosts } from 'contentlayer/generated'
import { getMDXComponent, useMDXComponent } from 'next-contentlayer/hooks'

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

  const Content = useMDXComponent(!!post ? post.body.code : '')

  if (!post) {
    // TODO: KGM - We should never get here due to dynamicParams 404 protection. Would be nice to clean this up
    const postList = allPosts.map(post => post._raw.flattenedPath)
    return <div>PROBLEM {params.slug} - {JSON.stringify(postList)}</div>
  }

  return (
    <article className="py-8">
      <div className="mb-8 text-center">
        <h1>{post.title}</h1>
        <time dateTime={post.date} className="mb-1 text-xs text-fg">
          {format(parseISO(post.date), 'LLLL d, yyyy')}
        </time>
      </div>
      <Content />
    </article>
  )
}

export default PostLayout