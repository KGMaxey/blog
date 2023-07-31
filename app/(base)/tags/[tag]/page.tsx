import { allPosts } from "@/.contentlayer/generated"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTag } from '@fortawesome/free-solid-svg-icons'
import { format, parseISO } from "date-fns"

export const generateStaticParams = async () => allPosts.flatMap(post => post.tags ?? [])

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)
  return !!post ? { title: post.title } : { title: 'KGMaxey.com' }
}

const TagPage = ({ params }: { params: {tag: string } }) => {
  const posts = allPosts.filter(post => !!post.tags && post.tags.includes(params.tag))
  return (
    <div>
        <h1>
          <FontAwesomeIcon icon={faTag} size='2xs' transform={{y: 2}} className='text-fg mr-2 opacity-60' />
          {params.tag}
          <span className="text-xl text-fg4 ml-2 text-center opacity-80">{posts.length}</span>
        </h1>
      <ul className='my-8'>
        {
          posts.map(post => (
            <li key={post._id} className="flex justify-content items-center mb-2 before:content-[''] before:bg-fg4 before:rounded-lg before:w-1 before:h-1 before:mx-1">
              <Link href={post.url} className="text-base text-blue1 hover:text-orange2 hover:underline">{post.title}</Link>
              <span className="border-dotted border-b-2 mx-2 grow" />
              <div className='text-sm text-center whitespace-nowrap text-fg4'>{format(parseISO(post.date), 'LLLL d, yyyy')}</div>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default TagPage