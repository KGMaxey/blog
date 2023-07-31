import { allPosts } from "@/.contentlayer/generated"
import Link from "next/link"

const Tags = () => {
  const tagMap = allPosts.flatMap(post => post.tags ?? []).reduce((acc, val) => {
    const current = !!acc[val] ? acc[val] : 0
    return { ...acc, [val]: current + 1 }
  }, {} as { [tag: string]: number })

  return (
    <div>
      <h1>Tags</h1>
      <div className="flex flex-wrap pl-2 py-1 my-8">
        {
          Object.keys(tagMap).sort().map(tag => {
            return (
              <div key={tag} className="border border-fg4 px-1 m-1 hover:bg-blue1 hover:text-bg hover:underline hover:border-blue2">
                <Link href={`/tags/${tag}`} className="whitespace-nowrap">{tag} {tagMap[tag]}</Link>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Tags