import { Post } from "@/.contentlayer/generated"
import Link from "next/link"

const PostCard = ({ post }: { post: Post }) => {
  return (
    <div className="transition-all group bg-bg mb-8 rounded border border-bg4 shadow-lg hover:bg-bg1">
      <Link href={post.url}>
        <div className="p-4">
          <h2 className="mb-4 text-fg0 group-hover:underline">{post.title}</h2>
          <p className="text-sm font-light text-fg">{post.description}</p>
          <div className="mt-4 text-fg2 group-hover:text-blue1 hover:underline">Read More</div>
        </div>
      </Link>
    </div>
  )
}

export default PostCard